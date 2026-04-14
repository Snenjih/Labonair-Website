# Labonair Connectivity — Comprehensive Feature & Info Reference

> Version: 1.3.5 · Publisher: Labonair · VS Code ≥ 1.85.0
> Repository: https://github.com/Snenjih/Labonair-connectivity

---

## Overview

**Labonair Connectivity** is a full-featured SSH/SFTP management extension for VS Code.
It provides a Terminus-inspired interface with professional-grade features built entirely into the editor environment — no external tools required.

**What it does:**
- Manage SSH hosts, credentials, and connection profiles
- Open interactive SSH terminals with split-pane and broadcast support
- Browse, transfer, and manage remote files via SFTP dual-panel file manager
- Queue, monitor, and control file transfers with a dedicated transfer queue
- Edit remote files directly in VS Code with automatic sync-back

---

## Core Concepts

### Dual Architecture
| Layer | Runtime | Purpose |
|-------|---------|---------|
| Extension Host | Node.js | SSH connections, SFTP, file operations, backend logic |
| Webview (React) | Browser | All UI rendered inside VS Code webviews |

### Triple Bundle (Webpack)
| Bundle | File | Description |
|--------|------|-------------|
| Extension | `dist/extension.js` | Node.js backend |
| Webview | `dist/webview.js` | React UI |
| Worker | `dist/transfer.worker.js` | Background file transfers (off main thread) |

### Communication (RPC)
All extension ↔ webview communication goes through a type-safe RPC system (`src/common/rpc.ts`).
No magic strings — every method is fully typed. Two patterns:
- **Request/Response:** `await rpc.request('host.list')` → `Host[]`
- **Notifications:** `rpc.on('TRANSFER_UPDATE', handler)`

---

## Installation & Activation

The extension activates when:
- The **Connectivity** sidebar panel is opened (`labonair.views.hosts`)
- The **Transfer Queue** sidebar panel is opened (`labonair.views.queue`)

---

## Commands

| Command ID | Title | Keybinding |
|-----------|-------|-----------|
| `labonair.launch` | Smart Launcher – Connect to Host | `Ctrl+Alt+L` / `Cmd+Alt+L` |
| `labonair.quickSSH` | Quick SSH Connect | – |
| `labonair.quickSFTP` | Quick SFTP Connect | – |
| `labonair.quickConnect` | Quick Connect `user@host:port` | – |
| `labonair.openSFTP` | Open SFTP File Manager | – |
| `labonair.backupAll` | Export All Settings (Backup) | – |
| `labonair.resetLayout` | Reset UI Layout | – |

### Global Keybindings

| Key | Action | Context |
|-----|--------|---------|
| `Ctrl+Alt+L` / `Cmd+Alt+L` | Smart Launcher | !terminalFocus |
| `F5` | Refresh | labonairFocus |
| `Ctrl+C` / `Cmd+C` | Copy | labonairFocus && !editorTextFocus |
| `Ctrl+V` / `Cmd+V` | Paste | labonairFocus && !editorTextFocus |

---

## UI Layout

### Sidebar (Activity Bar)
The **Connectivity** icon opens a dedicated Activity Bar container with two sidebar panels:

1. **Host Manager** (`labonair.views.hosts`)
   - List, search, and organize all configured SSH hosts
   - Folder/group hierarchy, pinned hosts, tags
   - Connect via SSH terminal or SFTP file manager

2. **Transfer Queue** (`labonair.views.queue`)
   - Live view of active and queued file transfers
   - Progress bars, speed, pause/resume/cancel controls
   - Conflict resolution dialog

### Editor Panels
Opened as full editor tabs:

- **SFTP Panel** — Dual-panel file manager (local ↔ remote)
- **Terminal Panel** — SSH terminal with xterm.js
- **Media Panel** — Preview images and files inline

---

## Features Deep Dive

### 1. Host Management

