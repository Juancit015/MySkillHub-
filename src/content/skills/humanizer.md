---
id: humanizer
name: Humanizer
description:
  en: "Agent skill that removes signs of AI-generated writing from text. Detects and fixes patterns like inflated symbolism, promotional language, em dash overuse, rule of three, passive voice and filler phrases, producing natural, human-sounding copy."
  es: "Skill de agente que elimina las señales de texto generado por IA. Detecta y corrige patrones como simbolismo inflado, lenguaje promocional, abuso del em dash, la regla de tres, voz pasiva y frases de relleno, produciendo texto natural que suena humano."
category_id: writing
tags:
  - writing
  - ai-detection
  - natural-language
  - rewriting
  - copywriting
repository: https://github.com/blader/humanizer
type: skill
compatibility:
  - claude-code
  - opencode
  - codex
author: "Siqi Chen (blader)"
license: MIT
license_notice: none
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

Humanizer works from Wikipedia's "Signs of AI writing" guide — a closed, detectable set of patterns (inflated symbolism, promotional tone, -ing analyses, vague attributions, em dash overuse, the rule of three, passive voice, and filler phrases). The skill applies the user's own sample text's rhythm and word choice to the rewrite, rather than producing generic "clean" prose.

It distinguishes registers: for encyclopedic, technical, legal or reference text, neutral and plain is **the correct human voice** — no first-person injection is wanted there. The personal-voice treatment is reserved for blogs, essays, opinion and personal writing.

Complementary to Caveman: one cuts tokens, the other cuts "roboticness."

## Stats

| Metric | Value |
|--------|-------|
| Stars | 35.7k |
| Forks | 2.1k |
| License | MIT |
| Repo | [github.com/blader/humanizer](https://github.com/blader/humanizer) |
