---
id: caveman
name: Caveman
description:
  en: "Claude Code skill that cuts 65% of tokens by making the agent talk like a caveman: precise, minimal instructions with a simple one-word vocabulary. Enforces a significantly smaller tool-call syntax to reduce input, output and API cost."
  es: "Skill de Claude Code que recorta un 65% de tokens haciendo que el agente hable como cavernícola: instrucciones precisas y mínimas con vocabulario simple de una palabra. Impone una sintaxis de llamadas a herramientas mucho más pequeña para reducir coste de entrada, salida y API."
category_id: productivity
tags:
  - tokens
  - brevity
  - efficiency
  - cost-reduction
  - compression
  - llm-costs
repository: https://github.com/JuliusBrussee/caveman
type: skill
compatibility:
  - claude-code
  - opencode
  - codex
  - gemini
  - cursor
  - copilot
  - grok
author: Julius Brussee
license: "MIT (skill) / BSL-1.1 (engine)"
license_notice: limited
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

Caveman forces the agent to respond "like a caveman": it drops articles, filler, politeness and nuance, while preserving every technical detail, code block, error message and symbol. The repo reports a 65% reduction in output tokens across compatible tasks. Activation is via `/caveman` or phrases like "modo caveman", and intensity can be tuned (`lite`, `full`, `ultra`, plus a Chinese-classic `wenyan` variant).

The skill self-clears to normal prose for safety warnings, irreversible-action confirmations, and ambiguous multi-step sequences.

## License note

The **skill itself is MIT**, but the bundled `caveman-engine` is under BSL-1.1 (Business Source License) — limited/non-commercial in its restricted tranches. Using just the instructions is fine; bundling the engine in a commercial product may require checking the license.

## Stats

| Metric | Value |
|--------|-------|
| Stars | 98.2k |
| Forks | 3.4k |
| License | MIT (skill) + BSL-1.1 (engine) |
| Repo | [github.com/JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) |
