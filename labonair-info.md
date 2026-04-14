# Labonair — Vollständige Projektinformation
> Für Website-Entwicklung, Docs und Marketing

---

## Was ist Labonair?

Labonair ist ein **Hard-Fork von Visual Studio Code**, gebaut für Fokus, Privatsphäre und native KI-Integration. Es ist kein Theme, kein Skin — es ist ein von Grund auf neu gedachter Code-Editor, der die besten Teile von VS Code nimmt und alles Überflüssige, Ablenkende und Datenhungrige entfernt.

**Kurzbeschreibung (für Hero-Section):**
> "The Zen-Mode First Editor for the AI Era. High-performance. Privacy-focused. Native AI Orchestration."

**Taglines:**
- "Code im Fluss. Nicht im Rauschen."
- "Bring your own key. Own your data. Own your editor."
- "VS Code war der Anfang. Labonair ist die Antwort."

---

## Zielgruppe

- Entwickler, die Microsoft-Telemetrie und Cloud-Abhängigkeiten ablehnen
- Privacy-bewusste Profis (Freelancer, Firmen mit strikten Sicherheitsauflagen)
- Power-User, die Keyboard-First-Workflows bevorzugen (Vim-Feeling ohne Vim-Lernkurve)
- AI-affine Entwickler, die eigene Modelle / eigene API-Keys nutzen wollen (BYOK)
- Entwickler, die vom VS-Code-Clutter frustriert sind

---

## Alleinstellungsmerkmale (USPs)

| Bereich | Labonair | VS Code (Standard) |
|---|---|---|
| **Oberfläche** | Unified Dock, Zen Header, keine Activity Bar | Drei separate Leisten, volle Ablenkung |
| **Navigation** | The Shelf (Harpoon-style, bis zu 9 Pins) | Tab-Chaos |
| **KI** | BYOK: OpenAI, Anthropic, Ollama, DeepSeek, Gemini | GitHub Copilot (Abo-Pflicht) |
| **KI-Agenten** | Native ACP-Unterstützung (z.B. Claude Code) | Stark eingeschränkt |
| **Privatsphäre** | Telemetrie vollständig entfernt | Telemetrie aktiv |
| **Extensions** | OpenVSX Registry (offen) | Microsoft Marketplace (proprietär) |

---

## Features — Detailbeschreibung

### 1. Zen UI Architektur

Labonair wurde von Grund auf für Fokus gebaut. Das UI ist kein Umbau von VS Code — es ist ein Neubau.

#### Unified Dock
- Die Activity Bar wurde **entfernt** und in eine 32px schmale Statusleiste unten integriert
- Alle Views (Explorer, Suche, Versionskontrolle) sind über Icons im Dock unten links erreichbar
- Mehr Bildschirmfläche für das Wesentliche: Code

#### Zen Header
- Die Titelleiste ist auf das Minimum reduziert
- Rechts ausgerichteter Kontroll-Cluster für: Branch-Name, Projekt-Name, Profil-Wechsel
- Kein Menü-Clutter, keine überladene Toolbar

#### Fluid Explorer
- Neu gestalteter Datei-Baum mit tiefer Einrückung
- "Phantom Arrows" — Pfeilsymbole erscheinen nur beim Hover, reduzieren visuelles Rauschen
- Floating Selection Pills für Mehrfach-Auswahl

---

### 2. The Shelf — Harpoon-style Navigation

Tabs sind das Problem. The Shelf ist die Lösung.

Bis zu **9 Dateien** können mit einem Tastendruck dauerhaft angepinnt werden. Kein Scrollen durch 20 Tabs mehr.

| Aktion | Mac | Windows / Linux |
|---|---|---|
| Datei anpinnen | `Cmd + Shift + 1–9` | `Alt + Shift + 1–9` |
| Zu Shelf-Eintrag springen | `Cmd + 1–9` | `Alt + 1–9` |

