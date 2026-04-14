import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/security")({
  head: () => ({
    meta: pageMeta(
      "Privacy & Security - Labonair Docs",
      "What Labonair removed from VS Code, how API keys are stored, and the privacy architecture.",
    ),
  }),
  component: Security,
});

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-white/80">
      {children}
    </div>
  );
}

function Security() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">Privacy & Security</h1>
        <p className="text-white/60 leading-relaxed">
          Labonair's privacy model is simple: your code stays on your machine. All Microsoft
          telemetry has been removed from the source. Your AI keys are stored in your OS keychain,
          never in plaintext files.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">What was removed</h2>
        <p className="text-white/60 leading-relaxed">
          These features and endpoints were removed from the VS Code source as design decisions:
        </p>
        <ul className="text-white/60 space-y-3 list-disc list-inside">
          <li>
            <strong className="text-white/80">Microsoft telemetry endpoints</strong> — all
            hardcoded reporting URLs stripped from the source code
          </li>
          <li>
            <code className="font-mono">telemetry.enableTelemetry</code> is forced to{" "}
            <code className="font-mono">false</code> and cannot be re-enabled
          </li>
          <li>
            <strong className="text-white/80">Microsoft account integration</strong> — Settings
            Sync and other flows requiring Microsoft login are disabled
          </li>
          <li>
            <strong className="text-white/80">Proprietary extensions</strong> — GitHub Copilot
            (original) and Live Share use hardcoded Microsoft APIs and will not work. Use
            Labonair's native AI Core instead.
          </li>
        </ul>

        <Callout>
          <strong>The result:</strong> No usage data, no crash reports, no feature telemetry leaves
          your machine via Labonair itself.
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">What replaced it</h2>
        <ul className="text-white/60 space-y-3 list-disc list-inside">
          <li>
            <strong className="text-white/80">OpenVSX Registry</strong> — open-source,
            community-operated extension registry. No Microsoft account required.
          </li>
          <li>
            <strong className="text-white/80">Local data storage</strong> — all user configuration
            lives in <code className="font-mono">~/.labonair/</code> as JSON. No cloud sync by
            default.
          </li>
          <li>
            <strong className="text-white/80">OS Keychain for secrets</strong> — API keys are
            stored via <code className="font-mono">ISecretStorageService</code> in macOS Keychain
            or Windows Credential Manager. Never in plaintext.
          </li>
          <li>
            <strong className="text-white/80">Offline AI</strong> — configure Ollama to run AI
            features with zero network traffic.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">API key storage</h2>
        <p className="text-white/60 leading-relaxed">
          When you enter an API key in the Chat Panel → Settings Tab, Labonair stores it using:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-white/80">macOS:</strong> macOS Keychain
          </li>
          <li>
            <strong className="text-white/80">Windows:</strong> Windows Credential Manager
          </li>
          <li>
            <strong className="text-white/80">Linux:</strong> libsecret / system keyring
          </li>
        </ul>
        <p className="text-white/60 leading-relaxed">
          Keys are <strong className="text-white/80">never</strong> written to{" "}
          <code className="font-mono">settings.json</code> or any other plaintext file.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">AI traffic</h2>
        <p className="text-white/60 leading-relaxed">
          When you use cloud AI providers (OpenAI, Anthropic, Google, DeepSeek), your prompts and
          context are sent directly to that provider's API using your own API key. Labonair acts as
          a local client — it does not proxy, log, or store your AI conversations.
        </p>
        <p className="text-white/60 leading-relaxed">
          For full offline operation, use{" "}
          <a
            href="https://ollama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            Ollama
          </a>
          . With Ollama configured, no bytes from your AI interactions leave your machine.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">ACP agent security</h2>
        <p className="text-white/60 leading-relaxed">
          When using autonomous agents via Agent Client Protocol (ACP), Labonair includes a
          Human-in-the-Loop permission system. Agents that attempt high-impact actions (writing
          files, running terminal commands) will request confirmation from you before proceeding.
        </p>
        <p className="text-white/60 leading-relaxed">
          You remain in control at all times. See{" "}
          <a href="/docs/skills" className="underline hover:text-white/80">
            ACP Agents
          </a>{" "}
          for details.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Settings Sync</h2>
        <p className="text-white/60 leading-relaxed">
          The built-in VS Code Settings Sync (which uploads your settings to Microsoft servers) is
          disabled. To sync settings across machines:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            Version your <code className="font-mono">~/.labonair/</code> folder with Git
          </li>
          <li>
            Use the open-source "Settings Sync" extension by Shan Khan (available on OpenVSX)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Source code</h2>
        <p className="text-white/60 leading-relaxed">
          Labonair is fully open source under the MIT license. You can review exactly what was
          changed from the VS Code source on{" "}
          <a
            href="https://github.com/Snenjih/Labonair"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
  );
}
