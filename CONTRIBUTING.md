# Contributing to Labonair Website

Thank you for your interest in contributing to the Labonair website! We welcome contributions of all kinds, from bug reports to feature requests, documentation improvements, and code submissions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/Labonair-Website.git
   cd Labonair-Website
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. **Start the dev server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:8082`

2. **Make your changes** following the code style and conventions of the project

3. **Type check your code**:
   ```bash
   npm run typecheck
   ```

4. **Test your changes** locally:
   - Review the browser output
   - Check for console errors
   - Test on different screen sizes for responsive design

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, missing semicolons, etc.)
- `refactor:` Code refactoring without feature or bug changes
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Dependency updates, tooling changes, etc.

Example:
```
feat: add blog section to homepage
fix: resolve responsive design issue on mobile
docs: update installation instructions
```

## Code Style

- Use TypeScript for all components
- Follow existing naming conventions
- Keep components focused and single-purpose
- Use meaningful variable and function names
- Add comments for complex logic

## Pull Request Process

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** with:
   - Clear title describing the change
   - Description of what changed and why
   - Any related issue numbers (e.g., "Fixes #123")

3. **Address review feedback** - maintainers may request changes

4. **Merge** - Once approved, a maintainer will merge your PR

## Reporting Issues

- Use the GitHub issue tracker
- Check existing issues before opening a new one
- Provide clear descriptions and reproduction steps for bugs
- Include your environment (OS, Node version, browser)

## Documentation

- Update README.md if adding new features
- Add comments for complex logic
- Update CLAUDE.md if changing project structure or commands

## Questions?

Feel free to open a discussion or reach out to the maintainers. We're here to help!

## Code of Conduct

Please note that this project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

Thank you for contributing! 🎉
