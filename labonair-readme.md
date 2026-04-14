<div align="center">
  <!-- Das Bild mit vertical-align: middle und 10px Abstand rechts -->
  <img src="resources/linux/code.png" width="128" height="128" alt="Labonair Logo" style="vertical-align: middle; margin-right: 10px;">

  <!-- Der Text-Block als Inline-Block daneben -->
  <div style="display: inline-block; vertical-align: middle; text-align: left;">
    <h1 style="margin: 0; border-bottom: none;">Labonair Code Editor</h1>
    <p>
      <strong>The Zen-Mode First Editor for the AI Era.</strong><br>
      High-performance. Privacy-focused. Native AI Orchestration. <br>
      Highly Customizable
    </p>
  </div>
</div>

<br> <!-- Kleiner Abstand zu den Badges -->

<p align="center">
  <a href="https://github.com/Snenjih/Labonair/releases/latest">
    <img src="https://img.shields.io/github/v/release/Snenjih/Labonair?style=flat-square" alt="Release" />
  </a>
  <a href="https://github.com/Snenjih/Labonair/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/Snenjih/labonair/ci.yml?branch=main&label=build&style=flat-square" alt="Build Status" />
  </a>
  <a href="https://discord.gg/hCHD8zSUCj">
    <img src="https://img.shields.io/discord/123456789?label=discord&style=flat-square&color=5865F2" alt="Discord" />
  </a>
  <a href="LICENSE.txt">
    <img src="https://img.shields.io/github/license/Snenjih/labonair?style=flat-square" alt="License" />
  </a>
</p>

<p align="center">
  <a href="#-key-features">Features</a> •
  <a href="#-visual-tour">Visuals</a> •
  <a href="#-labonair-cheatsheet">Shortcuts</a> •
  <a href="#-installation">Download</a> •
  <a href="#-configuration">Config</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-contributing">Contributing</a>
</p>

<img width="1024" align="center" alt="Labonair in action" src="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png">
---

## ⚡ What is Labonair?

Labonair is a **hard-fork of VS Code** engineered for **Focus** and **Autonomy**.

We stripped away the clutter, redesigned the UI for a "Zen" experience, and rebuilt the AI architecture from scratch. Labonair is not just a skin; it's a completely new way to interact with code, featuring a unified dock, keyboard-centric navigation ("The Shelf"), and a native Dual-Engine AI system that supports both APIs and Autonomous Agents via ACP.

### 🏆 Why Labonair?

| Feature | VS Code (Standard) | Labonair |
| :--- | :--- | :--- |
| **Interface** | Cluttered, 3 separate bars | **Unified Dock & Zen Header** |
| **Navigation** | Tabs & Sidebar | **The Shelf (Harpoon-style)** |
| **AI** | GitHub Copilot (Subscription) | **BYOK (OpenAI, Anthropic, Ollama)** |
| **Agents** | Limited | **Native ACP Support (Claude Code)** |
| **Privacy** | Telemetry Enabled | **Telemetry Removed** |
| **Extensions** | MS Marketplace | **OpenVSX Registry** |

---

## ⌨️ Labonair Cheatsheet

New workflows require new muscle memory. Here are the essentials:

| Action | Shortcut (Mac) | Shortcut (Win/Lin) |
| :--- | :--- | :--- |
| **Pin to Shelf** | `Cmd + Shift + 1-9` | `Alt + Shift + 1-9` |
| **Jump to Shelf** | `Cmd + 1-9` | `Alt + 1-9` |
| **Toggle Zen Mode** | *Command Palette* | *Command Palette* |
| **New Chat** | `Cmd + Shift + N` | `Ctrl + Shift + N` |
| **Instant Preview** | `Up/Down` in QuickOpen | `Up/Down` in QuickOpen |
| **Reveal in Sidebar** | `Cmd + E` (in QuickOpen) | `Ctrl + E` (in QuickOpen) |

---

## ✨ Key Features

### 🧘 Zen UI Architecture
*   **Unified Dock:** We removed the Activity Bar and merged it into a 32px Status Bar at the bottom. More screen space for your code.
*   **Fluid Explorer:** A redesigned file tree with deep indentation, "phantom arrows", and floating selection pills for reduced visual noise.
*   **Minimalist Header:** The title bar is cleaned up, featuring a right-aligned control cluster for Branch, Project, and Profile.

### 📚 The Shelf
Stop drowning in tabs. **The Shelf** allows you to pin up to 9 files for instant access.
*   **Pin:** `Alt + Shift + 1-9`
*   **Jump:** `Alt + 1-9`
*   **Smart:** Indicators show if a pinned file has unsaved changes or errors.
*   **Fluid:** Drag & drop files from the explorer directly into the dock.

### 🤖 Dual-Engine AI Core
Labonair features a completely custom AI architecture that runs locally or via your own keys.

