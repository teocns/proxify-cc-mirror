import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://proxify-dev.github.io',
  base: '/Claude-Code',
  integrations: [
    starlight({
      title: 'Claude-Code',
      description: "Proxify's Claude Code acceleration toolkit",
      customCss: ['./src/styles/custom.css'],
      head: [
        // Inter variable font — optical sizing + full weight range
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..700&display=swap',
          },
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/proxify-dev/Claude-Code' },
      ],
      sidebar: [
        {
          label: 'Mindset',
          items: [
            { label: 'Agentic Engineering', link: '/patterns/agentic-engineering/' },
            { label: 'The Maturity Ladder', link: '/patterns/maturity-ladder/' },
          ],
        },
        {
          label: 'Setup',
          items: [
            { label: 'Writing CLAUDE.md', link: '/setup/claude-md/' },
            { label: 'Skills Stack', link: '/setup/skills-stack/' },
            { label: 'Hooks Playbook', link: '/setup/hooks-playbook/' },
            { label: 'MCP Wiring', link: '/setup/mcp-wiring/' },
            { label: 'Terminal Setup', link: '/setup/terminal-setup/' },
          ],
        },
        {
          label: 'Daily Workflow',
          items: [
            { label: 'Workflow Patterns', link: '/patterns/workflow-patterns/' },
            { label: 'Context Management', link: '/patterns/context-management/' },
            { label: 'Session Management', link: '/patterns/session-management/' },
            { label: 'Parallel Execution', link: '/patterns/parallel-execution/' },
            { label: 'Prompting Craft', link: '/patterns/prompting-craft/' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            { label: 'Autonomous Tasks', link: '/patterns/autonomous-tasks/' },
            { label: 'Self-Improving Loop', link: '/patterns/self-improving-loop/' },
            { label: 'Subagent Patterns', link: '/patterns/subagent-patterns/' },
          ],
        },
        {
          label: 'Skills',
          items: [
            { label: 'Overview', link: '/skills/overview/' },
            { label: 'Using Skills', link: '/skills/using-skills/' },
            { label: 'Creating Skills', link: '/skills/creating-skills/' },
            { label: 'Distributing Skills', link: '/skills/distributing-skills/' },
          ],
        },
        {
          label: 'Agents',
          items: [
            { label: 'Creating Agents', link: '/agents/creating-agents/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Onboarding Checklist', link: '/reference/onboarding-checklist/' },
            { label: 'Common Pitfalls', link: '/reference/common-pitfalls/' },
            { label: 'Links & Resources', link: '/reference/links/' },
            { label: 'Shortcuts & Commands', link: '/reference/shortcuts/' },
          ],
        },
      ],
    }),
  ],
});
