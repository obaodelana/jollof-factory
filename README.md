# 🍛 Jollof Factory

Bold West African flavor meets modern web - A tomato-free, pepper-based Jollof sauce landing page built with Astro.

## 🚀 Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[React](https://react.dev)** - For interactive components (Header with mobile menu)
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS with custom neo-brutalist theme
- **[lucide-react](https://lucide.dev)** - Icon library
- **Content Collections** - Type-safe markdown content management

## 📁 Project Structure

```
/
├── public/
│   ├── images/          # Product and recipe images
│   ├── Logo.png
│   ├── ife-loop.gif
│   └── favicon.svg
├── src/
│   ├── components/      # Astro and React components
│   │   ├── Header.tsx   # React component (has state)
│   │   └── *.astro      # Astro components
│   ├── content/         # Content collections (markdown)
│   │   ├── recipes/     # Recipe markdown files
│   │   ├── steps/       # How It Works steps
│   │   ├── testimonials/# Customer testimonials
│   │   └── values/      # Value propositions
│   ├── layouts/
│   │   └── Layout.astro # Main layout with Google Fonts
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # Homepage
│   │   ├── recipes.astro# Recipes page with hash navigation
│   │   └── story.astro  # About/Story page
│   ├── styles/
│   │   └── global.css   # Tailwind + custom theme
│   └── content.config.ts# Content collections schema
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Pages deployment
└── astro.config.mjs
```

## 🎨 Content Collections

All dynamic content is managed through Astro's content collections with type-safety:

- **recipes** - 3 recipes with ingredients and directions
- **steps** - 3-step "How It Works" process
- **testimonials** - Customer reviews
- **values** - Product value propositions (with icon mapping)

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Custom Theme

The site uses a neo-brutalist design with custom colors:
- **Primary**: `#FF4D00` (Vibrant Orange)
- **Secondary**: `#FFD93D` (Golden Yellow)
- **Accent**: `#0D4232` (Deep Green)
- **Cream**: `#F9F5F0` (Background)
- **Dark**: `#121212` (Text/Borders)

## 🌐 Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

The workflow:
1. Builds the static site
2. Uploads to GitHub Pages
3. Deploys to `https://[username].github.io/jollof-factory`

## 📝 Adding Content

### Add a Recipe
1. Create a new `.md` file in `src/content/recipes/`
2. Use the frontmatter schema with required fields
3. Recipe automatically appears in the recipes grid

### Add a Testimonial
1. Create a new `.md` file in `src/content/testimonials/`
2. Include `quote`, `emphasized`, `name`, and optional `context`

## 🎯 Features

- ✅ Fully static (no server required)
- ✅ Type-safe content with Zod schemas
- ✅ Mobile-responsive design
- ✅ Hash-based navigation on recipes page
- ✅ Neo-brutalist design with bold colors
- ✅ Google Fonts integration
- ✅ Optimized build with code splitting

## 📄 License

All rights reserved © Jollof Factory

---

Built with ❤️ using Astro
