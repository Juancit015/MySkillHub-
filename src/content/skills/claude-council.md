---
id: claude-council
name: Claude Council
description:
  en: "A Claude Code plugin that asks several AI coding agents the same question and compares their answers. Get better results and validation by debating architecture and code decisions with the full team of AI agents in parallel."
  es: "Plugin de Claude Code que consulta a varios agentes de IA de código la misma pregunta y compara sus respuestas. Mejores resultados y validación al debatir decisiones de arquitectura y código con el equipo completo de agentes en paralelo."
category_id: agent-ecosystem
tags:
  - multi-agent
  - decision-making
  - debate
  - architecture
  - plugin
  - comparison
repository: https://github.com/hex/claude-council
type: plugin
compatibility:
  - claude-code
author: Hex
license: MIT
license_notice: none
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

Claude Council is a plugin (not a SKILL.md) that takes your question to a roundtable of AI coding agents at once — Gemini, OpenAI, Grok, Perplexity and Kimi via API, or codex/antigravity/grok/kimi via local CLI — and shows their answers side by side. Includes `--debate` mode where the responses are contrasted against each other, and `--agents` mode where subagents analyze each response in parallel before synthesizing a final answer.

A proactive agent also fires when it detects you're stuck, suggesting you ask the council.

## Stats

| Metric | Value |
|--------|-------|
| Stars | 625 |
| Forks | 90 |
| License | MIT |
| Repo | [github.com/hex/claude-council](https://github.com/hex/claude-council) |
