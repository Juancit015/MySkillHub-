---
id: vercel-skills-cli
name: "Vercel Labs — Skills CLI (npx skills)"
description:
  en: "The open agent skills tool. Discover, install, update and remove skills across 70+ coding agents (OpenCode, Claude Code, Codex, Cursor and more) from any GitHub/GitLab repo, without manually copying folders."
  es: "La herramienta abierta de skills para agentes. Descubre, instala, actualiza y elimina skills en más de 70 agentes de código (OpenCode, Claude Code, Codex, Cursor y más) desde cualquier repo de GitHub/GitLab, sin copiar carpetas a mano."
category_id: agent-ecosystem
tags:
  - cli
  - install
  - ecosystem
  - discovery
  - skill-management
repository: https://github.com/vercel-labs/skills
type: tool
compatibility:
  - claude-code
  - opencode
  - codex
  - gemini
  - cursor
  - copilot
  - grok
  - antigravity
author: Vercel Labs
license: MIT
license_notice: none
status: ACTIVE
created_at: 2026-08-14
last_checked: 2026-08-14
---

## Overview

`npx skills` is "npm for AI agent skills" — a single command-line tool that discovers, installs, updates, and removes skills across 70+ coding agents. It reads any GitHub or GitLab repo, parses its skills, and writes them into the correct per-agent path on your machine without you copying folders by hand.

It is *not* a skill itself — it is the distribution layer the rest of the ecosystem runs on. The repo also ships one skill (`find-skills`) that powers interactive keyword search across the registry.

## Why it matters

Skills only matter if you can find and install them. Without a tool like this, every agent's installed skills live in a different dotfile path, which makes skill management friction the actual blocker for adoption. Vercel Labs' CLI normalizes that.

## Stats

| Metric | Value |
|--------|-------|
| Stars | 28.9k |
| Forks | 2.4k |
| License | MIT |
| Repo | [github.com/vercel-labs/skills](https://github.com/vercel-labs/skills) |
