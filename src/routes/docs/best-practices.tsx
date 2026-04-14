import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/best-practices")({
  head: () => ({
    meta: pageMeta(
      "Best Practices - Labonair Docs",
      "Tips and best practices for getting the most out of Labonair.",
    ),
  }),
  component: BestPractices,
});

function BestPractices() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">Best Practices</h1>
        <p className="text-white/60 leading-relaxed">
          Tips for getting the most out of Labonair's unique features.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">The Shelf workflow</h2>
        <ul className="text-white/60 space-y-3 list-disc list-inside">
          <li>
            At the start of a feature branch, pin the 3–5 files you'll touch most. Use{" "}
            <code className="font-mono">⌘⇧1</code> through{" "}
            <code className="font-mono">⌘⇧5</code> to assign them to slots.
          </li>
          <li>
            Put your most-accessed file in slot 1 (<code className="font-mono">⌘1</code>) — it's
            the fastest to reach.
          </li>
          <li>
            The shelf persists across restarts. Clear slots when switching to a different task
            context.
          </li>
          <li>
            Use the red/amber dot indicators to identify which pinned files need attention without
            switching to them.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">AI Chat effectively</h2>
        <ul className="text-white/60 space-y-3 list-disc list-inside">
          <li>
            Use <code className="font-mono">@filename</code> to include specific files as context.
            Be precise — less context is often better than dumping entire directories.
          </li>
          <li>
            For large refactors, use ACP Agent Mode rather than Direct API chat. Agents can make
            the edits; chat can only suggest them.
          </li>
          <li>
            For 100% offline work, configure Ollama with a code-focused model like{" "}
            <code className="font-mono">codellama</code> or{" "}
            <code className="font-mono">deepseek-coder</code>.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Working with ACP agents</h2>
        <ul className="text-white/60 space-y-3 list-disc list-inside">
          <li>
            Always review the permission dialog before approving agent actions. The description
            tells you exactly what will be executed.
          </li>
          <li>
            For destructive operations (deletes, large refactors), commit or stash your current
            work before giving the agent a task.
          </li>
          <li>
            Break large tasks into smaller steps. Agents perform better with focused, specific
            instructions.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Privacy hygiene</h2>
        <ul className="text-white/60 space-y-3 list-disc list-inside">
          <li>
            Never put API keys in <code className="font-mono">settings.json</code>. Always use the
            Chat Panel → Settings Tab, which stores keys in your OS keychain.
          </li>
          <li>
            For sensitive codebases, use Ollama so no code context leaves your machine during AI
            interactions.
          </li>
          <li>
            Version your <code className="font-mono">~/.labonair/</code> folder in a{" "}
            <strong className="text-white/80">private</strong> Git repository to sync settings
            across machines without exposing them.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Performance tips</h2>
        <ul className="text-white/60 space-y-3 list-disc list-inside">
          <li>
            Keep the Extension Host lean. Disable extensions you don't actively use — every
            extension adds startup overhead.
          </li>
          <li>
            Typewriter Mode reduces eye movement during long editing sessions and can meaningfully
            reduce fatigue. Toggle it on for focused work.
          </li>
          <li>
            Inline Blame is lightweight and always-on. If you find it distracting during active
            editing, toggle it off temporarily:{" "}
            <code className="font-mono">
              "labonair.versionControl.inlineBlame.enabled": false
            </code>
          </li>
        </ul>
      </section>
    </div>
  );
}
