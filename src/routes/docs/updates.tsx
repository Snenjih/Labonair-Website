import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/updates")({
  head: () => ({
    meta: pageMeta(
      "The Shelf - Labonair Docs",
      "The Shelf replaces tab chaos with keyboard-first file pinning. Pin up to 9 files for instant access.",
    ),
  }),
  component: ShelfDocs,
});

function ShelfDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">The Shelf</h1>
        <p className="text-white/60 leading-relaxed">
          The Shelf is Labonair's answer to tab overload. Instead of scrolling through 20 open
          tabs, you pin your most important files to numbered slots and jump between them with a
          single keystroke — no mouse needed.
        </p>
        <p className="text-white/60 leading-relaxed mt-2">
          Inspired by{" "}
          <a
            href="https://github.com/ThePrimeagen/harpoon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            Harpoon
          </a>
          , but native to the editor.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Keyboard shortcuts</h2>
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
                <td className="px-4 py-3">Pin current file to slot</td>
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
        <h2 className="text-xl font-medium">Smart indicators</h2>
        <p className="text-white/60 leading-relaxed">
          Each shelf slot shows a visual indicator so you always know the state of your pinned
          files at a glance:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400/80 mr-1" />
            <strong className="text-white/80">Amber dot</strong> — file has unsaved changes
          </li>
          <li>
            <span className="inline-block w-2 h-2 rounded-full bg-red-400/80 mr-1" />
            <strong className="text-white/80">Red dot</strong> — file has errors (diagnostics)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Drag & drop</h2>
        <p className="text-white/60 leading-relaxed">
          You can drag files directly from the Explorer into the Dock (status bar) to pin them to
          the next available slot. Drag to reorder slots.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Configuration</h2>
        <pre className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-white/80">
          {`{
  "labonair.shelf.enabled": true,
  "labonair.shelf.limit": 5,
  "labonair.shelf.showInStatusBar": true
}`}
        </pre>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li>
            <code className="font-mono">labonair.shelf.enabled</code> — toggle The Shelf on/off
          </li>
          <li>
            <code className="font-mono">labonair.shelf.limit</code> — maximum pinned files (1–9,
            default: 5)
          </li>
          <li>
            <code className="font-mono">labonair.shelf.showInStatusBar</code> — display shelf
            slots in the bottom status bar
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Tips</h2>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            For a feature branch, pin your most-touched files at the start of the session and
            un-pin when done.
          </li>
          <li>
            Slot 1 (<code className="font-mono">⌘1</code>) is the fastest to reach — use it for
            the file you switch to most.
          </li>
          <li>
            The shelf persists across restarts, so your pinned files survive closing the editor.
          </li>
        </ul>
      </section>
    </div>
  );
}