**Host Properties:**
- Hostname / IP, port (default: 22), label, OS type
- Authentication: password, SSH key, SSH agent, or credentials vault
- Custom shell per host (bash, zsh, fish, sh, powershell)
- Startup command, post-exec scripts
- Copy-on-select, bell, terminal appearance overrides
- Tags, folders, pin status, last used timestamp
- Jump host (proxy chain) support
- Port forwarding rules (local & remote tunnels)
- Sudo mode configuration

**Organization:**
- **Folders** — Hierarchical group nesting
- **Pinning** — Pinned hosts float to the top
- **Tags** — Multi-label system for filtering and bulk operations
- **Last Used Sort** — Hosts sorted by recency

**Bulk Operations:**
- Delete multiple hosts
- Move hosts to folder
- Assign tags
- Import / Export (JSON format)

**OS Icons Supported:**
`linux`, `windows`, `mac`, `docker`, `ubuntu`, `debian`, `raspberry`, `centos`, `redhat`, `fedora`, `arch`, `other`

---

### 2. SSH Terminal

**Rendering Engine:**
- xterm.js 5.5.0 with 5 addons:
  - `FitAddon` — Auto-resize to panel dimensions
  - `SearchAddon` — In-terminal text search with regex
  - `WebLinksAddon` — Clickable URLs in terminal output
  - `WebglAddon` — GPU-accelerated rendering (Canvas fallback)
  - `Unicode11Addon` — Full modern Unicode / emoji support

**Appearance Settings (per host or global):**

| Setting | Range | Default |
|---------|-------|---------|
| Font size | 8–48 px | 16 px |
| Font weight | 100–900 | 500 |
| Line height | 1–3 | 1.5 |
| Letter spacing | 0–10 px | 2 px |
| Cursor style | bar / block / underline | block |
| Cursor blink | boolean | true |
| Scrollback buffer | – | 40,000 lines |

**Built-in Color Schemes:**
- VS Code (matches editor theme)
- Dracula
- Solarized Dark
- Solarized Light
- Monokai
- One Dark

**Split Pane Mode:**
- Vertical or horizontal splits
- Optional **Broadcast Mode** — send same input to all panes simultaneously

**Auto-Reconnect:**
- Exponential backoff (configurable base delay, max delay)
- Max attempts: 0–100 (0 = unlimited)
- Visual reconnect banner with countdown timer
- Cancel reconnect at any time

**Paste Confirmation:**
- Threshold: configurable character count (default: 10)
- Prevents accidental large pastes

**Input Features:**
- Right-click: Paste or context menu (configurable per host)
- Drag & drop files → upload via SFTP

**Edit-on-Fly:**
1. Click "Edit" on a remote file in the SFTP panel
2. File is downloaded to a temp directory
3. VS Code opens it in the editor
4. On save → file is automatically re-uploaded to remote
5. Supports **sudo mode** for protected files

**Connection Logs:**
- Detailed connection attempt history
- Timestamps, error messages, actionable suggestions

---

### 3. SFTP File Manager (Dual Panel)

**Panel Modes:**
- **Explorer Mode** — Single panel (local or remote toggle)
- **Commander Mode** — Dual panel: Left = Local, Right = Remote (classic Norton Commander style)

**File Operations:**
| Operation | Description |
|-----------|-------------|
| Browse | Navigate directories, symlinks, hidden files |
| Upload | Local → Remote (single file, directory, recursive) |
| Download | Remote → Local (with progress) |
| New File | Create empty file |
| New Directory | Create directory (recursive) |
| Rename | Rename file or directory |
| Move | Move within same system |
| Copy | Copy with name prompt |
| Delete | Single or bulk with confirmation |
| Remote Copy | Server-side SFTP copy (no local download needed) |
| Remote Move | Server-side SFTP move |
| Open | Open file in VS Code editor |
| Edit | Edit-on-fly (see Terminal section) |
| Preview | Inline preview for images and text |
| Open External | Open with system default app |

