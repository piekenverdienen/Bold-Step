# The Groom Code

Luxury wedding lifestyle platform — a definitive style manual for the modern groom, featuring Aurélien smart luxury footwear.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 6 + Tailwind CSS v4
- **Routing:** React Router v7 (/:lang/ prefix for bilingual EN/DE)
- **Animations:** Motion (Framer Motion compatible)
- **Icons:** Lucide React
- **AI:** Google Gemini API (@google/genai) for suit analysis
- **Server:** Express + better-sqlite3 (SSR support)

## Commands

- `npm run dev` — Start dev server (via tsx server.ts)
- `npm run build` — Production build (vite build)
- `npm run preview` — Preview production build
- `npm run lint` — Type check (tsc --noEmit)
- `npm run clean` — Remove dist/

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Router + LanguageWrapper context
├── index.css             # Tailwind globals + design tokens
├── constants.ts          # All translations, images, products (EN/DE)
├── components/
│   ├── Navbar.tsx         # Fixed nav, mobile menu, language toggle
│   ├── Footer.tsx         # Footer with links
│   ├── Quiz.tsx           # "Sole Mate" 4-step interactive quiz
│   ├── Blog.tsx           # Blog preview grid (home page)
│   ├── EditorialSections.tsx  # "The Proposal" & "The Planning"
│   ├── AIAssistant.tsx    # AI suit analysis (Gemini)
│   └── StyleGuide.tsx     # Style archetypes section
└── pages/
    ├── Home.tsx           # Landing page
    ├── Collection.tsx     # Product showcase
    ├── Journal.tsx        # Blog index
    ├── BlogPost.tsx       # Individual blog post (markdown)
    ├── SuitMatcher.tsx    # Color picker → loafer recommendations
    ├── Lookbook.tsx       # Visual style lookbook
    ├── About.tsx          # Founder story
    ├── Impressum.tsx      # Legal/Imprint
    └── NotFound.tsx       # 404 page
```

## Key Architecture Decisions

- **Bilingual:** All content lives in `constants.ts` as a `translations` object keyed by `"en" | "de"`. Routes use `/:lang/` prefix.
- **Path alias:** `@/*` maps to project root (see tsconfig.json paths).
- **Images:** Hosted on Google Drive, referenced as thumbnail URLs in `constants.ts`.
- **Products:** Link to external Aurélien store (aurelien.com).
- **Design tokens:** Off-white (#F9F8F6), black (#141414), gold (#D4AF37), champagne (#F7E7CE). Fonts: Cormorant Garamond (serif headings) + Inter (sans body).

## Environment Variables

See `.env.example` — requires `GEMINI_API_KEY` for AI stylist feature.