1.  **Direct API Mode:** Chat with **GPT-4o, Claude 3.5, Gemini, or DeepSeek**. Supports images (multimodal) and context via `@file`.
2.  **Agent Client Protocol (ACP):** Connects to autonomous agents like **Claude Code**. These agents can run terminal commands, create files, and refactor entire directories autonomously.
    *   *Security:* Includes a "Human-in-the-Loop" permission system to approve agent actions.

### 🚀 Developer Experience
*   **Native Inline Blame:** Lightning-fast git blame ghost text (no extensions required).
*   **Typewriter Mode:** Keeps your cursor vertically centered while typing.
*   **Instant Preview:** Navigate `Cmd+P` results and see the file open instantly in the background.
*   **Terminal Tabs:** Terminals now look and behave exactly like editor tabs (horizontal layout).

---

## 📥 Installation

Labonair is available for macOS, Linux, and Windows.

**[Download the latest Release](https://github.com/Snenjih/Labonair/releases/latest)**

### Option A: Direct Download (GitHub Releases)

| Platform | Architecture | File |
|---|---|---|
| macOS | Apple Silicon (M1/M2/M3/M4) | `Labonair-x.x.x-arm64.dmg` |
| macOS | Intel x64 | `Labonair-x.x.x-x64.dmg` |
| Windows | x64 | `Labonair-win32-x64.zip` |
| Linux | x64 | `Labonair-linux-x64.tar.gz` |

**macOS first-launch (ad-hoc signed app):**
Because Labonair is ad-hoc signed rather than notarised, macOS Gatekeeper will show a warning on the very first open. Two ways to bypass it:

- **Right-click** the app in Finder → **Open** → click **Open** in the dialog
- Or run once in Terminal:
  ```bash
  xattr -rd com.apple.quarantine /Applications/Labonair.app
  ```

### Option B: Homebrew Cask

```bash
brew tap Snenjih/tap
brew install --cask labonair
```

Homebrew automatically removes the quarantine attribute, so no extra steps are needed.

### Updates

Labonair checks for updates automatically in the background and notifies you when a new version is ready to install. You can also update via Homebrew:

```bash
brew upgrade labonair
```

---

### 🔒 Privacy Promise
Labonair removes the tracking code found in standard VS Code.
*   **No Telemetry:** The `telemetry.enableTelemetry` setting is forced to `false` and reporting endpoints are stripped.
*   **No Microsoft Accounts:** Settings Sync and other features requiring Microsoft logins are disabled by default.
*   **Local AI:** You choose your AI provider. Use Ollama for 100% offline privacy, or your own API keys for cloud models.

---

## ❓ FAQ

<details>
<summary><strong>Can I use standard VS Code extensions?</strong></summary>

Yes! Labonair uses **OpenVSX**, an open-source registry. Most extensions (Python, Rust, Vue, etc.) are available there.
Note: Proprietary Microsoft extensions (like original GitHub Copilot or Live Share) that rely on hardcoded Microsoft APIs will **not** work. Use our native AI alternatives instead!
</details>

<details>
<summary><strong>How do I sync my settings?</strong></summary>

Standard "Settings Sync" sends data to Microsoft servers, which is disabled in Labonair for privacy. We recommend using extensions like "Settings Sync" (Shan Khan) or simply versioning your `.labonair` user folder with Git.
</details>

<details>
<summary><strong>Where is the Activity Bar?</strong></summary>

We killed it. 💀
But don't worry! All your views (Explorer, Search, Source Control) are available in the **Dock (Status Bar)** at the bottom left. Just click the icons there.
</details>

---


## ⚙️ Configuration

Labonair works out of the box, but it's fully configurable via `settings.json`.
Or via the Settings: Click `The Profile Icon at the top right of your Labonair Instance -> Settings`

**AI Providers:**
Go to the **Chat Panel > Settings Tab** to configure your API keys (stored securely in your OS keychain).

**The Shelf:**
```json
"labonair.shelf.enabled": true,
"labonair.shelf.limit": 5,
"labonair.shelf.showInStatusBar": true
```

**Inline Blame:**
```json
"labonair.versionControl.inlineBlame.enabled": true,
"labonair.versionControl.inlineBlame.color": "#6C7380"
```

---

## 🤝 Contributing

We welcome contributions! Whether it's fixing bugs, improving the "Zen" design, or adding new AI providers.

Please read our **[CONTRIBUTING.md](CONTRIBUTING.md)** for a quick start guide. We have a streamlined setup that gets you running in 5 minutes.

1.  Fork & Clone
2.  `npm install`
3.  `F5` to Debug

---

## ❤️ Credits & Legal

*   Based on [Microsoft VS Code](https://github.com/snenjih/labonair) (MIT License).
*   Inspired by the design of [Zed](https://zed.dev).
*   Extensions provided via [OpenVSX](https://open-vsx.org).

**License:** MIT
