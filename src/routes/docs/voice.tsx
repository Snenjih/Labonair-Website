import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/voice")({
  head: () => ({
    meta: pageMeta(
      "AI Providers - Labonair Docs",
      "Configure BYOK AI providers in Labonair: OpenAI, Anthropic, Google, DeepSeek, and Ollama.",
    ),
  }),
  component: AIProvidersDocs,
});

function AIProvidersDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">AI Providers</h1>
        <p className="text-white/60 leading-relaxed">
          Labonair has a built-in Dual-Engine AI Core. No GitHub Copilot subscription needed — you
          bring your own API keys. Keys are stored in your OS keychain, never in plaintext.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Setting up a provider</h2>
        <ol className="text-white/60 space-y-2 list-decimal list-inside">
          <li>
            Open the <strong className="text-white/80">Chat Panel</strong> from the Dock (bottom
            left AI icon)
          </li>
          <li>
            Click the <strong className="text-white/80">Settings Tab</strong>
          </li>
          <li>Select a provider and enter your API key</li>
          <li>
            The key is saved to your OS keychain — it will never appear in{" "}
            <code className="font-mono">settings.json</code>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Supported providers</h2>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-white/60">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 text-white/80">Provider</th>
                <th className="text-left px-4 py-3 text-white/80">Models</th>
                <th className="text-left px-4 py-3 text-white/80">Offline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">OpenAI</td>
                <td className="px-4 py-3">GPT-4o, GPT-4 Turbo</td>
                <td className="px-4 py-3">No</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Anthropic</td>
                <td className="px-4 py-3">Claude 3.5 Sonnet, Claude 3 Opus</td>
                <td className="px-4 py-3">No</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Google</td>
                <td className="px-4 py-3">Gemini Pro, Gemini Flash</td>
                <td className="px-4 py-3">No</td>
              </tr>
              <tr>
                <td className="px-4 py-3">DeepSeek</td>
                <td className="px-4 py-3">DeepSeek Coder, DeepSeek Chat</td>
                <td className="px-4 py-3">No</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white/80">Ollama</td>
                <td className="px-4 py-3">Any local model</td>
                <td className="px-4 py-3 text-green-400/80">Yes — 100% offline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Direct API Mode</h2>
        <p className="text-white/60 leading-relaxed">
          Chat directly with your chosen model. Supports:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-white/80">Multimodal input</strong> — drag images into the
            chat window
          </li>
          <li>
            <strong className="text-white/80">Context references</strong> — type{" "}
            <code className="font-mono">@filename</code> to include any file's contents
          </li>
          <li>
            <strong className="text-white/80">Streaming responses</strong> — output streams token
            by token as the model generates
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Running Ollama (offline AI)</h2>
        <p className="text-white/60 leading-relaxed">
          Install{" "}
          <a
            href="https://ollama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            Ollama
          </a>
          , pull a model, then select Ollama in the Chat Panel settings. No API key needed.
        </p>
        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm space-y-1 text-white/70">
          <p>
            <span className="text-muted-foreground select-none">$ </span>
            <span>ollama pull llama3</span>
          </p>
          <p>
            <span className="text-muted-foreground select-none">$ </span>
            <span>ollama pull codellama</span>
          </p>
        </div>
        <p className="text-white/60 leading-relaxed">
          Ollama runs a local server at{" "}
          <code className="font-mono">http://localhost:11434</code>. Labonair connects to it
          automatically.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">ACP Agents</h2>
        <p className="text-white/60 leading-relaxed">
          Beyond chat, Labonair supports autonomous coding agents via the Agent Client Protocol.
          See{" "}
          <a href="/docs/skills" className="underline hover:text-white/80">
            ACP Agents
          </a>{" "}
          for details.
        </p>
      </section>
    </div>
  );
}
