# IMIZI Training Club

> **Strength starts at the roots.**

A responsive multi-page website concept for **IMIZI Training Club**, a Kigali strength and conditioning brand, built with React, Vite, Tailwind CSS, and React Router.

IMIZI is an independent frontend design and engineering portfolio project set in Kimihurura, Kigali, Rwanda. The concept is built around disciplined training, strong foundations, coach-led structure, accessibility, and a restrained athletic editorial identity.

## Repository

- **Repository**: `byishimwe/imizi-training-club`
- **Project Type**: Responsive multi-page business website concept
- **Location Setting**: Kimihurura · Kigali, Rwanda
- **Topics**: `react`, `vite`, `tailwindcss`, `react-router`, `responsive-design`, `web-design`, `frontend-development`, `accessibility`, `fitness`, `gym-website`, `portfolio-project`

---

## Brand & Design System

- **Brand Name**: IMIZI Training Club
- **Short Form**: IMIZI
- **Tagline**: *Strength starts at the roots.*
- **Aesthetic**: Dark athletic editorial, near-black foundation, warm bone typography, restrained iron-red accent, square geometry, and subtle structural grid lines.

### Color Palette

- **Brand Black**: `#0D0D0D` — foundation background
- **Brand Dark**: `#141414` — surface sections
- **Brand Card**: `#1B1B1B` — structural containers
- **Brand Border**: `#333333` — dividers and structural strokes
- **Brand Bone**: `#F4F1EA` — primary display text and titles
- **Brand Body**: `#B5B0A6` — supporting paragraph text
- **Brand Muted**: `#8E8B82` — secondary captions and subtle metadata
- **Brand Red**: `#B83A2E` — focal accent and interactive highlights

### Typography

- **Display Headings**: [Oswald](https://fonts.google.com/specimen/Oswald) — weights 500 and 600
- **Body & UI**: [Barlow](https://fonts.google.com/specimen/Barlow) — weights 400, 500, and 600

---

## Route Architecture

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Editorial hero, proof strip, core training pillars, featured disciplines, and trial inquiry CTA. |
| `/about` | **About** | Training philosophy, facility specification, equipment highlights, and floor standards. |
| `/classes` | **Classes** | Five structured training disciplines and a complete Monday–Sunday interactive timetable. |
| `/trainers` | **Coaches** | Four fictional coach profiles covering strength, conditioning, mobility, and group training. |
| `/pricing` | **Memberships** | Illustrative RWF pricing for Day Pass, Standard, and Performance Unlimited plans, plus an accessible FAQ. |
| `/contact` | **Visit & Trial** | Illustrative location and contact details, first-visit information, and an accessible demo inquiry form. |
| `*` | **404 Not Found** | Custom fallback route with navigation recovery. |

---

## Tech Stack

- **React 19**
- **Vite 6**
- **React Router 7**
- **Tailwind CSS 3**
- **ESLint 9**

The project intentionally avoids heavy animation or UI frameworks, keeping the implementation focused on React, responsive layout, typography, accessibility, and interaction quality.

---

## Highlights

- Responsive multi-page architecture
- Reusable design-system components
- Interactive seven-day class timetable
- Membership and pricing presentation in RWF
- Accessible inquiry form validation with honest demo states
- Responsive mobile navigation
- Route-aware document titles and custom 404 handling
- `prefers-reduced-motion` support
- Portfolio-safe fictional business details
- Deliberate Oswald + Barlow typography system

---

## Accessibility & Interaction

- Semantic page landmarks and structured heading hierarchy
- Explicit form labels with `aria-invalid` and `aria-describedby` error relationships
- Visible high-contrast `:focus-visible` states
- Escape-key dismissal and focus restoration for mobile navigation
- Decorative logo imagery hidden from redundant screen-reader announcement
- Reduced-motion support across transitions and smooth scrolling
- Demo form behavior that does not transmit or persist user submissions

---

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/byishimwe/imizi-training-club.git
cd imizi-training-club
npm install
```

### Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## Portfolio Note

IMIZI Training Club is a fictional business concept created for portfolio presentation. The brand, coaches, memberships, pricing, contact information, operating details, and form interactions are illustrative and do not represent a real operating gym.