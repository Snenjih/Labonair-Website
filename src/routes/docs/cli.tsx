import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/cli")({
  head: () => ({
    meta: pageMeta(
      "Keyboard Shortcuts - Labonair Docs",
      "Complete keyboard shortcut reference for Labonair — The Shelf, AI Chat, navigation, and more.",
    ),
  }),
  component: ShortcutsDocs,
});

function ShortcutsDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">Keyboard Shortcuts</h1>
        <p className="text-white/60 leading-relaxed">
          Labonair is keyboard-first. New shortcuts build on VS Code's existing bindings — nothing
          you already know is removed.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">The Shelf</h2>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-white/60">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 text-white/80">Action</th>
                <th className="text-left px-4 py-3 text-white/80">Mac</th>
                <th className="text-left px-4 py-3 text-white/80">Windows / Linux</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Pin file to shelf slot</td>
                <td className="px-4 py-3 font-mono">⌘⇧1–9</td>
                <td className="px-4 py-3 font-mono">Alt+Shift+1–9</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Jump to shelf slot</td>
                <td className="px-4 py-3 font-mono">⌘1–9</td>
                <td className="px-4 py-3 font-mono">Alt+1–9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">AI Chat</h2>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-white/60">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 text-white/80">Action</th>
                <th className="text-left px-4 py-3 text-white/80">Mac</th>
                <th className="text-left px-4 py-3 text-white/80">Windows / Linux</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">New AI Chat</td>
                <td className="px-4 py-3 font-mono">⌘⇧N</td>
                <td className="px-4 py-3 font-mono">Ctrl+Shift+N</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Navigation</h2>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-white/60">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 text-white/80">Action</th>
                <th className="text-left px-4 py-3 text-white/80">Mac</th>
                <th className="text-left px-4 py-3 text-white/80">Windows / Linux</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">Quick Open (files)</td>
                <td className="px-4 py-3 font-mono">⌘P</td>
                <td className="px-4 py-3 font-mono">Ctrl+P</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Command Palette</td>
                <td className="px-4 py-3 font-mono">⌘⇧P</td>
                <td className="px-4 py-3 font-mono">Ctrl+Shift+P</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Reveal file in Sidebar</td>
                <td className="px-4 py-3 font-mono">⌘E (in Quick Open)</td>
                <td className="px-4 py-3 font-mono">Ctrl+E (in Quick Open)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Toggle Zen Mode</td>
                <td className="px-4 py-3 font-mono">Command Palette</td>
                <td className="px-4 py-3 font-mono">Command Palette</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Instant Preview</h2>
        <p className="text-white/60 leading-relaxed">
          While Quick Open (<code className="font-mono">⌘P</code>) is open, pressing{" "}
          <kbd className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">↑</kbd> /{" "}
          <kbd className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">↓</kbd> to
          navigate results opens each file instantly in the background. No click required — your
          cursor stays in the search field.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Custom keybindings</h2>
        <p className="text-white/60 leading-relaxed">
          Open keybindings via the Command Palette:{" "}
          <code className="font-mono">Preferences: Open Keyboard Shortcuts</code> or{" "}
          <code className="font-mono">⌘K ⌘S</code>. All VS Code keybinding syntax is supported.
        </p>
      </section>
    </div>
  );
}
