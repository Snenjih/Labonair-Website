import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/docs/connectivity")({
  head: () => ({
    meta: pageMeta(
      "Connectivity - Labonair Docs",
      "Complete reference for Labonair Connectivity — SSH/SFTP management, terminal sessions, file transfers, and more.",
    ),
  }),
  component: Connectivity,
});

function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-white/80">
      {children}
    </div>
  );
}

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <table className="w-full text-sm text-white/60">
        {children}
      </table>
    </div>
  );
}

function Connectivity() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-medium font-title mb-4">Connectivity</h1>
        <p className="text-white/60 leading-relaxed">
          <strong className="text-white/80">Labonair Connectivity</strong> is a full-featured SSH/SFTP
          management VS Code extension. It provides a Terminus-inspired interface with professional-grade
          features — interactive SSH terminals, dual-panel SFTP file manager, file transfer queue, and more.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Overview</h2>
        <p className="text-white/60 leading-relaxed">
          Labonair Connectivity enables:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li>Manage SSH hosts, credentials, and connection profiles</li>
          <li>Open interactive SSH terminals with split-pane and broadcast support</li>
          <li>Browse, transfer, and manage remote files via SFTP dual-panel file manager</li>
          <li>Queue, monitor, and control file transfers with a dedicated transfer queue</li>
          <li>Edit remote files directly in VS Code with automatic sync-back</li>
          <li>Port forwarding, directory sync, and advanced file operations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Getting Started</h2>
        <p className="text-white/60 leading-relaxed">
          The extension activates when you open the <strong className="text-white/80">Connectivity</strong> sidebar
          panel (Dock icon) or the <strong className="text-white/80">Transfer Queue</strong> sidebar panel.
        </p>
        <p className="text-white/60 leading-relaxed">
          All extension ↔ UI communication uses a type-safe RPC system with full TypeScript support. Two patterns:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li><code className="font-mono">await rpc.request('host.list')</code> — Request/Response</li>
          <li><code className="font-mono">rpc.on('TRANSFER_UPDATE', handler)</code> — Notifications</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Commands</h2>
        <Table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-white/80">Command ID</th>
              <th className="text-left px-4 py-3 text-white/80">Title</th>
              <th className="text-left px-4 py-3 text-white/80">Keybinding</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">labonair.launch</td>
              <td className="px-4 py-3">Smart Launcher – Connect to Host</td>
              <td className="px-4 py-3">Ctrl+Alt+L / Cmd+Alt+L</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">labonair.quickSSH</td>
              <td className="px-4 py-3">Quick SSH Connect</td>
              <td className="px-4 py-3">–</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">labonair.quickSFTP</td>
              <td className="px-4 py-3">Quick SFTP Connect</td>
              <td className="px-4 py-3">–</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">labonair.openSFTP</td>
              <td className="px-4 py-3">Open SFTP File Manager</td>
              <td className="px-4 py-3">–</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">labonair.backupAll</td>
              <td className="px-4 py-3">Export All Settings (Backup)</td>
              <td className="px-4 py-3">–</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Host Management</h2>
        <p className="text-white/60 leading-relaxed">
          Configure SSH hosts with full control over authentication, shell, appearance, and advanced settings.
        </p>

        <h3 className="text-lg font-medium mt-6">Host Properties</h3>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li>Hostname / IP, port (default: 22), label, OS type</li>
          <li>Authentication: password, SSH key, SSH agent, or credentials vault</li>
          <li>Custom shell per host (bash, zsh, fish, sh, powershell)</li>
          <li>Startup command and post-exec scripts</li>
          <li>Terminal appearance overrides (font size, colors, cursor style)</li>
          <li>Tags, folders, pin status, and last-used tracking</li>
          <li>Jump host (proxy chain) support</li>
          <li>Port forwarding rules (local & remote tunnels)</li>
          <li>Sudo mode configuration</li>
        </ul>

        <h3 className="text-lg font-medium mt-6">Organization</h3>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li><strong className="text-white/80">Folders</strong> — Hierarchical group nesting</li>
          <li><strong className="text-white/80">Pinning</strong> — Pinned hosts float to the top</li>
          <li><strong className="text-white/80">Tags</strong> — Multi-label system for filtering</li>
          <li><strong className="text-white/80">Last Used Sort</strong> — Automatic chronological sorting</li>
          <li><strong className="text-white/80">Bulk Operations</strong> — Delete, move, tag, import/export</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">SSH Terminal</h2>
        <p className="text-white/60 leading-relaxed">
          Interactive SSH terminal powered by xterm.js 5.5.0 with 5 addons: FitAddon, SearchAddon, WebLinksAddon,
          WebglAddon (GPU-accelerated), and Unicode11Addon.
        </p>

        <h3 className="text-lg font-medium mt-6">Appearance Settings</h3>
        <Table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-white/80">Setting</th>
              <th className="text-left px-4 py-3 text-white/80">Range</th>
              <th className="text-left px-4 py-3 text-white/80">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">Font size</td>
              <td className="px-4 py-3">8–48 px</td>
              <td className="px-4 py-3">16 px</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Font weight</td>
              <td className="px-4 py-3">100–900</td>
              <td className="px-4 py-3">500</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Line height</td>
              <td className="px-4 py-3">1–3</td>
              <td className="px-4 py-3">1.5</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Cursor style</td>
              <td className="px-4 py-3">bar / block / underline</td>
              <td className="px-4 py-3">block</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Cursor blink</td>
              <td className="px-4 py-3">boolean</td>
              <td className="px-4 py-3">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Scrollback buffer</td>
              <td className="px-4 py-3">–</td>
              <td className="px-4 py-3">40,000 lines</td>
            </tr>
          </tbody>
        </Table>

        <h3 className="text-lg font-medium mt-6">Built-in Color Schemes</h3>
        <p className="text-white/60 leading-relaxed">
          VS Code (matches editor theme), Dracula, Solarized Dark, Solarized Light, Monokai, One Dark
        </p>

        <h3 className="text-lg font-medium mt-6">Key Features</h3>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li><strong className="text-white/80">Split Pane Mode</strong> — Vertical or horizontal with optional broadcast</li>
          <li><strong className="text-white/80">Auto-Reconnect</strong> — Exponential backoff with visual reconnect banner</li>
          <li><strong className="text-white/80">Paste Confirmation</strong> — Threshold to prevent large accidental pastes</li>
          <li><strong className="text-white/80">Edit-on-Fly</strong> — Download, edit, and auto-upload remote files</li>
          <li><strong className="text-white/80">Connection Logs</strong> — Detailed history with timestamps and suggestions</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">SFTP File Manager</h2>
        <p className="text-white/60 leading-relaxed">
          Dual-panel file manager with two modes: Explorer (single panel) and Commander (Norton Commander style).
        </p>

        <h3 className="text-lg font-medium mt-6">File Operations</h3>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li>Browse directories, symlinks, and hidden files</li>
          <li>Upload / Download with progress tracking</li>
          <li>Create, rename, move, copy, delete files and directories</li>
          <li>Remote copy and move (server-side, no local download)</li>
          <li>Open and edit files in VS Code with auto-sync</li>
          <li>Preview images and text files inline</li>
          <li>Permission and ownership management (chmod, chown)</li>
          <li>Symlink creation and resolution</li>
        </ul>

        <h3 className="text-lg font-medium mt-6">Advanced Features</h3>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li><strong className="text-white/80">Archive Support</strong> — Extract and compress ZIP, TAR, TAR.GZ</li>
          <li><strong className="text-white/80">Checksum Verification</strong> — MD5, SHA1, SHA256</li>
          <li><strong className="text-white/80">Bulk Rename</strong> — Regex-based batch rename with preview</li>
          <li><strong className="text-white/80">Directory Comparison</strong> — Side-by-side diff</li>
          <li><strong className="text-white/80">Directory Sync</strong> — Two-way sync with conflict resolution</li>
          <li><strong className="text-white/80">File Search</strong> — Pattern and content search with regex</li>
          <li><strong className="text-white/80">Bookmarks</strong> — Save frequently used paths</li>
          <li><strong className="text-white/80">Directory Caching</strong> — LRU cache with configurable TTL</li>
          <li><strong className="text-white/80">Pagination</strong> — Auto-enabled for 1000+ file directories</li>
          <li><strong className="text-white/80">Integrated Console</strong> — Run CLI commands without leaving panel</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Transfer Queue</h2>
        <p className="text-white/60 leading-relaxed">
          Priority-based file transfer queue with worker thread isolation and concurrency limits.
        </p>

        <h3 className="text-lg font-medium mt-6">Queue Configuration</h3>
        <Table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-white/80">Setting</th>
              <th className="text-left px-4 py-3 text-white/80">Range</th>
              <th className="text-left px-4 py-3 text-white/80">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">Per-host concurrency</td>
              <td className="px-4 py-3">1–20</td>
              <td className="px-4 py-3">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Global concurrency</td>
              <td className="px-4 py-3">1–50</td>
              <td className="px-4 py-3">5</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Processing interval</td>
              <td className="px-4 py-3">100–10000 ms</td>
              <td className="px-4 py-3">1000 ms</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Bandwidth throttling</td>
              <td className="px-4 py-3">Optional</td>
              <td className="px-4 py-3">Unlimited</td>
            </tr>
          </tbody>
        </Table>

        <h3 className="text-lg font-medium mt-6">Features</h3>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li><strong className="text-white/80">Conflict Resolution</strong> — Overwrite, resume, rename, skip</li>
          <li><strong className="text-white/80">Real-time Progress</strong> — Speed, percentage, total summary</li>
          <li><strong className="text-white/80">Controls</strong> — Pause, resume, cancel individual jobs or all</li>
          <li><strong className="text-white/80">Stall Detection</strong> — Adaptive retry on 5s+ no progress</li>
          <li><strong className="text-white/80">Health Monitoring</strong> — Connection latency history</li>
          <li><strong className="text-white/80">Automatic Retry</strong> — Exponential backoff on transient failures</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Authentication</h2>
        <Table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-white/80">Type</th>
              <th className="text-left px-4 py-3 text-white/80">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3"><code className="font-mono">password</code></td>
              <td className="px-4 py-3">Interactive username/password</td>
            </tr>
            <tr>
              <td className="px-4 py-3"><code className="font-mono">key</code></td>
              <td className="px-4 py-3">SSH private key file + optional passphrase</td>
            </tr>
            <tr>
              <td className="px-4 py-3"><code className="font-mono">agent</code></td>
              <td className="px-4 py-3">SSH agent forwarding (auto-detects available keys)</td>
            </tr>
            <tr>
              <td className="px-4 py-3"><code className="font-mono">credential</code></td>
              <td className="px-4 py-3">Reuse a saved Credential Vault entry</td>
            </tr>
          </tbody>
        </Table>

        <h3 className="text-lg font-medium mt-6">Credentials Vault</h3>
        <p className="text-white/60 leading-relaxed">
          Backed by VS Code SecretStorage (OS keychain). Reuse credentials across multiple hosts without
          storing plaintext in configuration.
        </p>

        <h3 className="text-lg font-medium mt-6">Host Key Verification</h3>
        <p className="text-white/60 leading-relaxed">
          SSH security feature that prevents man-in-the-middle attacks:
        </p>
        <ol className="text-white/60 space-y-2 list-decimal list-inside text-sm">
          <li><strong className="text-white/80">First Connection</strong> — Fingerprint shown in dialog</li>
          <li><strong className="text-white/80">Accept / Reject</strong> — User decides</li>
          <li><strong className="text-white/80">Stored</strong> — Accepted fingerprints saved in workspace state</li>
          <li><strong className="text-white/80">Verified</strong> — Fingerprint automatically verified on reconnect</li>
          <li><strong className="text-white/80">Alert</strong> — Security warning if fingerprint changes</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Connection Management</h2>
        <p className="text-white/60 leading-relaxed">
          Singleton connection pool shared across Terminal and SFTP services with reference-counting,
          auto-parking, and keepalive management.
        </p>

        <h3 className="text-lg font-medium mt-6">Connection Settings</h3>
        <Table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-white/80">Setting</th>
              <th className="text-left px-4 py-3 text-white/80">Range</th>
              <th className="text-left px-4 py-3 text-white/80">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">Ready timeout</td>
              <td className="px-4 py-3">5–120 s</td>
              <td className="px-4 py-3">20 s</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Keepalive interval</td>
              <td className="px-4 py-3">5–300 s</td>
              <td className="px-4 py-3">30 s</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Keepalive max count</td>
              <td className="px-4 py-3">1–20</td>
              <td className="px-4 py-3">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Max auth tries</td>
              <td className="px-4 py-3">1–10</td>
              <td className="px-4 py-3">3</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Auto-reconnect max attempts</td>
              <td className="px-4 py-3">0–100 (0=unlimited)</td>
              <td className="px-4 py-3">10</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Reconnect base delay</td>
              <td className="px-4 py-3">500–10,000 ms</td>
              <td className="px-4 py-3">1,000 ms</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Reconnect max delay</td>
              <td className="px-4 py-3">5,000–120,000 ms</td>
              <td className="px-4 py-3">30,000 ms</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Advanced Features</h2>

        <h3 className="text-lg font-medium mt-6">Session Persistence</h3>
        <p className="text-white/60 leading-relaxed">
          Previously open terminals and SFTP panels are automatically restored on VS Code startup.
        </p>

        <h3 className="text-lg font-medium mt-6">Broadcast Command</h3>
        <p className="text-white/60 leading-relaxed">
          Execute the same shell command on multiple hosts simultaneously. Select target hosts, enter command,
          and all execute in parallel with results shown in respective terminals.
        </p>

        <h3 className="text-lg font-medium mt-6">Port Forwarding / Tunnels</h3>
        <p className="text-white/60 leading-relaxed">
          Configure SSH tunnels per host:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li><strong className="text-white/80">Local Forwarding</strong> — <code className="font-mono">localhost:localPort → remoteHost:remotePort</code></li>
          <li><strong className="text-white/80">Remote Forwarding</strong> — <code className="font-mono">remoteHost:remotePort → localhost:localPort</code></li>
          <li><strong className="text-white/80">TunnelList Overlay</strong> — Visual tunnel management</li>
        </ul>

        <h3 className="text-lg font-medium mt-6">Directory Sync</h3>
        <p className="text-white/60 leading-relaxed">
          Compare and synchronize directories between local and remote with conflict resolution and
          include/exclude pattern filtering.
        </p>

        <h3 className="text-lg font-medium mt-6">Smart Launcher</h3>
        <p className="text-white/60 leading-relaxed">
          <code className="font-mono">Ctrl+Alt+L</code> / <code className="font-mono">Cmd+Alt+L</code> — Quick-access
          launcher with fuzzy search across all hosts. Select → open SSH terminal or SFTP file manager.
        </p>

        <h3 className="text-lg font-medium mt-6">Quick Connect</h3>
        <p className="text-white/60 leading-relaxed">
          Connect without a saved host profile:
        </p>
        <ul className="text-white/60 space-y-2 list-disc list-inside text-sm">
          <li><code className="font-mono">labonair.quickSSH</code> — Enter <code className="font-mono">user@host:port</code> → terminal opens</li>
          <li><code className="font-mono">labonair.quickSFTP</code> — Enter <code className="font-mono">user@host:port</code> → file manager opens</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Security Model</h2>
        <Table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-white/80">Topic</th>
              <th className="text-left px-4 py-3 text-white/80">Approach</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">Password storage</td>
              <td className="px-4 py-3">VS Code SecretStorage (OS keychain)</td>
            </tr>
            <tr>
              <td className="px-4 py-3">SSH key storage</td>
              <td className="px-4 py-3">Key path in config, passphrase in SecretStorage</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Sudo passwords</td>
              <td className="px-4 py-3">Written to stdin — never interpolated in commands</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Host key verification</td>
              <td className="px-4 py-3">Mandatory first connection, stored fingerprint verified on reconnect</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Sensitive data in errors</td>
              <td className="px-4 py-3">Never included — only hostId, path, operation, port</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Performance</h2>
        <Table>
          <thead className="border-b border-border">
            <tr>
              <th className="text-left px-4 py-3 text-white/80">Area</th>
              <th className="text-left px-4 py-3 text-white/80">Technique</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">Large file lists</td>
              <td className="px-4 py-3">Virtual scrolling (60 FPS with 10k+ items)</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Directory listing</td>
              <td className="px-4 py-3">LRU cache with TTL, pagination for 1000+ items</td>
            </tr>
            <tr>
              <td className="px-4 py-3">File transfers</td>
              <td className="px-4 py-3">Worker thread isolation, concurrency limits</td>
            </tr>
            <tr>
              <td className="px-4 py-3">SFTP batch ops</td>
              <td className="px-4 py-3">Promise.all with p-limit (not serial await)</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Terminal rendering</td>
              <td className="px-4 py-3">WebGL canvas (GPU-accelerated) with Canvas fallback</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Async I/O</td>
              <td className="px-4 py-3">Always fs.promises — never readFileSync</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Next</h2>
        <ul className="text-white/60 space-y-2 list-disc list-inside">
          <li>
            <a href="/docs/configuration" className="underline hover:text-white/80">
              Configuration
            </a>
            {" "}— all Labonair-specific settings
          </li>
          <li>
            <a href="/docs/security" className="underline hover:text-white/80">
              Privacy & Security
            </a>
            {" "}— what was removed and why
          </li>
          <li>
            <a href="/docs/skills" className="underline hover:text-white/80">
              ACP Agents
            </a>
            {" "}— connect autonomous agents like Claude Code
          </li>
        </ul>
      </section>
    </div>
  );
}
