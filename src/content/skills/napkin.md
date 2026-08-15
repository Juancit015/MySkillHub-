---
id: napkin
name: Napkin
description:
  en: "A Claude Code skill that gives the agent persistent memory of its mistakes via a per-repo markdown scratchpad (NAPKIN.md). The agent logs what it got wrong after each failure and consults it before acting, reducing repeated errors across sessions."
  es: "Skill de Claude Code que da al agente memoria persistente de sus errores mediante un bloc de notas markdown por repo (NAPKIN.md). El agente anota lo que hizo mal tras cada fallo y lo consulta antes de actuar, reduciendo errores repetidos entre sesiones."
category_id: memory
tags:
  - memory
  - mistakes
  - learning
  - scratchpad
  - markdown
repository: https://github.com/blader/napkin
type: skill
compatibility:
  - claude-code
  - codex
author: "Siqi Chen (blader)"
license: MIT
license_notice: none
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

Napkin takes a no-infrastructure approach to agent memory: a single markdown scratchpad per repository (`NAPKIN.md`). The agent reads it at the start of a session, logs what went wrong and what got corrected throughout the session, and consults it before acting.

Per the author, the behavioral shift is noticeable around session 3-5: the agent stops repeating already-corrected errors and begins anticipating problems.

A lighter, fully-auditable counterpart to Claude Mem (which uses SQLite + embeddings).

## Stats

| Metric | Value |
|--------|-------|
| Stars | 580 |
| Forks | 110 |
| License | MIT |
| Repo | [github.com/blader/napkin](https://github.com/blader/napkin) |
