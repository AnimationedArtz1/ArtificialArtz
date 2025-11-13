# ArtificialArtz - AI Automation Agency Website

A modern, responsive portfolio and lead generation website for ArtificialArtz AI automation agency.

## 🚀 Features

- Dark Theme: Professional dark theme with accent colors (#7c5cff)
- Responsive Design: Mobile-first design that works on all devices
- Interactive Tools: Demo AI tools (client-side)
- Blog Integration: Fetches latest posts from WordPress blog
- Lead Generation: Direct links to Fiverr and Bionluk profiles
- Contact & CTA: Global Book Demo button (Calendly)

## 📁 Project Structure

```
artificialartz-website/
├── index.html       # Main HTML (CDN React/Tailwind, config + analytics toggle)
├── styles.css       # Custom CSS styles and animations
├── components.js    # Shared components (Navbar, Footer, Section, PricingCard)
├── app.js           # Main app, simple router, and Home page
├── tools.js         # Tools page
└── pages.js         # Services, Pricing, About, Contact pages
```

## 🛠 Technologies Used

- Frontend: React (UMD via CDN), Tailwind CSS (CDN)
- APIs: WordPress REST API (blog feed)
- Integrations: Calendly (Book Demo), optional Plausible analytics

## 🎨 Design System

### Colors
- Background: `#0b0b0c`
- Text: `#f6f8fc`
- Accent: `#7c5cff`
- Accent Light: `#9b8cff`

### Components
- Gradient logo "AA" in circle
- Rotating taglines with slide animation
- Hover effects on cards and buttons
- Mobile-responsive navigation

## 📱 Pages

1. Home – Hero section, featured tools, blog posts, CTA buttons
2. Tools – Hook Generator, YouTube Ideas, Blog Outline (demo tools)
3. Services – Otonom İçerik Motoru (service description and CTAs)
4. Pricing – Three packages with € and ₺ pricing
5. About – Bio, tech stack, and specializations
6. Contact – Platform links (Fiverr/Bionluk)

## 🔧 Configuration

### Edit package prices and features
- File: `pages.js`
- Component: `PricingPage`
- Update `eur` (Euro) and `try` (Lira) fields for each tier and adjust `features`/`note` strings.

### Change Calendly link (Book Demo)
- File: `index.html`
- Set the `data-calendly-url` attribute on the `<body>` tag:
  `<body data-calendly-url="https://calendly.com/YOUR_CALENDLY_USERNAME/intro-call">`
- Alternatively, set `window.APP_CONFIG.calendlyUrl` in a small script before app scripts.

### Enable lightweight analytics (Plausible/Umami placeholder)
- File: `index.html`
- Toggle with `<body data-analytics-enabled="true" data-analytics-domain="yourdomain.com">`
- When enabled, a Plausible script tag is injected dynamically.

### Routes
- The SPA can load `/services` and `/pricing` directly (initial route detection in `index.html`).
- Navigation is fully client-side; no build tooling, no framework router.

## 📊 Performance Optimizations

- Lazy loading for blog posts
- Minimal external dependencies
- Efficient API calls with error handling
- Responsive images and layouts
- Fast loading times

## 🔐 Security Notes

- All external links open in new tabs
- Input sanitization where necessary
- HTTPS recommended for production

## 📞 Support

For questions about this website:
- Fiverr: https://www.fiverr.com/artificialartz
- Bionluk: https://www.bionluk.com/artificialartz

## 📄 License

© 2025 ArtificialArtz - All rights reserved
