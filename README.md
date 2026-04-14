# Labonair Website

The official marketing and documentation website for **Labonair** — a self-hosted daemon for managing coding agents (Claude Code, Codex, OpenCode).

Live at: [labonair.sh](https://labonair.sh)

## Tech Stack

- **Framework**: TanStack React Start (Server-Side Rendering)
- **Bundler**: Vite 7
- **Runtime**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: TanStack Router (file-based)
- **Deployment**: Cloudflare Workers

## Project Structure

```
src/
├── routes/              # File-based routing (TanStack Router)
│   ├── __root.tsx      # Root layout (fetches GitHub data)
│   └── ...             # Page routes
├── components/         # Reusable React components
│   ├── landing-page.tsx
│   └── ...
├── posts/              # Blog posts (Markdown with YAML frontmatter)
├── releases.ts         # GitHub releases API client
├── stars.ts            # GitHub stars counter
├── meta.ts             # SEO metadata helpers
├── downloads.tsx       # Platform-specific download logic
└── posts.ts            # Blog post loader (Vite glob)
```

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Development

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:8082)
npm run dev

# Type checking
npm run typecheck
```

### Build & Deploy

```bash
# Preview production build locally
npm run preview

# Build + deploy to Cloudflare Workers
npm run deploy
```

## Key Features

- **Server-Side Rendering**: Fast initial page loads with React Start
- **File-Based Routing**: Routes automatically generated from `src/routes/`
- **GitHub Integration**: Auto-fetches release data and star counts
- **Blog Support**: Markdown posts with metadata
- **Responsive Design**: Tailwind CSS for all screen sizes
- **Auto-Generated Sitemap**: Built via Vite plugin from route list

## Configuration

### Routing
- File-based routing via TanStack Router
- Route tree auto-generated to `routeTree.gen.ts` on `npm run dev`
- **Do not manually edit `routeTree.gen.ts`** — it regenerates automatically

### Deployment
- Configured in `wrangler.toml` for Cloudflare Workers
- Entry point: `@tanstack/react-start/server-entry`
- Custom domains: `labonair.sh` and `www.labonair.sh`

### Path Alias
- `~/*` maps to `./src/*` for cleaner imports

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Code of Conduct

We are committed to providing a welcoming and inspiring community. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our values and expectations.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Support

For questions or issues, please open an issue on GitHub or reach out to the Labonair team.
