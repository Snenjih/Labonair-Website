import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/worktrees")({
  head: () => ({
    meta: pageMeta(
      "Extensions - Labonair Docs",
      "Extensions in Labonair via OpenVSX Registry. What works, what doesn't, and how to install.",
    ),
  }),
  component: ExtensionsDocs,
});

function ExtensionsDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">Extensions</h1>
        <p className="text-white/60 leading-relaxed">
          Labonair uses the{" "}
          <a
            href="https://open-vsx.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            OpenVSX Registry
          </a>{" "}
          — an open-source, vendor-neutral alternative to the Microsoft Marketplace. No Microsoft
          account required.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Installing extensions</h2>
        <p className="text-white/60 leading-relaxed">
          Open the Extensions view from the Dock (puzzle icon, bottom left) and search as you
          would in VS Code. Extensions install from OpenVSX automatically.
        </p>
        <p className="text-white/60 leading-relaxed">
          You can also install from a <code className="font-mono">.vsix</code> file by opening
          the Extensions view, clicking the <code className="font-mono">···</code> menu, and
          choosing <strong className="text-white/80">Install from VSIX…</strong>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">What works</h2>
        <p className="text-white/60 leading-relaxed">
          The vast majority of language and tooling extensions are available on OpenVSX:
        </p>
        <ul className="text-white/60 space-y-1 list-disc list-inside columns-2">
          <li>Python, Rust, Go, Java</li>
          <li>C/C++, C#, Zig</li>
          <li>Vue, React, Svelte</li>
          <li>ESLint, Prettier</li>
          <li>Docker, Kubernetes</li>
          <li>GitLens (open-source fork)</li>
          <li>Themes and icon packs</li>
          <li>Vim / Evil mode</li>
          <li>REST Client, Thunder Client</li>
          <li>Markdown, LaTeX, MDX</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">What doesn't work</h2>
        <p className="text-white/60 leading-relaxed">
          These extensions rely on proprietary Microsoft APIs or hardcoded Microsoft endpoints and
          are intentionally incompatible:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-white/80">GitHub Copilot (original)</strong> — use
            Labonair's native AI Core instead
          </li>
          <li>
            <strong className="text-white/80">Live Share (original)</strong> — Microsoft
            server-dependent; P2P Live Share is on the roadmap
          </li>
          <li>
            Extensions that explicitly call{" "}
            <code className="font-mono">vscode.microsoft.com</code> APIs
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Extension data</h2>
        <p className="text-white/60 leading-relaxed">
          Extensions install to and run from{" "}
          <code className="font-mono">~/.labonair/extensions/</code>. Each extension runs in an
          isolated Extension Host process, same as VS Code.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Migrating from VS Code</h2>
        <p className="text-white/60 leading-relaxed">
          Export your current VS Code extension list, then search for each on OpenVSX:
        </p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm text-white/70">
          <p>
            <span className="text-muted-foreground select-none">$ </span>
            <span>code --list-extensions</span>
          </p>
        </div>
        <p className="text-white/60 leading-relaxed">
          Search each ID on{" "}
          <a
            href="https://open-vsx.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            open-vsx.org
          </a>{" "}
          to verify availability before installing in Labonair.
        </p>
      </section>
    </div>
  );
}