**Permissions & Ownership:**
- Visual `chmod` editor with recursive option
- `chown` with user/group selection
- Symlink creation

**Archive Support:**
| Format | Extract | Compress |
|--------|---------|---------|
| `.zip` | ✅ | ✅ |
| `.tar` | ✅ | ✅ |
| `.tar.gz` | ✅ | ✅ |

**Advanced File Features:**
- **Checksum Verification** — MD5, SHA1, SHA256
- **File Properties Dialog** — Detailed metadata, permissions, disk usage
- **Bulk Rename** — Regex-based batch rename with preview
- **Advanced Selection** — Filter by size, date, name patterns
- **Directory Comparison** — Side-by-side diff
- **Directory Sync** — Two-way sync with conflict resolution, include/exclude filters
- **File Search** — Pattern + content search with regex
- **Symlink Resolution** — Follow and navigate symlinks
- **Clipboard Operations** — Copy/cut files across panels (local↔local, local↔remote, remote↔remote)

**Bookmarks:**
- Save frequently used paths (local or remote)
- Rename, reorder, remove bookmarks
- Per-session quick navigation

**Directory Caching:**
- LRU cache with configurable TTL (default: 10s)
- Automatic cache invalidation after write operations
- Disable cache with TTL = 0

**Pagination:**
- Automatically enabled for 1000+ file directories (configurable threshold)
- Prevents UI blocking on large directories

**Console Panel:**
- Integrated shell console within the file manager
- Run CLI commands without leaving the panel

**Integrated Transfer Queue:**
- `QueueButton` in toolbar shows live transfer progress
- Pause/resume/cancel from within the file manager

---

### 4. Transfer Queue

**Queue Engine:**
- Priority-based queue with worker thread isolation
- Per-host concurrency limit (1–20, default: 3)
- Global concurrency limit (1–50, default: 5)
- Background processing — doesn't block the extension host

**Job Lifecycle:**
```
queued → active → (paused) → completed | failed | cancelled
```

**Conflict Resolution Options:**
- Overwrite
- Resume (partial upload/download)
- Rename (auto-suffix)
- Skip
- Apply-to-all option for batch transfers

**Transfer Progress:**
- Real-time speed (bytes/sec, KB/s, MB/s)
- Completion percentage per job
- Total queue summary (active, pending, completed, failed)

**Controls:**
- Pause individual job or all
- Resume individual job or all
- Cancel job
- Clear completed jobs

**Bandwidth Throttling:**
- Optional max bytes/second limit per session

**Adaptive Features:**
- Stall detection (5s+ no progress) → adaptive retry
- Connection health monitoring with latency history
- Automatic retry with exponential backoff on transient failures

---

### 5. Credentials Vault

A reusable credential system backed by **VS Code SecretStorage** (OS keychain):

**Credential Types:**
- **Password** — Username + password pair
- **SSH Key** — Private key file path + optional passphrase

**Usage:**
- Reference a saved credential in any host's `credentialId` field
- Eliminates duplicate credentials across multiple hosts
- Secure — passwords/keys never stored in plaintext JSON

---

### 6. Authentication Methods

| Type | Description |
|------|-------------|
| `password` | Interactive username/password |
| `key` | SSH private key file + optional passphrase |
| `agent` | SSH agent forwarding (auto-detects available keys) |
| `credential` | Reuse a saved Credential Vault entry |

**SSH Key File Picker:**
- Browse the local filesystem to select a key file
- Key path stored per host, passphrase in SecretStorage

**SSH Agent Support:**
- Auto-detects running SSH agents
- Lists available agent keys

---

### 7. Host Key Verification

SSH security feature — prevents man-in-the-middle attacks:

1. **First Connection** — Fingerprint shown in a dialog
2. **Accept / Reject** — User decides
3. **Stored** — Accepted fingerprints saved in workspace state
4. **Subsequent Connections** — Fingerprint automatically verified against stored value
5. **Changed Key Warning** — Security alert if remote fingerprint differs from stored

---

