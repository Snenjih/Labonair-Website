import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: pageMeta(
      "Getting Started - Labonair Docs",
      "Install Labonair, a VS Code fork built for focus, privacy, and native AI orchestration.",
    ),
  }),
  component: GettingStarted,
});

function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
      {children}
    </div>
  );
}

function GettingStarted() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">Getting Started</h1>
        <p className="text-white/60 leading-relaxed">
          Labonair is a hard-fork of VS Code engineered for focus, privacy, and native AI
          orchestration. It removes the clutter, replaces the Activity Bar with a unified Dock, and
          ships a built-in Dual-Engine AI Core — no subscriptions required.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">System requirements</h2>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-white/80">macOS:</strong> 11.0 Big Sur or later — Intel x64 or
            Apple Silicon (M1–M4)
          </li>
          <li>
            <strong className="text-white/80">Windows:</strong> Windows 10 x64 or later
          </li>
          <li>
            <strong className="text-white/80">Linux:</strong> x64, glibc 2.28+
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Install on macOS (Homebrew)</h2>
        <p className="text-white/60">
          The recommended way to install on macOS. Homebrew automatically removes the quarantine
          attribute — no Gatekeeper workarounds needed.
        </p>
        <Code>
          <pre className="text-white/80">{`brew tap Snenjih/tap
brew install --cask labonair`}</pre>
        </Code>
        <p className="text-white/60">
          Update to the latest release at any time:
        </p>
        <Code>
          <pre className="text-white/80">{`brew upgrade labonair`}</pre>
        </Code>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Install via direct download</h2>
        <p className="text-white/60">
          Download the latest release from{" "}
          <a
            href="https://github.com/Snenjih/Labonair/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            GitHub Releases
          </a>
          , or from the{" "}
          <a href="/download" className="underline hover:text-white/80">
            download page
          </a>
          .
        </p>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-white/60">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 text-white/80">Platform</th>
                <th className="text-left px-4 py-3 text-white/80">File</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">macOS (Apple Silicon)</td>
                <td className="px-4 py-3 font-mono text-xs">Labonair-x.x.x-arm64.dmg</td>
              </tr>
              <tr>
                <td className="px-4 py-3">macOS (Intel)</td>
                <td className="px-4 py-3 font-mono text-xs">Labonair-x.x.x-x64.dmg</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Windows</td>
                <td className="px-4 py-3 font-mono text-xs">Labonair-win32-x64.zip</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Linux</td>
                <td className="px-4 py-3 font-mono text-xs">Labonair-linux-x64.tar.gz</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">macOS Gatekeeper</h2>
        <p className="text-white/60">
          Labonair is ad-hoc signed but not notarized. On first launch macOS may show a warning.
          Two ways to bypass it:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            Right-click the app in Finder → <strong className="text-white/80">Open</strong> →
            click <strong className="text-white/80">Open</strong> in the dialog
          </li>
          <li>
            Or run once in Terminal:
            <Code>
              <span className="text-white/80">
                xattr -rd com.apple.quarantine /Applications/Labonair.app
              </span>
            </Code>
          </li>
        </ul>
        <p className="text-white/60">
          Installing via Homebrew avoids this entirely.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">First launch</h2>
        <p className="text-white/60">
          Labonair opens like VS Code — your existing workspace, themes, and keybindings mostly
          carry over. The main differences you'll notice:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            No Activity Bar — all views are in the <strong className="text-white/80">Dock</strong>{" "}
            (bottom left status bar icons)
          </li>
          <li>
            <strong className="text-white/80">The Shelf</strong> replaces tab overload — pin up to
            9 files with <code className="font-mono">⌘⇧1–9</code>
          </li>
          <li>
            The <strong className="text-white/80">AI Chat panel</strong> is in the Dock — configure
            your first provider there
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Extensions</h2>
        <p className="text-white/60">
          Labonair uses the{" "}
          <a
            href="https://open-vsx.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            OpenVSX Registry
          </a>{" "}
          instead of the Microsoft Marketplace. Most extensions are available there. See{" "}
          <a href="/docs/worktrees" className="underline hover:text-white/80">
            Extensions
          </a>{" "}
          for details.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Next</h2>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <a href="/docs/updates" className="underline hover:text-white/80">
              The Shelf
            </a>{" "}
            — keyboard-first file navigation
          </li>
          <li>
            <a href="/docs/voice" className="underline hover:text-white/80">
              AI Providers
            </a>{" "}
            — configure BYOK providers or Ollama
          </li>
          <li>
            <a href="/docs/connectivity" className="underline hover:text-white/80">
              Connectivity
            </a>{" "}
            — SSH/SFTP management extension
          </li>
          <li>
            <a href="/docs/skills" className="underline hover:text-white/80">
              ACP Agents
            </a>{" "}
            — connect autonomous agents like Claude Code
          </li>
          <li>
            <a href="/docs/configuration" className="underline hover:text-white/80">
              Configuration
            </a>{" "}
            — all Labonair-specific settings
          </li>
          <li>
            <a href="/docs/security" className="underline hover:text-white/80">
              Privacy & Security
            </a>{" "}
            — what was removed and why
          </li>
        </ul>
      </section>
    </div>
  );
}
