# SuccessByCS — CS Revenue Accelerator

> Live marketing site for [SuccessByCS](https://successbycs.com) — fractional Customer Success leadership for SaaS founders and growth-stage teams across ANZ, APAC & globally.

**🌐 Live at [successbycs.com](https://successbycs.com)**

---

## What This Site Does

A conversion-focused single-page marketing site that routes visitors into one of three engagement paths based on their situation:

**🟢 Builder Path** — for Founders / CROs whose CS isn't protecting or growing revenue
- CS Lifecycle Audit (7-stage diagnosis)
- 90-Day Action Plan
- Fractional retainer tiers: Activate & Adopt · Retain & Renew · Full Lifecycle

**🔵 Steward Path** — for companies needing interim CS leadership cover
- Rapid team assessment within the first week
- Direct CS team management with weekly cadence
- Board-ready NRR/GRR reporting
- Transition handover to permanent hire

**🎓 Mentoring** — for newly promoted Heads of CS
- Strategic positioning & revenue ownership (NRR, GRR, expansion)
- Team leadership & exec communication
- Structured 90-day acceleration plan
- Fortnightly 1:1s + async support

---

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page (all sections) |
| `/privacy` | Privacy statement |
| `/terms` | Terms of service |
| `*` | 404 not found |

---

## Key Components

| Component | Purpose |
|---|---|
| `Navbar` | Fixed nav with scroll-aware blur + mobile hamburger menu |
| `Hero` | Animated headline, 3-CTA cluster, floating stat cards, social proof strip |
| `LifecycleVisual` | Interactive 7-stage CS Lifecycle — hover tooltips desktop, tap to expand mobile |
| `BuilderRoutingCard` | Problem-aware routing card with 6 diagnostic bullets |
| `BuilderSection` | Audit deliverables + 3 retainer tier cards (dark Builder theme) |
| `StewardSection` | Interim leadership offering — 3 value cards (dark Steward theme) |
| `MentoringSection` | 5-pillar mentoring framework + 3-step engagement structure |
| `ResultsSection` | 3 outcome metrics + 2 client testimonials |
| `HowItWorks` | Tabbed 3-step process (Builder vs Cover) |
| `AboutSection` | Practice overview + geographic reach |
| `RiskReversal` | No lock-in, no long-term contracts trust signal |
| `FooterCTA` | HubSpot Meetings embed + primary CTA |
| `Footer` | Brand wordmark + copyright + Privacy/Terms links |
| `WhatsAppWidget` | Floating WhatsApp button with pre-filled message |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vite](https://vitejs.dev) | Build tooling & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible component primitives (Radix UI) |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [TanStack Query](https://tanstack.com/query) | Data fetching infrastructure |
| [Vitest](https://vitest.dev) | Unit testing |
| [Lovable](https://lovable.dev) | AI-assisted development platform |

---

## Integrations

- **HubSpot Meetings** — booking embed in `FooterCTA.tsx`, direct link at `https://meetings-ap1.hubspot.com/christopher-sparshott`
- **WhatsApp** — floating widget with pre-filled message (`+64 21 574 696`)
- **LinkedIn Insight Tag** — analytics pixel in site footer

---

## Design System

Two visual themes reflect the two engagement paths:

| Token | Value | Used for |
|---|---|---|
| `--accent-builder` | `hsl(148 46% 33%)` | Builder/Founder path (green) |
| `--accent-steward` | `hsl(214 55% 40%)` | Steward/Interim path (blue) |
| `--bg-dark-builder` | `hsl(148 35% 10%)` | Builder section backgrounds |
| `--bg-dark-steward` | `hsl(218 42% 11%)` | Steward section backgrounds |

**Typography:** Playfair Display (headings) · DM Sans (body) · JetBrains Mono (labels/mono)

---

## Getting Started

### Prerequisites

- Node.js v18+ — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```bash
git clone https://github.com/successbycs/cs-revenue-accelerator.git
cd cs-revenue-accelerator
npm install
npm run dev
```

App runs at `http://localhost:5173`

### Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build → /dist
npm run preview  # Preview production build locally
npm run test     # Run unit tests (Vitest)
npm run lint     # Lint with ESLint
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/                   # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── LifecycleVisual.tsx
│   ├── BuilderRoutingCard.tsx
│   ├── BuilderSection.tsx
│   ├── StewardSection.tsx
│   ├── MentoringSection.tsx
│   ├── ResultsSection.tsx
│   ├── HowItWorks.tsx
│   ├── AboutSection.tsx
│   ├── RiskReversal.tsx
│   ├── FooterCTA.tsx
│   ├── Footer.tsx
│   └── WhatsAppWidget.tsx
├── pages/
│   ├── Index.tsx             # Main landing page
│   ├── Privacy.tsx
│   ├── Terms.tsx
│   └── NotFound.tsx
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── index.css                 # Design tokens + Tailwind base
└── App.tsx                   # Router + providers
```

---

## About

Built and maintained by **Chris Sparshott** — fractional CS leader with 15+ years experience helping SaaS founders retain revenue, reduce churn, and build scalable CS foundations.

📅 [Book a session](https://meetings-ap1.hubspot.com/christopher-sparshott)  
🌐 [successbycs.com](https://successbycs.com)  
💼 [LinkedIn](https://www.linkedin.com/in/chrissparshott/)  
💬 [WhatsApp](https://wa.me/6421574696)

---

## License

© Chris Sparshott Limited trading as SuccessByCS. All rights reserved.
