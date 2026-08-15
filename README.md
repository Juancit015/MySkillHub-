# MyAgentSkills

Catálogo web bilingüe (inglés / español) de skills, plugins y herramientas para agentes de IA de código. Permite descubrir, comparar e instalar las skills que de verdad mejoran a tu coding agent (Claude Code, OpenCode, Codex, Gemini, Cursor, Copilot, Grok, Antigravity). Sitio estático generado con [Astro](https://astro.build) e indexado con [Pagefind](https://pagefind.app) para búsqueda.

El catálogo lista 13 entradas curadas organizadas en 7 categorías, con fichas individuales por skill (descripción, autor, licencia, compatibilidad con agentes y tags), filtros por categoría y búsqueda en vivo.

## Stack

Versiones verificadas desde `package.json` y `package-lock.json`:

- **Astro** `5.18.2` — generador de sitio estático (SSG) base.
- **@astrojs/check** `0.9.10` — typecheck del proyecto (`astro check`).
- **astro-pagefind** `1.8.6` — integración de Pagefind para índice de búsqueda generado en build.
- **TypeScript** `5.9.3` — tipado (config `astro/tsconfigs/strict`).
- **Node.js** `24.16.0` — runtime requerido (`npm` `11.13.0`).
- **Sin base de datos, sin backend, sin variables de entorno.** El sitio es estático puro.

## Requisitos previos

- **Node.js** 20.0+ (probado en Node 24.16.0; Astro 5 requiere Node 18.20.8+ / 20.3+ / 22+).
- **Git** para clonar el repositorio.
- Un navegador moderno para previsualizar.

## Setup

1. Clona el repositorio y entra en la carpeta:

   Linux / macOS:

   ```bash
   git clone https://github.com/Juancit015/MySkillHub-.git
   cd MySkillHub-
   ```

   Windows (PowerShell):

   ```powershell
   git clone https://github.com/Juancit015/MySkillHub-.git
   cd MySkillHub-
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. (Opcional) Verifica el tipado con `astro check`:

   ```bash
   npm run check
   ```

No hay `.env` que configurar: el proyecto no lee variables de entorno.

## Run

Servidor de desarrollo en `http://localhost:4321/`:

```bash
npm run dev
```

Build de producción (genera `dist/` y ejecuta el indexado de Pagefind sobre el resultado):

```bash
npm run build
```

El build produce **42 páginas** estáticas y Pagefind indexa sus contenidos para la búsqueda.

Previsualizar el build de producción en `http://localhost:4321/` (puerto por defecto de Astro, cambia si está ocupado):

```bash
npm run preview
```

Typecheck:

```bash
npm run check
```

## Estructura

```
.
├── astro.config.mjs      Config: site https://myagentskills.dev, integración Pagefind, Vite external pagefind-entry
├── tsconfig.json          Strict + alias @/* → src/*
├── package.json          Scripts: dev | build | preview | check
├── public/
│   └── favicon.svg
└── src/
    ├── components/        SkillCard, SkillGrid, CategoryFilter, SearchBar, TypeBadge, LicenseBadge, CompatibilityIcons
    ├── content/
    │   ├── config.ts      Schema Zod v4 (skills + categories), enums de type, license_notice, compatibility
    │   ├── skills/        13 fichas en Markdown (caveman, claude-mem, superpowers, ...)
    │   └── categories/   7 categorías en JSON (design, development, memory, productivity, writing, content-hygiene, agent-ecosystem)
    ├── i18n/
    │   └── ui.ts         Strings UI EN/ES (i18n manual, no astro-i18next)
    ├── layouts/
    │   └── BaseLayout.astro   Header sticky, nav con hamburguesa móvil, locale switch EN/ES, footer
    ├── pages/
    │   ├── index.astro        Home en inglés (EN)
    │   ├── categories/[id].astro
    │   ├── skills/[id].astro
    │   └── es/                Rutas espejo en español (index, categories/[id], skills/[id])
    └── styles/
        └── global.css    Tema dark, cards, nav, search, badges
```

> **Estructura detallada del repositorio:** consultar [STRUCTURE.md](STRUCTURE.md).

## Modelo de datos

Cada skill se documenta en un archivo Markdown bajo `src/content/skills/` con frontmatter validado por el schema Zod de `src/content/config.ts`. Campos principales:

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `id` | string | Identificador único (ej. `caveman`) |
| `name` | string | Nombre de la skill |
| `description` | `{ en, es }` | Descripción bilingüe |
| `category_id` | string | Referencia a una categoría (ej. `productivity`) |
| `type` | `skill \| plugin \| tool \| collection` | Naturaleza de la entrada |
| `compatibility` | string[] | Agentes compatibles (de 9 valores: `claude-code`, `opencode`, `codex`, `gemini`, `cursor`, `copilot`, `grok`, `antigravity`, `unknown`) |
| `license` | string | Licencia declarada en el repo original |
| `license_notice` | `none \| non-commercial \| limited` | Aviso de licencia restrictiva (renderiza un banner) |
| `author` | string | Autor / mantenedor del repo original |
| `repository` | string (URL) | URL del repositorio de origen |
| `tags` | string[] | Etiquetas de búsqueda |
| `created_at` / `last_checked` | date | Fechas de alta y última verificación |

Las categorías viven en `src/content/categories/` como JSON con `id`, `name {en, es}`, `description {en, es}`, `icon` (nombre de icono Lucide) y `order`.

## Internacionalización

El sitio es bilingüe EN/ES. El i18n es **manual** (no usa `astro-i18next`): las rutas en español se sirven bajo el prefijo `/es/` y los strings de UI se definen en `src/i18n/ui.ts`. El layout linkea cada página con su equivalente en el otro idioma y marca el idioma activo en el switch EN/ES del header.

## Scripts disponibles

| Script | Comando | Descripción |
| --- | --- | --- |
| `dev` | `astro dev` | Servidor de desarrollo con HMR en `:4321` |
| `build` | `astro build && pagefind --site dist` | Build estático + indexado de búsqueda |
| `preview` | `astro preview` | Sirve el build de producción localmente |
| `check` | `astro check` | Typecheck del proyecto |

## Repositorio

- **Remoto (origin):** `https://github.com/Juancit015/MySkillHub-.git`
- **Clonar:** `git clone https://github.com/Juancit015/MySkillHub-.git`

## Licencia

Este repositorio (el sitio MyAgentSkills) documenta skills de terceros. Cada entrada del catálogo conserva la licencia declarada por su repositorio original en el campo `license` de su ficha.
