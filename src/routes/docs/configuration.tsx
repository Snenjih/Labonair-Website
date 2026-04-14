import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/configuration")({
  head: () => ({
    meta: pageMeta(
      "Configuration - Labonair Docs",
      "All Labonair-specific settings for The Shelf, Inline Blame, AI providers, and more.",
    ),
  }),
  component: Configuration,
});

function Configuration() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">Configuration</h1>
        <p className="text-white/60 leading-relaxed">
          Labonair extends VS Code's{" "}
          <code className="font-mono">settings.json</code> with a set of{" "}
          <code className="font-mono">labonair.*</code> namespaced settings. Open settings via the
          Profile icon (top right) → Settings, or press{" "}
          <code className="font-mono">⌘,</code>.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Settings file location</h2>
        <p className="text-white/60 leading-relaxed">
          User settings are stored at:
        </p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm space-y-1 text-white/70">
          <p>macOS: <span className="text-white/50">~/Library/Application Support/Labonair/User/settings.json</span></p>
          <p>Windows: <span className="text-white/50">%APPDATA%\Labonair\User\settings.json</span></p>
          <p>Linux: <span className="text-white/50">~/.config/Labonair/User/settings.json</span></p>
        </div>
        <p className="text-white/60 leading-relaxed">
          All user data (config, themes, keybindings) lives in{" "}
          <code className="font-mono">~/.labonair/</code> on macOS and Linux.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">The Shelf</h2>
        <p className="text-white/60 leading-relaxed">
          Configure how many files can be pinned, whether the shelf appears in the status bar, and
          more.
        </p>
        <pre className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-white/80">
          {`{
  "labonair.shelf.enabled": true,
  "labonair.shelf.limit": 5,
  "labonair.shelf.showInStatusBar": true
}`}
        </pre>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li>
            <code className="font-mono">labonair.shelf.enabled</code> — enable or disable The Shelf
          </li>
          <li>
            <code className="font-mono">labonair.shelf.limit</code> — max number of pinned files
            (1–9, default: 5)
          </li>
          <li>
            <code className="font-mono">labonair.shelf.showInStatusBar</code> — show shelf slots in
            the status bar
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Inline Git Blame</h2>
        <p className="text-white/60 leading-relaxed">
          Show git blame information as ghost text in the editor — no extension required.
        </p>
        <pre className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-white/80">
          {`{
  "labonair.versionControl.inlineBlame.enabled": true,
  "labonair.versionControl.inlineBlame.color": "#6C7380"
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">AI Providers</h2>
        <p className="text-white/60 leading-relaxed">
          API keys are <strong className="text-white/80">never</strong> stored in{" "}
          <code className="font-mono">settings.json</code>. They are stored exclusively in your OS
          keychain via <code className="font-mono">ISecretStorageService</code>.
        </p>
        <p className="text-white/60 leading-relaxed">
          Configure providers in the <strong className="text-white/80">Chat Panel → Settings Tab</strong>.
          Enter your API key there and it will be saved to macOS Keychain or Windows Credential
          Manager automatically.
        </p>
        <p className="text-white/60 leading-relaxed">Supported providers:</p>
        <ul className="text-white/60 space-y-1 list-disc list-inside text-sm">
          <li>OpenAI (GPT-4o, GPT-4 Turbo)</li>
          <li>Anthropic (Claude 3.5 Sonnet, Claude 3 Opus)</li>
          <li>Google (Gemini Pro, Gemini Flash)</li>
          <li>DeepSeek (DeepSeek Coder, DeepSeek Chat)</li>
          <li>Ollama (any local model — 100% offline)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Typewriter Mode</h2>
        <p className="text-white/60 leading-relaxed">
          Keep the cursor vertically centered while typing to reduce eye movement on long coding
          sessions. Toggle via the Command Palette:{" "}
          <code className="font-mono">Toggle Typewriter Mode</code>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Complete example</h2>
        <pre className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-white/80">
          {`{
  // The Shelf
  "labonair.shelf.enabled": true,
  "labonair.shelf.limit": 5,
  "labonair.shelf.showInStatusBar": true,

  // Inline Git Blame
  "labonair.versionControl.inlineBlame.enabled": true,
  "labonair.versionControl.inlineBlame.color": "#6C7380"

  // AI keys: configured in Chat Panel → Settings Tab
  // They are stored in OS keychain, not here
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Extensions</h2>
        <p className="text-white/60 leading-relaxed">
          Labonair uses the OpenVSX Registry for extensions. To change the extension registry, open
          the Extensions view from the Dock and search as usual.
        </p>
        <p className="text-white/60 leading-relaxed">
          See{" "}
          <a href="/docs/worktrees" className="underline hover:text-white/80">
            Extensions
          </a>{" "}
          for more details on what works and what doesn't.
        </p>
      </section>
    </div>
  );
}
