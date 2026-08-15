---
id: remove-ai-marks
name: "Watermarks Remover (remove-ai-marks)"
description:
  en: "Skill that removes multi-vendor AI provenance marks: Unicode text hygiene, statistical rewrite hooks, and C2PA/metadata removal from PNG, JPEG, SVG, PDF, DOCX, HTML and Markdown files."
  es: "Skill que elimina las marcas de procedencia de IA de múltiples proveedores: higiene de texto Unicode, ganchos estadísticos de reescritura y borrado de C2PA/metadatos de archivos PNG, JPEG, SVG, PDF, DOCX, HTML y Markdown."
category_id: content-hygiene
tags:
  - watermark
  - provenance
  - c2pa
  - privacy
  - metadata
  - unicode
repository: https://github.com/guillaumemeyer/watermarks-remover
type: skill
compatibility:
  - grok
  - unknown
author: Guillaume Meyer
license: MIT
license_notice: none
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

remove-ai-marks strips AI provenance watermarks across two layers:
- **Layer A** removes invisible Unicode text watermarks and file metadata — deterministic and verifiable.
- **Layer B** statistically rewrites the text to break statistical watermarks (SynthID, etc.). The repo is honest that this is best-effort: rewriting degrades tone, voice, and accuracy, because it's bounded by the rewriter model's ceiling.

Covers PNG, JPEG, SVG, PDF, DOCX, HTML and Markdown.

## Compatibility note

This skill is **not compatible with Claude Code**. The repo targets Grok Build, and the underlying scripts are agent-independent Python. Listed compatibility: `grok` + `unknown`.

## Stats

| Metric | Value |
|--------|-------|
| Stars | 7.7k |
| Forks | 590 |
| License | MIT |
| Repo | [github.com/guillaumemeyer/watermarks-remover](https://github.com/guillaumemeyer/watermarks-remover) |
