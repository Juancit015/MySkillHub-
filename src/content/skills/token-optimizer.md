---
id: token-optimizer
name: Token Optimizer
description:
  en: "A set of skills that finds ghost tokens (invisible hidden characters that inflate context windows), fixes them, survives LLM compaction and avoids context quality decay. Includes token quality monitoring for large codebases."
  es: "Conjunto de skills que encuentra ghost tokens (caracteres ocultos invisibles que inflan la ventana de contexto), los corrige, sobrevive a la compactación del LLM y evita la degradación de la calidad del contexto. Incluye monitoreo de calidad de tokens para codebases grandes."
category_id: productivity
tags:
  - tokens
  - context
  - compaction
  - cost
  - ghost-tokens
  - monitoring
repository: https://github.com/alexgreensh/token-optimizer
type: plugin
compatibility:
  - claude-code
  - opencode
  - codex
  - copilot
author: "Alex Greenshpun (alexgreensh)"
license: PolyForm Noncommercial 1.0.0
license_notice: non-commercial
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

Token Optimizer attacks token waste on three fronts: structural waste (inflated configs, unused skills, stale memory), execution waste (verbose output, re-reads), and behavior waste (bad model routing, cache expiry, retry loops). Its differentiator vs. tools like Headroom, RTK or JFrog Boost is coverage — those compress bash output (15-25% of context), while this one covers all eight output surfaces.

**Compaction survival**: creates checkpoints before auto-compact and restores after — without this, compression savings evaporate as soon as compaction triggers.

## License note

Non-commercial license (PolyForm Noncommercial 1.0.0). Using this in a commercial context violates the license — verify before deploying at work.

## Stats

| Metric | Value |
|--------|-------|
| Stars | 1.9k |
| Forks | 150 |
| License | PolyForm Noncommercial 1.0.0 |
| Repo | [github.com/alexgreensh/token-optimizer](https://github.com/alexgreensh/token-optimizer) |
