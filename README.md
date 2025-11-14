# ArtificialArtz – React + Vite Bootstrap

A modern React application bootstrapped with Vite, TypeScript, Tailwind CSS, and React Router. This
setup replaces the legacy CDN/Babel prototype with an extensible project structure suitable for
production workflows.

## ✨ Highlights

- **Vite + React + TypeScript** for fast development and type-safe components
- **Tailwind CSS** with PostCSS + Autoprefixer for utility-first styling
- **React Router v6** scaffolding for Home, Tools, Services, About, Contact, and 404 routes
- **ESLint + Prettier** preconfigured to enforce consistent formatting and best practices
- Modular directory layout (`components`, `pages`, `hooks`, `lib`, `data`, `styles`, `assets`)

## 🚀 Getting Started

```bash
npm install           # Install dependencies
npm run dev           # Start the Vite dev server (http://localhost:5173)
npm run build         # Type-check and build for production
npm run preview       # Preview the production build locally
```

## 📁 Project Structure

```
├── public/             # Static assets served at the root (favicon, etc.)
├── src/
│   ├── assets/         # Asset imports bundled by Vite
│   ├── components/     # Reusable presentational + layout components
│   ├── data/           # Static data, configuration, copy blocks
│   ├── hooks/          # Shared React hooks
│   ├── lib/            # Utilities and framework-agnostic helpers
│   ├── pages/          # Route-level views (Home, Tools, Services, etc.)
│   ├── styles/         # Tailwind entrypoint and custom styles
│   └── main.tsx        # React bootstrap + router mounting
├── index.html          # Vite entry HTML document
├── tailwind.config.cjs # Tailwind configuration
└── postcss.config.cjs  # PostCSS pipeline (Tailwind + Autoprefixer)
```

## 🧩 Routing

`src/App.tsx` wires up the base routes via `react-router-dom`. Each page currently renders placeholder
content so you can layer in real UI without reworking navigation or layout primitives.

## 🎨 Styling

Tailwind is configured globally in `src/styles/index.css`. Add component-level styles via utility
classes or extract shared patterns into Tailwind component layers.

## 🧪 Linting & Formatting

ESLint and Prettier run with opinionated defaults tuned for React + TypeScript. Integrate them into
your editor for instant feedback, or run the linters via your preferred tooling or CI workflow.

---

Happy building! ✨
