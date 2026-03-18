# Claude-Code

Proxify's Claude Code acceleration plugin — skills, agents, and guides for agentic engineering.

## Mission

Move Proxify engineers from "AI assistance" to "delegation." The target engineer works in a brownfield codebase with real history, conventions, and tech debt. Every skill, doc, and agent in this repo should serve that shift — not AI theory, not greenfield idealism.

**The core model:** You are the architect and reviewer. The agent is the implementer. This repo exists to help engineers internalize that model and set up the context (CLAUDE.md, skills, agents) that makes it work.

## Principles

- **Distribute, don't document** — content should reach engineers through `npx skills add`, not Slack links. Skills and agents are the primary delivery mechanism.
- **Essential only** — when content becomes redundant or generic, cut it. Value is in specificity and density, not breadth.
- **Context is the leverage point** — CLAUDE.md, skills, and agents are all context-delivery mechanisms. The goal is loading the right knowledge at the right time.
- **Markdown-native** — all content stays `.md`. Files must render natively on GitHub. No `.mdx` unless JSX is actually required.
- **One topic per file, self-contained** — each document covers exactly one thing and can be understood without reading others.
- **Engineers are the audience** — brownfield reality, not greenfield idealism.

## Plugin Structure

- `/skills/` — Distributable skills (discovered by `npx skills add`)
- `/agents/` — Bundled subagents (future)
- `/docs/` — Guides and references for engineers
- `/.claude-plugin/plugin.json` — Plugin manifest

## Available Skills

| Skill | Install |
|-------|---------|
| `skill-architecture` | `npx skills add proxify-dev/Claude-Code@skill-architecture` |
| `agent-development` | `npx skills add proxify-dev/Claude-Code@agent-development` |

## Content Conventions

- All content is Markdown — one topic per file, self-contained
- Prefer bullet points and tables over prose
- File names: lowercase, hyphens, `.md` extension
- Internal links use relative paths
- Every doc file gets frontmatter: `title`, `description`, `sidebar_position`

## Adding a New Skill

1. Create `skills/<skill-name>/SKILL.md` with valid frontmatter (`name` must match directory name)
2. Add `references/` subdirectory for deep content if needed
3. The skill becomes installable via `npx skills add proxify-dev/Claude-Code@<skill-name>`
4. skills.sh auto-discovers it once pushed to GitHub

## Adding an Agent

1. Create `agents/<agent-name>.md` with YAML frontmatter (name, description, model, color)
2. Write the system prompt as the markdown body
3. The agent is bundled with the plugin

## Adding Documentation

- Add new docs to the appropriate `/docs/` subdirectory (`setup/`, `patterns/`, `skills/`, `agents/`, `reference/`)
- Add frontmatter (`title`, `description`, `sidebar_position`) to every doc file
- Update README.md with a link

**Include** if the content is Proxify-specific, teaches the delegation mindset, or is context an agent needs to execute a task correctly.

**Backlink** if the content is better maintained upstream (official Claude Code docs, the skill itself) — reference it, don't duplicate it.

**Cut** if the content would apply equally to any developer using Claude Code on any project. Generic advice belongs upstream.

## Dual-Repo Boundary

| Repo | Path | Role |
|------|------|------|
| Personal skills | `~/skills/` | Source of truth for custom skills. **Read-only from this project.** |
| Active skills | `~/.claude/skills/` | Where `npx skills add` installs to |
| This org repo | This project | Proxify plugin + knowledge base. **All writes go here.** |

**The boundary rule:** Read from `~/skills/`, write only to this project. To update an original skill, switch to `~/skills/`.

## Reference Documents

### Skill Architecture — `@skills/skill-architecture/SKILL.md`
**Read when:** Creating or restructuring skills, deciding where knowledge should live

### Agent Development — `@skills/agent-development/SKILL.md`
**Read when:** Creating agents, writing system prompts, configuring MCP servers
