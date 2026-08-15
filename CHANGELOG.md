# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.
El formato se basa en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/).

## [Unreleased]

### Added

- `README.md` con descripción del proyecto, stack con versiones SSOT, setup desde `git clone`, comandos de run/build/check, estructura del repositorio, modelo de datos y sección de internacionalización.
- `STRUCTURE.md` con el mapa técnico del repositorio (dónde se edita cada skill, categoría y string de UI).
- Sección de repositorio con la URL pública de clonado verificada contra `https://api.github.com/repos/Juancit015/MySkillHub-`.
- Menú de hamburguesa responsive en móvil con animación de despliegue (`max-height`) y configuración de botón toggle.
- Componentes `CategoryFilter`, `SearchBar`, `TypeBadge`, `LicenseBadge`, `CompatibilityIcons`.
- `src/content/config.ts` con schema Zod v4 (skills + categories), enums de `type`, `license_notice` y `compatibility` ampliado a 9 valores.
- 13 fichas de skills en `src/content/skills/` y 7 categorías en `src/content/categories/` (JSON).
- Internacionalización manual EN/ES en `src/i18n/ui.ts` con rutas espejo bajo `/es/`.
- Integración de Pagefind y Vite external para `pagefind-entry.js` en `astro.config.mjs`.

### Fixed

- Selectores del nav de la hamburguesa (`nav .nav-inner > a`) tras envolver los links en un contenedor `div.nav-inner` para la animación de despliegue.
- Cálculo de los href del locale switch EN/ES: ahora cada botón apunta a la página equivalente del otro idioma con la ruta correcta (`/es/...` y `/...`).
- Truncado de descripción en las cards con `line-clamp: 3` + `text-overflow: ellipsis`, sin estiramiento por flex.

### Changed

- Buscador del MVP reemplazado por filtrado cliente-side en el DOM (Pagefind se conserva solo en build para el índice estático).
- Tags de las cards en bold 700 y color de texto pleno para mayor notoriedad.
