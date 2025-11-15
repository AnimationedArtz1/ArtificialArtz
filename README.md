# ArtificialArtz Platform (Next.js)

ArtificialArtz is a creative automation studio that delivers AI-powered tooling, services, and storytelling for brands and creators. This project is a complete rebuild on Next.js 14+ with the App Router, Tailwind CSS, TypeScript, and a comprehensive design system.

## Features

- **Next.js 14 App Router** with strict TypeScript configuration
- **Tailwind CSS v3** design system with custom tokens, animations, and responsive breakpoints
- **Reusable UI library**: buttons, cards, forms, modals, toasts, spinners, skeletons, and more
- **AI Tools** with simulated asynchronous generators, copy-to-clipboard, history, and scratchpad
- **Pages**: Home, Tools, Services, About, Contact, including WordPress blog feed integration
- **Error Handling**: Error boundaries, Sentry integration hooks, robust logging utilities
- **SEO Ready**: Metadata, OpenGraph, Twitter cards, sitemap generation
- **Testing**: Jest + React Testing Library, Playwright E2E tests
- **CI/CD**: GitHub Actions pipeline for linting, type-checking, testing, and build verification

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

Access the app at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

### Testing

- **Unit/Integration**: `npm run test`
- **E2E (Playwright)**: `npm run test:e2e`
- **Type Check**: `npm run type-check`
- **Lint**: `npm run lint`

### Environment Variables

Copy `.env.example` to `.env.local` and configure as needed.

```env
NEXT_PUBLIC_SITE_URL=https://artificialartz.com
NEXT_PUBLIC_WORDPRESS_API_URL=https://public-api.wordpress.com/wp/v2/sites/artificialartz.wordpress.com
NEXT_PUBLIC_SENTRY_DSN=
NEXT_PUBLIC_GA_ID=
```

### Scripts

| Script               | Description                                |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Start the development server               |
| `npm run build`      | Build the production bundle                |
| `npm run start`      | Run the production server                  |
| `npm run lint`       | Run ESLint                                 |
| `npm run type-check` | Run TypeScript checks                      |
| `npm run test`       | Run unit/integration tests with Jest       |
| `npm run test:e2e`   | Run Playwright end-to-end tests            |
| `npm run format`     | Format files with Prettier                 |
| `npm run sitemap`    | Generate sitemap and robots.txt            |

## Project Structure

```
app/
  layout.tsx         # Root layout with global providers
  page.tsx           # Home page
  tools/             # Tool listing and individual tools
  services/          # Services landing page
  about/             # About page
  contact/           # Contact form
components/
  layout/            # Header, footer, navigation
  providers/         # Theme, toast, error boundary providers
  ui/                # Design system components
  home/              # Home page sections
  tools/             # Tool UI elements
hooks/
lib/
  constants/         # Taglines, tools, navigation, etc.
  utils/             # Generators, helpers
  storage/           # LocalStorage helpers
services/
  wordpress-service.ts # WordPress blog integration
styles/
  globals.css
  design-tokens.css
```

## Deployment

The project is configured for Vercel deployment with `next.config.js` and `vercel.json`. A GitHub Actions workflow automates linting, testing, and building on `staging` and `main` branches.

## License

This project is proprietary to ArtificialArtz.