### 8. Connection Management

**Connection Pool:**
- Singleton pool shared across Terminal and SFTP services
- Reference-counted: connections released when nothing uses them
- Auto-parking: idle connections closed after 10 minutes
- Prevents duplicate connections to same host

**Connection Settings:**

| Setting | Range | Default |
|---------|-------|---------|
| Ready timeout | 5–120 s | 20 s |
| Keepalive interval | 5–300 s | 30 s |
| Keepalive max count | 1–20 | 3 |
| Max auth tries | 1–10 | 3 |
| Auto-reconnect | boolean | true |
| Reconnect max attempts | 0–100 | 10 |
| Reconnect base delay | 500–10,000 ms | 1,000 ms |
| Reconnect max delay | 5,000–120,000 ms | 30,000 ms |

---

### 9. Session Persistence

On VS Code startup, previously open terminals and SFTP panels are automatically restored:

| Setting | Description | Default |
|---------|-------------|---------|
| `session.autoRestore` | Enable session restore | true |
| `session.maxAge` | Max age (days) for restore; 0 = unlimited | 2 days |

---

### 10. Broadcast Command

Execute the same shell command on multiple hosts simultaneously:
- Select target hosts
- Enter command
- All selected hosts execute in parallel
- Results shown in their respective terminals

---

### 11. Port Forwarding / Tunnels

Configure SSH tunnels per host:
- **Local Forwarding** — `localhost:localPort → remoteHost:remotePort`
- **Remote Forwarding** — `remoteHost:remotePort → localhost:localPort`
- Tunnels shown in a dedicated `TunnelList` overlay

---

### 12. Directory Sync

Compare and synchronize directories between local and remote:
1. Select source and destination paths
2. `sync.compare` returns a diff list (`SyncItem[]`)
3. Review items: new, modified, deleted, unchanged
4. Filter by include/exclude patterns
5. Execute sync selectively or all-at-once
6. Conflict resolution if file exists on both sides

---

### 13. Smart Launcher

`Ctrl+Alt+L` — Quick-access launcher:
- Fuzzy search across all configured hosts
- Select → open SSH terminal or SFTP file manager
- Works from anywhere in VS Code (when not in terminal)

---

### 14. Quick Connect

Connect without a saved host profile:
- **Quick SSH:** `labonair.quickSSH` — Enter `user@host:port` → terminal opens
- **Quick SFTP:** `labonair.quickSFTP` — Enter `user@host:port` → file manager opens
- **Quick Connect:** `labonair.quickConnect` — Prompts for connection type

---

### 15. Import / Export

**Export:** Serializes all host configurations to JSON
**Import:** Reads host JSON file, adds to existing configuration

---

## Configuration Reference

All settings are under `labonair.connectivity.*` and configurable via VS Code Settings UI or `settings.json`.

### SFTP

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `sftp.ignorePatterns` | string[] | `[".git", "node_modules", ".DS_Store", "Thumbs.db"]` | Patterns excluded from transfers |
| `sftp.initTimeout` | number (ms) | 30000 | SFTP subsystem init timeout |
| `sftp.operationTimeout` | number (ms) | 30000 | Per-operation timeout |
| `sftp.pathExpandTimeout` | number (ms) | 15000 | `~` path expansion timeout |

### File Associations

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `files.associations` | object | (see below) | Map extensions to open action |

Default associations:
- `*.png, *.jpg, *.jpeg, *.gif, *.svg` → `internal-preview`
- `*.pdf, *.xlsx, *.docx, *.pptx` → `external`
- `*.log, *.txt, *.md, *.json, *.xml, *.yaml` → `vscode`

Actions: `internal-preview`, `external`, `vscode`

### File Manager

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `fileManager.defaultLayout` | `explorer` \| `commander` | `explorer` | Default panel layout |
| `fileManager.defaultView` | `list` \| `grid` | `list` | Default file view |

