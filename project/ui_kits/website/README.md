# Website UI Kit · Gi Borba Yoga

A hi-fidelity click-through recreation of **giborba.com.br** — the brand's marketing site funneling toward the free first class. Modeled directly from `reference/DESIGN.md` (Guia de Identidade Visual v1.0). The production codebase is not yet published (`dullio/gi-borba` is currently a placeholder), so this kit is the visual source of truth until that lands.

## Open

`index.html` — boots the whole composition into a single document. Click anywhere a CTA exists ("Aula Gratuita", "Reservar", "Quero começar →") to open the modal form. The page scrolls smoothly between sections and the nav tracks the active section.

## Files

| File | Purpose |
|---|---|
| `index.html` | Root document. Loads React + Babel + all component scripts and renders `<App/>`. |
| `primitives.jsx` | Shared atoms: `Button`, `Pill`, `Eyebrow`, `SectionLabel`, `HeroPill`, `Motif`, `DecoLine`. |
| `Nav.jsx` | Sticky top nav · brand script · 5 link items · primary CTA. Backdrop-blur over a 92% cream. |
| `Hero.jsx` | Diagonal cream→cana gradient · arched portrait placeholder · italic Cormorant H1 with one olive accent word. |
| `StatsBar.jsx` | Four numbers in italic display (100% · 15+ · 4× · 7+). White slab between hero and programa. |
| `ProgramSection.jsx` | Three program cards (Online · Inspire Trip · Aula Avulsa). Each: gradient header w/ script watermark, body, price, CTA. |
| `InspireTrip.jsx` | Dark brown section · 2-col with feature list + arched portrait placeholder + floating "next date" pill. |
| `QuoteSection.jsx` | Beige section · split between student testimonial (taupe left rule) and Gi's signature (olive block w/ script signoff). |
| `ContactForm.jsx` | The form itself, used twice: inline in `ContactSection`, modal triggered by every primary CTA. Submitting fades to a thank-you message. |
| `ContactSection.jsx` | Inline-form section with motifs in the corners and an invitation copy block. |
| `Footer.jsx` | Brown-dark · 4-col · logo + 3 link columns + script signoff. |

## What was simplified (vs. a real production site)

- **No real photography.** Placeholder gradient frames stand in everywhere a photo should go. Replace them with the brand's own film-look 5500–6000K imagery; see `README.md` § Visual Foundations for the direction.
- **No "Sobre" page.** The brand needs a teacher-story page — Gi's training, philosophy, why-women-40+ — but DESIGN.md doesn't sketch one, so it's omitted rather than invented. The Sobre nav item scrolls to *Depoimentos* as a placeholder.
- **Form submission is local-state-only.** No backend, no WhatsApp Cloud API. The thank-you state mimics the intended flow.
- **No mobile redesign.** Components were laid out at 1200–1280px. Below that they reflow but were not optimized; revisit if mobile is a priority.

## How to extend

1. New section? Follow the `Section + SectionLabel + h2 + lead p + content` pattern. Wrap content in `max-width: 1200; margin: 0 auto`. Pad `96px 80px`.
2. New CTA on any color? Use `<Button variant="primary|secondary|boho|warm|ghost|dark" />` — never roll a new button style.
3. Headlines: always `<h2>` in Cormorant, one `<em>` per line, that one `<em>` colored olive. Don't italicize the whole line.
4. Don't pull in extra colors — the four families + brown ink are deliberately the whole palette. If you need a new accent, ask whether `boho` (`#C47A52`) can do the job first.
