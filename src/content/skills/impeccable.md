---
id: impeccable
name: Impeccable
description:
  en: "Design guidance and a 23-command vocabulary for AI coding agents, with 59 deterministic detector rules for AI-generated frontend slop (Inter everywhere, purple gradients, nested cards). Includes live browser iteration, anti-pattern guidance, and a standalone CLI detector."
  es: "Guía de diseño y un vocabulario de 23 comandos para agentes de IA que codean, con 59 reglas deterministas de detección del slop típico de diseño generado por IA (Inter en todo, gradientes morados, cards anidadas). Incluye iteración live en el navegador, guía anti-patrones y un CLI de detección independiente."
category_id: design
subcategory: frontend
tags:
  - design
  - ui
  - frontend
  - anti-slop
  - audit
  - accessibility
  - polish
  - design-system
repository: https://github.com/pbakaus/impeccable
type: skill
compatibility:
  - claude-code
  - opencode
  - codex
  - gemini
  - cursor
  - copilot
  - grok
  - antigravity
author: Paul Bakaus
license: Apache-2.0
license_notice: none
version: "1.0"
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

Impeccable is a 23-command design system for AI coding agents. It catches the slop that makes AI-built frontends feel generic — Inter everywhere, purple gradients, nested cards, gray text on colored backgrounds — and gives the agent concrete, deterministic rules to avoid them.

The skill includes 59 detector rules, a standalone CLI (`npx impeccable detect`) that flags slop without needing an LLM, and live browser iteration for real-time design feedback.

## Why it matters

Most "AI-generated UI feels off" problems come from a small, repeating set of design shortcuts agents take. Impeccable encodes the opposite: a closed vocabulary of what good design looks like, expressed as commands the agent can invoke (`/impeccable audit`, `polish`, `critique`, etc.).

## Stats

| Metric | Value |
|--------|-------|
| Stars | 59.1k |
| Forks | 3.6k |
| License | Apache-2.0 |
| Repo | [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