**Features:**
- **Smart Indicators:** Zeigt visuell an, ob eine gepinnte Datei ungespeicherte Änderungen oder Fehler hat
- **Drag & Drop:** Dateien direkt aus dem Explorer in das Dock ziehen
- **Konfigurierbar:** Limit und Anzeige via `settings.json` steuerbar

```json
"labonair.shelf.enabled": true,
"labonair.shelf.limit": 5,
"labonair.shelf.showInStatusBar": true
```

---

### 3. Dual-Engine AI Core

Labonair hat eine vollständig eigene KI-Architektur — keine Abhängigkeit von GitHub Copilot.

#### Modus 1: Direct API Mode
Chatte direkt mit führenden Sprachmodellen über eigene API-Keys:
- **OpenAI:** GPT-4o, GPT-4 Turbo
- **Anthropic:** Claude 3.5 Sonnet, Claude 3 Opus
- **Google:** Gemini Pro, Gemini Flash
- **DeepSeek:** DeepSeek Coder, DeepSeek Chat
- **Ollama:** Jedes lokale Modell (100% offline)

Unterstützt **Multimodal** (Bilder in den Chat ziehen) und Kontext-Referenzen via `@dateiname`.

#### Modus 2: Agent Client Protocol (ACP)
Verbindet sich mit autonomen KI-Agenten wie **Claude Code**.

Diese Agenten können:
- Terminal-Befehle ausführen
- Dateien erstellen, lesen, bearbeiten
- Ganze Verzeichnisse refactoren
- Selbstständig Bugs finden und beheben

**Human-in-the-Loop:** Ein integriertes Permission-System fragt bei kritischen Aktionen nach Bestätigung — der Nutzer behält die Kontrolle.

**API-Key-Verwaltung:**
Keys werden **niemals** in Klartextdateien gespeichert — ausschließlich im OS-Keychain (macOS Keychain / Windows Credential Manager) via `ISecretStorageService`.

---

### 4. Developer Experience Features

#### Native Inline Blame
- Git-Blame-Information direkt als Ghost Text in der Zeile
- Kein Extension erforderlich
- Konfigurierbar (Farbe, Format)

```json
"labonair.versionControl.inlineBlame.enabled": true,
"labonair.versionControl.inlineBlame.color": "#6C7380"
```

#### Typewriter Mode
- Hält den Cursor beim Tippen vertikal zentriert
- Reduziert Augenbewegung und ermüdung bei langen Sessions

#### Instant Preview
- Beim Navigieren durch `Cmd+P` Ergebnisse öffnet sich die Datei sofort im Hintergrund
- Kein Klicken nötig — Pfeil hoch/runter reicht

#### Terminal Tabs
- Terminals sehen und verhalten sich wie Editor-Tabs (horizontales Layout)
- Kein separater Panel — Terminals als gleichwertige Bürger im Editor

---

## Privatsphäre — Technische Details

### Was entfernt wurde
- **Microsoft-Telemetrie-Endpunkte:** Alle hardcodierten Reporting-URLs aus dem Source Code entfernt
- `telemetry.enableTelemetry` ist erzwungen auf `false`
- **Microsoft-Account-Integration:** Settings Sync und Login-Flows sind deaktiviert
- **Proprietary Extensions:** Microsoft-spezifische Extensions (Live Share, originales Copilot) funktionieren nicht — als Design-Entscheidung

### Was stattdessen gilt
- **OpenVSX Registry** als Extension-Quelle (open-source, community-betrieben)
- **Lokale Datenspeicherung:** User-Daten (Hosts, Themes, Konfiguration) in `~/.labonair/` (JSON)
- **Secrets:** Ausschließlich OS-Keychain über `ISecretStorageService`
- **AI lokal:** Ollama-Integration für 100% offline KI — kein Byte verlässt den Rechner

---

## Installation

### Systemanforderungen
- **macOS:** 11.0+ (Big Sur), Intel x64 oder Apple Silicon (M1–M4)
- **Windows:** Windows 10 (x64) oder neuer
- **Linux:** x64, glibc 2.28+

### Download-Tabelle