### Terminal

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `terminal.fontSize` | 8–48 | 16 | Font size in px |
| `terminal.fontWeight` | 100–900 | 500 | Font weight |
| `terminal.lineHeight` | 1–3 | 1.5 | Line height multiplier |
| `terminal.letterSpacing` | 0–10 | 2 | Letter spacing in px |
| `terminal.cursorStyle` | bar / block / underline | block | Cursor shape |
| `terminal.cursorBlink` | boolean | true | Animated cursor |
| `terminal.pasteThreshold` | number | 10 | Chars before paste confirmation |

### Connection

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `connection.readyTimeout` | 5000–120000 ms | 20000 | SSH connect timeout |
| `connection.keepaliveInterval` | 5000–300000 ms | 30000 | Keepalive packet interval |
| `connection.keepaliveCountMax` | 1–20 | 3 | Max unanswered keepalives |
| `connection.maxAuthTries` | 1–10 | 3 | Max auth attempts |
| `connection.autoReconnect` | boolean | true | Auto-reconnect on disconnect |
| `connection.reconnectMaxAttempts` | 0–100 | 10 | Max reconnect tries (0=unlimited) |
| `connection.reconnectBaseDelay` | 500–10000 ms | 1000 | Initial reconnect delay |
| `connection.reconnectMaxDelay` | 5000–120000 ms | 30000 | Max reconnect delay |

### Transfer

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `transfer.maxConcurrentPerHost` | 1–20 | 3 | Max parallel transfers per host |
| `transfer.maxConcurrentGlobal` | 1–50 | 5 | Max parallel transfers total |
| `transfer.queueProcessingInterval` | 100–10000 ms | 1000 | Queue poll interval |
| `transfer.cacheTTL` | 0–300000 ms | 10000 | Dir listing cache duration (0=off) |
| `transfer.paginationThreshold` | 100–50000 | 1000 | Files before pagination kicks in |

### Session

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `session.autoRestore` | boolean | true | Restore sessions on startup |
| `session.maxAge` | days | 2 | Max session age to restore (0=unlimited) |

---

## Architecture Details

### Services (Extension Host)

| Service | Role |
|---------|------|
| `HostService` | Host config CRUD, folder management |
| `CredentialService` | Secure credential storage (VS Code SecretStorage) |
| `ConnectionPool` | SSH connection pooling with ref-counting |
| `SshSession` | Terminal SSH sessions with auto-reconnect |
| `SshConnectionService` | High-level SSH coordination |
| `SftpService` | All SFTP operations (2,700+ lines) |
| `TransferService` | File transfer queue with worker thread |
| `EditHandler` | Edit-on-Fly workflow |
| `ArchiveService` | Archive compress/extract |
| `SyncService` | Directory sync engine |
| `BookmarkService` | Bookmark storage |
| `ClipboardService` | Cross-system clipboard |
| `BroadcastService` | Multi-host command broadcast |
| `DiskSpaceService` | Disk info (total, free, used) |
| `HostKeyService` | SSH host key verification |
| `SshAgentService` | SSH agent integration |
| `StateService` | Panel state persistence |
| `ConfigService` | Extension config management |
| `NotificationService` | User notifications |
| `OsDetectionService` | Remote OS detection |
| `LocalFsService` | Local filesystem operations |
| `LocalPtyService` | Local shell PTY management |
| `NavigationService` | Terminal path navigation |
| `BadgeService` | Activity bar badge management |

### Controllers (RPC Handlers)

| Controller | Handles |
|-----------|---------|
| `HostController` | All host CRUD, folder, bulk, import/export |
| `SftpController` | File operations, clipboard, local FS |
| `TransferController` | Queue management |
| `CredentialController` | Credential vault CRUD |
| `HostKeyController` | Accept/remove host keys |
| `StateController` | Panel state, permissions, broadcast |
| `BaseController` | Shared error handling, notification dispatch |

### RPC Methods Summary

