// Lógica client-side del catálogo: orden, filtro por tipo y búsqueda en vivo.
// Se arranca desde BaseLayout (initCatalog). Todas las funciones son
// idempotentes y con guard: solo actúan si el elemento existe en la página.

function getGrid(): HTMLElement | null {
  return document.getElementById("skills-grid");
}

function getCards(): HTMLElement[] {
  const grid = getGrid();
  return grid ? (Array.from(grid.children) as HTMLElement[]) : [];
}

function getActiveType(): string | null {
  const el = document.querySelector<HTMLElement>("[data-type-filter].active");
  const value = el?.dataset.typeFilter || null;
  return value === "all" ? null : value;
}

// El estado (query + tipo activo) se lee del DOM, no de variables del módulo:
// así no importa cómo Vite agrupe los imports, nunca hay estado duplicado.
function applyFilters(): void {
  const cards = getCards();
  if (cards.length === 0) return;

  const input = document.getElementById("search") as HTMLInputElement | null;
  const sep = input?.dataset.separator || "of";
  const total = cards.length;
  const q = (input?.value || "").trim().toLowerCase();
  const activeType = getActiveType();

  let matches = 0;
  for (const card of cards) {
    const typeOk = !activeType || card.dataset.type === activeType;
    const textOk = q.length < 2 || (card.textContent || "").toLowerCase().includes(q);
    const show = typeOk && textOk;
    card.style.display = show ? "" : "none";
    if (show) matches++;
  }

  const counter = document.getElementById("results-count");
  if (counter) {
    const plural = (n: number) => `skill${n === 1 ? "" : "s"}`;
    counter.textContent =
      q.length >= 2
        ? `${matches} ${sep} ${total} ${plural(total)}`
        : activeType
          ? `${matches} ${plural(matches)}`
          : `${total} ${plural(total)}`;
  }

  const empty = document.getElementById("search-no-results");
  if (empty) {
    empty.style.display = (q.length >= 2 || activeType) && matches === 0 ? "" : "none";
  }
}

function initSort(): void {
  const select = document.querySelector<HTMLSelectElement>("[data-sort]");
  const grid = getGrid();
  if (!select || !grid) return;

  select.addEventListener("change", () => {
    const cards = Array.from(grid.children) as HTMLElement[];
    const value = select.value;
    cards.sort((a, b) => {
      if (value === "name") {
        return (a.querySelector("h3")?.textContent || "").localeCompare(
          b.querySelector("h3")?.textContent || ""
        );
      }
      if (value === "new") {
        // Fechas ISO (YYYY-MM-DD) comparan bien lexicográficamente.
        return (b.dataset.created || "").localeCompare(a.dataset.created || "");
      }
      return 0;
    });
    for (const card of cards) grid.appendChild(card);
  });
}

// Filtros de tipo: tabs segmentados y chips del sidebar comparten estado.
function initTypeFilter(): void {
  const items = Array.from(
    document.querySelectorAll<HTMLElement>("[data-type-filter]")
  );
  if (items.length === 0) return;

  const toggle = (item: HTMLElement) => {
    const wasActive = item.classList.contains("active");
    for (const i of items) {
      i.classList.remove("active");
      if (i.getAttribute("role") === "tab") i.setAttribute("aria-selected", "false");
    }
    if (!wasActive) {
      item.classList.add("active");
      if (item.getAttribute("role") === "tab") item.setAttribute("aria-selected", "true");
    }
    applyFilters();
  };

  for (const item of items) {
    if (item.getAttribute("role") === "tab") {
      item.addEventListener("click", () => toggle(item));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle(item);
        }
      });
      continue;
    }
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.addEventListener("click", () => toggle(item));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(item);
      }
    });
  }
}

function initSearch(): void {
  const input = document.getElementById("search") as HTMLInputElement | null;
  if (!input) return;
  input.addEventListener("input", () => applyFilters());

  const btn = document.getElementById("search-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      applyFilters();
      getGrid()?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function initExampleChips(): void {
  const input = document.getElementById("search") as HTMLInputElement | null;
  const chips = Array.from(document.querySelectorAll<HTMLElement>(".example-chip"));
  if (!input || chips.length === 0) return;

  for (const chip of chips) {
    chip.addEventListener("click", () => {
      input.value = chip.dataset.example || "";
      applyFilters();
      getGrid()?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

export function initCatalog(): void {
  initSort();
  initTypeFilter();
  initSearch();
  initExampleChips();
}
