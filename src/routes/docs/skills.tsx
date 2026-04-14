import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/skills")({
  head: () => ({
    meta: pageMeta(
      "ACP Agents - Labonair Docs",
      "Connect autonomous coding agents to Labonair via Agent Client Protocol (ACP). Claude Code and more.",
    ),
  }),
  component: ACPDocs,
});

function ACPDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">ACP Agents</h1>
        <p className="text-white/60 leading-relaxed">
          Beyond chat, Labonair supports fully autonomous coding agents via the{" "}
          <strong className="text-white/80">Agent Client Protocol (ACP)</strong>. These agents can
          run terminal commands, create and edit files, and refactor entire directories — all from
          within the editor.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">What agents can do</h2>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>Execute terminal commands</li>
          <li>Create, read, and edit files</li>
          <li>Refactor entire directories</li>
          <li>Run tests and interpret results</li>
          <li>Search the codebase and fix bugs autonomously</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Supported agents</h2>
        <p className="text-white/60 leading-relaxed">
          Any agent that implements the ACP interface can connect to Labonair. Currently tested:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <a
              href="https://docs.anthropic.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80"
            >
              Claude Code
            </a>{" "}
            — Anthropic's autonomous coding agent
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Human-in-the-Loop</h2>
        <p className="text-white/60 leading-relaxed">
          Labonair includes a built-in permission system. When an agent attempts a high-impact
          action — writing to files, running shell commands, deleting content — the editor shows a
          confirmation dialog. You approve or deny each action before it executes.
        </p>
        <p className="text-white/60 leading-relaxed">
          You remain in full control at all times. Agents cannot take actions silently.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Connecting an agent</h2>
        <ol className="text-white/60 space-y-2 list-decimal list-inside">
          <li>Open the AI Chat Panel from the Dock</li>
          <li>
            Switch to <strong className="text-white/80">Agent Mode</strong> in the chat header
          </li>
          <li>
            The panel will show a connection prompt or auto-detect a running agent on your system
          </li>
          <li>Start a task — the agent will request permissions as needed</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Prerequisites</h2>
        <p className="text-white/60 leading-relaxed">
          Labonair connects to agent CLIs already installed on your system. Install the agent
          separately and ensure it works before connecting:
        </p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm text-white/70">
          <p>
            <span className="text-muted-foreground select-none">$ </span>
            <span>npm install -g @anthropic-ai/claude-code</span>
          </p>
        </div>
        <p className="text-white/60 leading-relaxed">
          Labonair does not manage agent credentials — the agent handles its own authentication
          (Claude Code via Anthropic OAuth, stored in{" "}
          <code className="font-mono">~/.claude/</code>).
        </p>
      </section>
    </div>
  );
}