**Domains:**
`data`, `host`, `folder`, `bulk`, `import`, `export`, `credential`,
`sftp`, `local`, `clipboard`, `transfer`, `archive`, `search`,
`bookmark`, `disk`, `context`, `broadcast`, `permissions`, `ownership`,
`panel`, `hostKey`, `system`, `config`, `script`, `terminal`, `file`, `sync`, `console`

**Total: 80+ typed RPC methods** — all defined in `src/common/rpc.ts`

### Frontend State Management (Zustand)

| Store | State |
|-------|-------|
| `useHostStore` | Hosts, credentials, active sessions, host statuses |
| `useFileStore` | File panels, selections, bookmarks, clipboard |
| `useTransferStore` | Transfer jobs, queue summary |
| `useToastStore` | Toast notifications |
| `useErrorDialogStore` | Modal error dialogs with suggestions |

---

## Error Handling

### Backend Error Hierarchy

All errors extend `AppError` with:
- `code` — Machine-readable identifier
- `severity` — `fatal` / `error` / `warning` / `info`
- `userMessage` — Human-readable message
- `suggestions` — Array of actionable hints
- `recoverable` — Boolean flag for auto-recovery

**Error Classes:**
| Category | Classes |
|----------|---------|
| SSH | `SshAuthenticationError`, `SshConnectionTimeoutError`, `SshConnectionRefusedError`, `HostKeyError`, `SshHostNotFoundError`, `SshKeyFileError`, `SshShellError` |
| SFTP | `FileNotFoundError`, `PermissionDeniedError`, `SftpError` |
| Archive | `ArchiveError`, `UnsupportedArchiveFormatError` |
| Host/Credentials | `HostNotFoundError`, `CredentialNotFoundError`, `CredentialError` |
| Workers | `WorkerError`, `WorkerInitRequiredError` |
| PTY | `PtyError`, `PtyUnavailableError` |
| Validation | `ValidationError`, `TransferError` |

### Frontend Error UX

- **Toast Notifications** — Transient messages (success / warning / info / error)
- **Error Dialog** — Modal for critical failures with suggestions and context
- **Connection Logs** — Full attempt history in terminal view
- **Persistent Toasts** — For critical failures (duration: 0 = stay until dismissed)
- **Auto Toasts** — RPC client automatically shows structured errors from backend

---

## Security Model

| Topic | Approach |
|-------|---------|
| Password storage | VS Code `SecretStorage` (OS keychain) |
| SSH key storage | Key path in config, passphrase in SecretStorage |
| Sudo passwords | Written to `stdin` of stream — never interpolated in shell commands |
| Host key verification | Mandatory on first connection, stored fingerprint verified on reconnect |
| `rejectUnauthorized` | Only `false` when user explicitly clicks "Connect Anyway" |
| Sensitive data in errors | Never included — only hostId, path, operation, port |
| Credential scope | Never stored in plaintext JSON or `globalState` |

---

## Performance Considerations

