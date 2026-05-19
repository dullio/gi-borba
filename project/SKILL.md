---
name: gi-borba-design
description: Use this skill to generate well-branded interfaces and assets for Gi Borba Yoga (online yoga for women 40+), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

The brand is Brazilian, copy is in **Portuguese (pt-BR)** by default. The voice is quiet, honest, second-person feminine ("você"), and avoids yoga-Instagram clichés. Match the voice rules in README.md § Content fundamentals or the output will feel wrong.

Visual signature in three words: **cream · olive · italic-Cormorant**. Default to:
- Background `var(--gb-cream)` (`#F7F2EB`) — never white.
- One `<em>` of italic Cormorant Garamond in olive (`#757248`) per headline.
- Pill-shaped olive buttons for primary CTAs.
- Hairline taupe borders and warm-brown shadows. No gradients beyond the four documented ones.

Workflow:

1. **Always include `colors_and_type.css`** in any HTML output — it carries every token. Reach for the `--gb-*` CSS variables instead of hardcoding hex values.
2. **Logo:** copy from `assets/logo-{taupe|cream|white|olive}.png` based on background. Cream PNG sits on dark brown / olive; taupe original sits on cream / beige.
3. **Components:** read `ui_kits/website/` first. Its `primitives.jsx` (Button, Pill, Eyebrow, SectionLabel, HeroPill, Motif) and section components are pre-styled and on-brand. Copy them rather than re-implementing.
4. **Icons:** the brand uses very few. For the four house motifs (leaf · circle · branch · divider), use `<Motif kind="..."/>` from primitives. For functional icons, default to Lucide at 1.5px stroke in taupe-dark — but treat this as a substitution and flag it if the user has a preferred set.
5. **Content patterns:** sentence case for everything user-facing; ALL CAPS with 0.18–0.28em tracking only for eyebrow/label/button at 10–11px. No emoji in product copy. Acceptable typographic ornaments: `·` `—` `→`. Currency reads `R$760/mês`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Source of truth for any disagreement: `reference/DESIGN.md` (the original Guia de Identidade Visual v1.0).