| Platform | Architektur | Datei |
|---|---|---|
| macOS | Apple Silicon (M1/M2/M3/M4) | `Labonair-x.x.x-arm64.dmg` |
| macOS | Intel x64 | `Labonair-x.x.x-x64.dmg` |
| Windows | x64 | `Labonair-win32-x64.zip` |
| Linux | x64 | `Labonair-linux-x64.tar.gz` |

### macOS Gatekeeper
Da Labonair ad-hoc signiert (nicht notarisiert) ist, zeigt macOS eine Warnung beim ersten Start.

**Lösung 1:** Rechtsklick auf die App → "Öffnen" → "Öffnen" im Dialog bestätigen

**Lösung 2:** Terminal:
```bash
xattr -rd com.apple.quarantine /Applications/Labonair.app
```

### Homebrew (empfohlen für macOS)
```bash
brew tap Snenjih/tap
brew install --cask labonair
```
Homebrew entfernt das Quarantäne-Attribut automatisch.

### Updates
```bash
brew upgrade labonair
```
Labonair prüft automatisch im Hintergrund auf neue Versionen.

---

## Keyboard Shortcuts — Komplette Übersicht

| Aktion | Mac | Win/Linux |
|---|---|---|
| **Datei in Shelf pinnen** | `Cmd + Shift + 1–9` | `Alt + Shift + 1–9` |
| **Zu Shelf-Slot springen** | `Cmd + 1–9` | `Alt + 1–9` |
| **Zen Mode aktivieren** | Command Palette | Command Palette |
| **Neuer Chat** | `Cmd + Shift + N` | `Ctrl + Shift + N` |
| **Instant Preview** | `↑/↓` in QuickOpen | `↑/↓` in QuickOpen |
| **Im Sidebar anzeigen** | `Cmd + E` (in QuickOpen) | `Ctrl + E` (in QuickOpen) |
| **Command Palette** | `Cmd + Shift + P` | `Ctrl + Shift + P` |
| **Schnellöffnen** | `Cmd + P` | `Ctrl + P` |

---

## Konfiguration — Alle Labonair-spezifischen Settings

```json
{
  // The Shelf
  "labonair.shelf.enabled": true,
  "labonair.shelf.limit": 5,
  "labonair.shelf.showInStatusBar": true,

  // Inline Git Blame
  "labonair.versionControl.inlineBlame.enabled": true,
  "labonair.versionControl.inlineBlame.color": "#6C7380",

  // AI Core
  // Keys werden im OS-Keychain gespeichert, nicht hier
  // Konfiguration über: Chat Panel > Settings Tab
}
```

**AI-Provider konfigurieren:**
Chat Panel öffnen → Settings Tab → API-Key eingeben (wird sicher im OS-Keychain abgelegt)

---

## Extensions

Labonair nutzt die **OpenVSX Registry** — eine offene, community-betriebene Alternative zum Microsoft Marketplace.

### Was funktioniert
- Python, Rust, Go, Java, C++, Vue, React — alle Sprach-Extensions
- Linter, Formatter (Prettier, ESLint)
- Git-Tools, Docker, Kubernetes
- Themes und Icon-Packs

### Was nicht funktioniert (Design-Entscheidung)
- GitHub Copilot (Original) — nutze stattdessen Labonairs nativen AI-Core
- Live Share (Original) — Microsoft-Server-abhängig
- Andere Extensions mit hardcodierten Microsoft-API-Calls

---

## Technische Architektur (für Docs / Developer Section)

Labonair basiert auf der VS Code Architektur:

```
src/vs/
├── base/          # Plattformübergreifende Utilities
├── platform/      # 95+ injectable Services (DI)
├── editor/        # Monaco Editor Integration
├── workbench/     # Anwendungs-UI und Komposition
│   ├── contrib/   # Feature-Beiträge (91+ Features)
│   └── services/  # Workbench-spezifische Services
└── code/          # Entry Points (Electron Main, CLI)
```