| Area | Technique |
|------|-----------|
| Large file lists | `react-virtuoso` virtual scrolling (60 FPS with 10k+ items) |
| Directory listing | LRU cache with TTL, pagination for 1000+ items |
| File transfers | Worker thread isolation, concurrency limits |
| SFTP batch operations | `Promise.all` with `p-limit` (not serial `await`) |
| Re-renders | Zustand selective subscriptions |
| Terminal rendering | WebGL canvas (GPU-accelerated) with Canvas fallback |
| File system ops | Always async (`fs.promises`) — never `readFileSync` |
| Large transfers | Chunk-based sending to prevent main thread blocking |
| Event listeners | Cleaned up in `useEffect` return functions |

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/common/rpc.ts` | RPC protocol — source of truth for all communication (897 lines) |
| `src/common/types.ts` | All shared TypeScript interfaces (Host, FileEntry, TransferJob…) |
| `src/common/errors.ts` | Typed error hierarchy |
| `src/extension/main.ts` | Extension bootstrap (service init only, no business logic) |
| `src/extension/utils/rpcHandler.ts` | RPC router — dispatches requests to controllers |
| `src/extension/services/sftpService.ts` | Full SFTP implementation (2,700+ lines) |
| `src/extension/services/transferService.ts` | Transfer queue + worker management |
| `src/extension/services/connectionPool.ts` | SSH connection pooling |
| `src/extension/services/sshSession.ts` | SSH terminal sessions with auto-reconnect |
| `src/extension/services/editHandler.ts` | Edit-on-Fly workflow |
| `src/extension/services/archiveService.ts` | Archive operations |
| `src/extension/services/syncService.ts` | Directory sync |
| `src/extension/controllers/` | All RPC handler implementations |
| `src/webview/App.tsx` | React app entry — context-based view routing |
| `src/webview/utils/rpc.ts` | Type-safe RPC client |
| `src/webview/store/` | All Zustand stores |
| `src/webview/views/FileManager.tsx` | Dual-panel file manager UI |
| `src/webview/views/TerminalView.tsx` | Terminal UI with xterm.js |
| `src/webview/views/TransferQueue.tsx` | Transfer queue sidebar UI |
| `src/webview/components/FileManager/QueueButton.tsx` | Queue button in file manager toolbar |
| `src/webview/dialogs/` | All modal dialogs |
| `webpack.config.js` | Triple bundle config |
| `package.json` | Extension manifest, commands, views, settings |

---

## Dependencies

### Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| `ssh2` | 1.15.0 | SSH client (connections, SFTP, shell, exec) |
| `@xterm/xterm` | 5.5.0 | Terminal emulator |
| `@xterm/addon-fit` | – | Auto-resize terminal |
| `@xterm/addon-search` | – | In-terminal search |
| `@xterm/addon-web-links` | – | Clickable URLs |
| `@xterm/addon-webgl` | – | GPU-accelerated rendering |
| `@xterm/addon-unicode11` | – | Modern Unicode support |
| `node-pty` | 1.0.0 | Local PTY (native module) |
| `adm-zip` | 0.5.10 | ZIP archive handling |
| `tar` | 6.2.0 | TAR/TAR.GZ archive handling |
| `iconv-lite` | 0.6.3 | Character encoding conversion |
| `fast-glob` | 3.3.2 | Glob pattern matching |
| `minimatch` | 9.0.3 | Wildcard matching |
| `react` / `react-dom` | 18.2.0 | UI framework |
| `zustand` | 4.4.7 | Frontend state management |
| `react-virtuoso` | 4.6.2 | Virtualized lists |
| `lucide-react` | 0.300.0 | SVG icon library |
| `clsx` | 2.1.0 | Conditional CSS class names |
| `node-disk-info` | 1.3.0 | Disk space information |
| `p-limit` | 3.1.0 | Concurrency limiting |
| `uuid` | 9.0.1 | Unique ID generation |

---

## Build & Development

```bash
npm install              # Install dependencies
npm run compile          # Build (production)
npm run watch            # Auto-compile on change (development)
npm run package          # Production build with optimized source maps
npm run lint             # Run ESLint
npm test                 # VS Code integration tests
npm run test:unit        # Jest unit tests
npm run test:unit:watch  # Jest watch mode
npm run test:unit:coverage  # Coverage report
```

**Run extension in development:**
Press `F5` in VS Code to launch Extension Development Host.

---

## Design System

All UI uses VS Code CSS variables exclusively — no hardcoded colors:

| Purpose | Variable |
|---------|---------|
| Background | `var(--vscode-editor-background)` |
| Borders | `var(--vscode-panel-border)` |
| Input fields | `var(--vscode-input-background)` |
| Focus ring | `var(--vscode-focusBorder)` |
| Foreground | `var(--vscode-editor-foreground)` |
| Buttons | `var(--vscode-button-background)` |

This ensures full compatibility with all VS Code themes, including high-contrast modes.

---

*Generated: 2026-04-14 · Labonair Connectivity v1.3.5*
