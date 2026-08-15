# Estructura del repositorio

Mapa técnico del repositorio MyAgentSkills para mantenedores. Describe dónde se edita cada contenido, string de UI y estilo. Para la presentación general del proyecto, ver [`README.md`](README.md).

## Árbol

```
.
├── astro.config.mjs        Config del sitio: site, integración Pagefind, Vite rollupOptions.external
├── tsconfig.json            Strict + alias @/* → src/*
├── package.json             Scripts: dev | build | preview | check  ·  deps: astro, @astrojs/check, astro-pagefind, typescript
├── .gitignore               node_modules, dist, .astro, .env, logs
├── public/
│   └── favicon.svg
└── src/
    ├── components/           Componentes .astro
    │   ├── SkillCard.astro        Card individual: badges (type/license), título, author, desc (line-clamp 3), tags
    │   ├── SkillGrid.astro        Grid de cards + contador de resultados + mensaje "no results"
    │   ├── CategoryFilter.astro    Sidebar de categorías + tipos con conteos
    │   ├── SearchBar.astro         Buscador (lupa SVG) con filtrado cliente-side en el DOM
    │   ├── TypeBadge.astro         Badge de type (skill/plugin/tool/collection)
    │   ├── LicenseBadge.astro      Banner de license_notice (non-commercial / limited)
    │   └── CompatibilityIcons.astro  Iconos de compatibilidad con agentes
    ├── content/
    │   ├── config.ts              Colecciones + schema Zod v4 (skills y categories)
    │   ├── skills/                13 fichas Markdown (caveman, claude-mem, superpowers, ...)
    │   └── categories/           7 categorías JSON (design, development, memory, productivity, writing, content-hygiene, agent-ecosystem)
    ├── i18n/
    │   └── ui.ts                  Strings UI EN/ES (hero, search, labels, notices). i18n manual.
    ├── layouts/
    │   └── BaseLayout.astro       Header sticky, nav (con menú hamburguesa móvil), locale switch EN/ES, slot, footer, script del toggle
    ├── pages/
    │   ├── index.astro            Home EN
    │   ├── categories/[id].astro  Página de categoría EN
    │   ├── skills/[id].astro      Ficha de skill EN
    │   └── es/                    Rutas espejo ES
    │       ├── index.astro
    │       ├── categories/[id].astro
    │       └── skills/[id].astro
    └── styles/
        └── global.css            Tema dark, variables CSS, header/nav, hero, cards, badges, search, hamburguesa móvil
```

## Dónde se edita cada contenido

| Qué quiero cambiar | Archivo |
| --- | --- |
| Añadir o editar una skill del catálogo | `src/content/skills/<id>.md` (frontmatter) |
| Añadir o editar una categoría | `src/content/categories/<id>.json` |
| Validación de los campos de una ficha | `src/content/config.ts` (schema Zod) |
| Texto del hero, placeholders, labels, avisos de licencia | `src/i18n/ui.ts` (objetos `en` y `es`) |
| Header, footer, nav, menú hamburguesa, locale switch | `src/layouts/BaseLayout.astro` + `src/styles/global.css` |
| Card de skill en el grid | `src/components/SkillCard.astro` |
| Filtros de categoría (sidebar) | `src/components/CategoryFilter.astro` |
| Comportamiento del buscador en vivo | `src/components/SearchBar.astro` (script de filtrado DOM) |
| Estilos globales o de un componente | `src/styles/global.css` |
| Ruta de home, ficha o categoría (EN) | `src/pages/index.astro`, `src/pages/skills/[id].astro`, `src/pages/categories/[id].astro` |
| Ruta equivalente en español | `src/pages/es/index.astro`, `src/pages/es/skills/[id].astro`, `src/pages/es/categories/[id].astro` |
| Config del sitio (site, integraciones, Vite) | `astro.config.mjs` |
| Scripts npm o dependencias | `package.json` |

## Modelo de datos (resumen)

- **Skills** (`src/content/skills/*.md`): Markdown con frontmatter validado por Zod. Campos clave: `id`, `name`, `description {en, es}`, `category_id`, `type`, `compatibility[]`, `license`, `license_notice`, `author`, `repository`, `tags[]`, `created_at`, `last_checked`.
- **Categorías** (`src/content/categories/*.json`): `id`, `name {en, es}`, `description {en, es}`, `icon` (nombre Lucide), `order`.
- **Sin base de datos.** Todo el contenido vive como archivos en el repo y se compila a un sitio estático.

## Internacionalización (i18n manual)

- No se usa `astro-i18next`. Las rutas EN se sirven en `/` y las ES bajo `/es/`.
- Strings de UI centralizados en `src/i18n/ui.ts` (un objeto por locale, con funciones para conteo plural como `resultsCount` y `categorySkillsHeader`).
- Cada página pasa su `locale` (`"en"` | `"es"`) a `BaseLayout` para render de nav, hero, badges y labels.

## Build y búsqueda

- `npm run build` corre `astro build` (genera `dist/` con las páginas estáticas) y luego `pagefind --site dist` indexa el contenido en `dist/pagefind/`.
- El buscador del MVP (`SearchBar.astro`) filtra en vivo el DOM de las cards del grid; Pagefind queda disponible para búsquedas estáticas en el build.

## Assets

- `public/favicon.svg` — favicon del sitio.
- Iconos de agentes, categorías y lupa: referencias por nombre (Lucide) y SVG inline en componentes.
