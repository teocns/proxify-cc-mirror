---
title: "Skills Overview"
description: "What skills are, how they work, and the three-level loading model."
sidebar_position: 1
---

:::tip[Official reference]
For how Claude Code discovers and loads skills, see the [official skills docs](https://code.claude.com/docs/en/skills).
:::

Skills are reusable knowledge packages that teach Claude domain-specific patterns. They load on demand — only when your task matches the skill's trigger description.

## How Skills Work

Skills use a three-level loading model:

| Level | What | When loaded | Budget |
|-------|------|-------------|--------|
| **Metadata** | Name + description | Always (skill registry) | ~100 words |
| **SKILL.md body** | Entry point, routing, core principles | Every time the skill triggers | < 500 lines |
| **References** | Deep docs, scripts, assets | Only when explicitly read | Unlimited |

The **description** is the trigger — it determines whether the skill fires. The body routes to the right reference. References are where the depth lives.

:::tip[The design intent]
A skill's metadata costs almost nothing. Its body loads only when relevant. Its references load only when needed. This is how you give Claude deep knowledge without polluting the context window.
:::

## In This Section

- [Using Skills](using-skills.md) — install, browse, and configure skills
- [Creating Skills](creating-skills.md) — build your own skill
- [Distributing Skills](distributing-skills.md) — share skills with others