**Multi-Process-Architektur:**
- **Main Process:** Window-Management, native APIs
- **Renderer Process:** UI und Editor
- **Extension Host:** Extension-Ausführung (isoliert)
- **Shared Process:** Singleton-Services

**Neue Labonair-Contributions:**
- `src/vs/workbench/contrib/shelf/` — The Shelf
- `src/vs/workbench/contrib/aiChat/` — Dual-Engine AI Core
- `src/vs/workbench/contrib/hostManager/` — Host Manager (SSH)
- `src/vs/workbench/contrib/themeStudio/` — Theme Studio

---

## Roadmap (Geplante Features)

### Near-term
- **Visual Configurator:** Settings als Grid-Layout mit Live-Vorschau-Karten statt endloser Liste
- **AI Search in Settings:** Natürlichsprachige Suche ("Mach die Schrift größer") statt Keyword-Filter
- **Live Playground:** Split-View beim Öffnen der Settings — rechts ein Live-Editor-Preview

### Mid-term
- **Onboarding Wizard:** Animiertes Modal beim ersten Start (Sprachen, Style, Privacy-Level)
- **Personas / Modus-Umschalter:** "Zen Writer", "Data Scientist", "Backend Dev" als vorgespeicherte Profile
- **Code Heatmap (Minimap 2.0):** Minimap einfärbt nach Aktivität oder Komplexität

### Long-term
- **Local RAG (Built-in Vektor-DB):** Lokale semantische Code-Suche ohne Cloud ("Chatte mit deinem Codebase")
- **Smart Merge-Conflict Solver:** AI analysiert beide Seiten und schlägt intelligentes Merging vor
- **Canvas Mode:** Infinite Whiteboard für Code-Visualisierung (wie Obsidian Canvas)
- **P2P Live Share:** Peer-to-Peer Coding via WebRTC / Yjs — ohne Microsoft-Server

---

## FAQ

**Kann ich VS Code Extensions nutzen?**
Ja, über die OpenVSX Registry. Die meisten Extensions sind verfügbar. Ausnahme: proprietäre Microsoft-Extensions.

**Wie synchronisiere ich meine Settings?**
Settings Sync (Microsoft-Server) ist deaktiviert. Empfehlung: `.labonair`-Ordner mit Git versionieren, oder Extension "Settings Sync" (Shan Khan).

**Wo ist die Activity Bar?**
Entfernt. Alle Views sind über das Dock (Statusleiste unten links) erreichbar.

**Ist Labonair kostenlos?**
Ja. Labonair ist MIT-lizenziert und vollständig open-source.

**Welche AI-Modelle werden unterstützt?**
OpenAI (GPT-4o, GPT-4 Turbo), Anthropic (Claude 3.5 Sonnet, Opus), Google (Gemini), DeepSeek, und alle lokalen Modelle über Ollama.

**Funktioniert Labonair offline?**
Ja. Mit Ollama als AI-Provider läuft alles 100% lokal — kein Internet erforderlich.

---

## Contributing

1. Fork & Clone des Repositories
2. `npm install` (installiert Dependencies und lädt built-in Extensions automatisch herunter)
3. `npm run watch` in einem Terminal
4. `./scripts/code.sh` (macOS/Linux) oder `.\scripts\code.bat` (Windows) in einem zweiten Terminal
5. Änderungen: `Reload Window` (`Cmd+R`) für UI/Renderer-Änderungen; vollständiger Neustart für Main-Process-Änderungen

**Vor dem Commit:**
- TypeScript-Fehler prüfen: `npm run compile`
- Linter: `npm run eslint`
- Layer-Regeln: `npm run valid-layers-check`

---

## Credits & Lizenzen

- Basiert auf [Microsoft VS Code](https://github.com/microsoft/vscode) (MIT License)
- Inspiriert vom Design von [Zed](https://zed.dev)
- Extensions via [OpenVSX](https://open-vsx.org)
- CLI: Rust-Implementierung

**Lizenz:** MIT — Labonair ist und bleibt kostenlos und open-source.
