---
id: claude-mem
name: Claude Mem
description:
  en: "Persistent memory for coding agents that extends context across sessions. Remembered facts, coding preferences, user interactions and mistakes are injected into the active context window, without touching the existing files of the project. Works as a plugin plus a mem-search skill."
  es: "Memoria persistente para agentes de código que extiende el contexto entre sesiones. Hechos recordados, preferencias de código, interacciones del usuario y errores se inyectan en la ventana de contexto activa, sin tocar los archivos existentes del proyecto. Funciona como plugin más una skill mem-search."
category_id: memory
tags:
  - memory
  - context
  - sessions
  - sqlite
  - rag
  - persistence
repository: https://github.com/thedotmack/claude-mem
type: plugin
compatibility:
  - claude-code
  - opencode
  - codex
  - gemini
  - copilot
author: "Alex Newman (thedotmack)"
license: Apache-2.0
license_notice: none
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

Claude Mem is a memory plugin for coding agents that uses SQLite + embeddings to remember facts, user preferences, and past interactions across sessions. The remembered context is automatically injected into the active context window — without modifying the project's existing files. The plugin also ships a `mem-search` skill for explicit memory search.

## Why it matters

Agents without persistent memory repeat their own corrections session after session and forget your project conventions the moment the context window rolls over. Claude Mem is the most-st starred attempt to solve that — 90k+ stars across thousands of forks.

## Stats

| Metric | Value |
|--------|-------|
| Stars | 90.8k |
| Forks | 7.9k |
| License | Apache-2.0 |
| Repo | [github.com/thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) |
