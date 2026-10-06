# IMIZI Training Club

> **Strength starts at the roots.**

IMIZI Training Club is an independent, portfolio-grade website for a strength and conditioning facility concept set in Kimihurura, Kigali, Rwanda. The brand identity is grounded in foundations, stability, consistency, and athletic longevity built from the ground up.

*This project is an independent frontend design and engineering showcase demonstrating clean architecture, strict accessibility standards, and deliberate typography.*

---

## Brand & Design System

- **Brand Name**: IMIZI Training Club (Short: IMIZI)
- **Tagline**: *Strength starts at the roots.*
- **Location Setting**: Kimihurura · Kigali, Rwanda
- **Aesthetic**: Dark athletic editorial, near-black foundation, warm bone typography, restrained iron-red accent, square geometry, and subtle structural grid lines.

### Color Palette
- **Brand Black**: `#0D0D0D` (Foundation background)
- **Brand Dark**: `#141414` (Surface sections)
- **Brand Card**: `#1B1B1B` (Structural containers)
- **Brand Border**: `#333333` (Dividers & structural strokes)
- **Brand Bone**: `#F4F1EA` (Primary display text & titles)
- **Brand Body**: `#B5B0A6` (High-contrast supporting paragraph text)
- **Brand Muted**: `#8E8B82` (Secondary captions & subtle metadata)
- **Brand Red**: `#B83A2E` (Restrained focal accent & interactive highlights)

### Typography
- **Display Headings**: [Oswald](https://fonts.google.com/specimen/Oswald) (weights 500 & 600) — condensed, disciplined, athletic impact.
- **Body & UI**: [Barlow](https://fonts.google.com/specimen/Barlow) (weights 400, 500, & 600) — legible, industrial, human grotesque.

---

## Route Architecture

| Route | Page | Purpose & Content |
|---|---|---|
| `/` | **Home** | Editorial hero, proof metrics strip, 3 core pillars (Floor, Standard, Culture), discipline preview, and trial booking CTA. |
| `/about` | **About** | The gym's foundational philosophy, 850m² floor specification grid, equipment highlights, and four floor conduct standards. |
| `/classes` | **Classes** | Five structured training disciplines with duration, intensity, progressive level tags, and complete Monday–Sunday timetable. |
| `/trainers` | **Coaches** | Dedicated roster of four certified coaches covering strength mechanics, work capacity, mobility, and beginner athletic integration. |
| `/pricing` | **Memberships** | Clear pricing in Rwandan Francs (RWF), Day Pass, Standard, and Performance Unlimited plans, plus an accessible FAQ accordion. |
| `/contact` | **Visit & Trial** | Facility location, operational floor hours, illustrative direct reach info, first-visit guide, and an accessible booking form. |
| `*` | **404 Not Found** | Custom off-the-floor error screen with swift navigation recovery. |

---

## Tech Stack

- **React 19** (`react`, `react-dom`)
- **Vite 6** (Fast HMR & modern bundling)
- **React Router 7** (`react-router-dom` client-side SPA routing)
- **Tailwind CSS 3** (Custom design tokens, accessible focus rings, and responsive utilities)
- **ESLint 9** (Rigorous React & JavaScript linting rules)

*Zero heavy animation frameworks or extraneous CSS libraries. Pure, optimized React and utility CSS.*

---

## Accessibility & Performance Features

- **Semantic HTML**: Landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), structured heading levels (`<h1>`–`<h3>`), and definition lists.
- **Form Accessibility**: Inputs include explicit `<label>` bindings, `aria-invalid`, and `aria-describedby` connected to error announcements.
- **Keyboard Navigation**: Universal high-contrast `:focus-visible` focus rings, Escape-key dismissal for the mobile navigation drawer, and focus restoration to the trigger button upon close.
- **Decorative Images**: Branded SVG and logo links use `alt=""` and `aria-hidden="true"` inside named links to eliminate redundant screen reader announcements.
- **Motion Preferences**: Respects `prefers-reduced-motion: reduce` across all transitions and smooth scrolls.
- **Portfolio Honesty**: The intake form features an in-browser validation and demonstration capture state with explicit notices that no private user data is transmitted or retained.

---

## Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/byishimwe/BlackIron-Gym.git

# Enter the project directory
cd BlackIron-Gym

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Creates an optimized static production bundle in `dist/`.

### Code Quality / Linting
```bash
npm run lint
```
Runs ESLint across all codebase files.
