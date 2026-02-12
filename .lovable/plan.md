

# Yoga Platform Website

Transform the existing Terra Bloom therapy site into a modern yoga studio website, while converting the codebase from TypeScript to JavaScript.

## Brand Identity

- **Name**: "Sora Flow" (or similar serene yoga brand)
- **Palette**: Deep indigo, soft lavender, warm gold accents -- calming yet energizing
- **Fonts**: Playfair Display (headings) + Inter (body) -- elegant and clean
- **Imagery**: AI-generated yoga/wellness photos (poses, studio, nature settings)

## Site Sections (mapped from current structure)

| Current Section | New Section | Purpose |
|---|---|---|
| HeroSection | Hero | Full-width hero with yoga pose image, tagline "Find your flow" |
| AboutIntroSection | Philosophy | Studio philosophy, what makes the practice unique |
| SpecialtiesSection | Classes | 3 class types (Vinyasa, Yin, Breathwork) with images |
| SupportSection | Benefits | Why practice yoga -- mind, body, spirit benefits |
| AboutMeSection | Instructor | Meet the lead instructor |
| FAQSection | FAQ | Common questions about classes, experience level, etc. |
| BackgroundSection | Credentials | Certifications, training lineage, teaching hours |
| CTASection | CTA | "Begin your journey" -- book a class |
| Footer | Footer | Nav links, copyright, social links |

## Key Changes

- **New color scheme** in `index.css` with indigo/lavender/gold variables
- **New fonts** imported (Playfair Display + Inter)
- **8 new AI-generated images** for yoga context
- **Updated copy** throughout all sections for yoga context
- **New FAQ content** tailored to yoga studio questions
- **Added smooth scroll** behavior via CSS `scroll-behavior: smooth`
- **All `.tsx` files renamed to `.jsx`** and TypeScript syntax removed (type annotations, interfaces, etc.)
- **Config files** (`tsconfig.json`, `tsconfig.app.json`, `vite.config.ts`) updated or replaced as needed for JS
- **Subtle animation tweaks** -- slightly slower, more fluid transitions to match the yoga vibe

## Technical Details

### TypeScript to JavaScript Conversion
- Rename all `.tsx` components to `.jsx` and `.ts` utilities to `.js`
- Remove all type annotations, interfaces, and TypeScript-specific syntax
- Update `vite.config.ts` to `vite.config.js`
- Simplify tsconfig to allow JS files
- Update import paths where needed

### Files to Create/Modify
- All component files recreated as `.jsx`
- `src/index.css` -- new color variables and fonts
- `tailwind.config.js` -- updated font families and converted to JS
- `vite.config.js` -- converted from TS
- 8 new AI-generated images in `src/assets/`
- `index.html` -- updated title and meta tags

### Animations
- Keep framer-motion for scroll-triggered animations
- Use softer easing curves and slightly longer durations for a calmer feel

