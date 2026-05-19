# Gi Borba Yoga — Design System

A visual identity system for **Gi Borba Yoga** — online yoga classes designed for women over 40 who carry full lives and little spare time. The brand's voice is unmistakable: yoga for women who lost themselves, not "yoga girls." Quiet luxury meets botanical clean. Earthy, refined, present.

> "Yoga não é para ficar flexível. É para você voltar para você mesma."
> — Gi Borba

---

## Sources consulted

This system was distilled from material the brand owner provided directly:

| Source | What it gave us |
|---|---|
| `uploads/Logo Marrom Sem Fundo.png` | Authoritative wordmark in taupe (#C4A882) with the leaf flourish — copied to `assets/logo-taupe.png` and tinted into `logo-white.png`, `logo-cream.png`, `logo-olive.png`. |
| `uploads/DESIGN.md` → `reference/DESIGN.md` | Complete `Guia de Identidade Visual` (v1.0, May 2026). The canonical reference for color, type, components, voice — everything in this system traces back to it. Open it in any HTML viewer for the full visual tour. |
| GitHub repo [`dullio/gi-borba`](https://github.com/dullio/gi-borba) | Currently a placeholder (`README.md` only, no code). When the production site exists, re-import to align components with the live codebase. |

If you have view access, those URLs let you cross-check anything that looks off. **Treat `reference/DESIGN.md` as the source of truth** if it disagrees with anything here.

---

## What's in this folder

```
.
├── README.md                    ← you are here
├── SKILL.md                     ← Agent-Skill manifest for Claude Code / agents
├── colors_and_type.css          ← All design tokens as CSS variables (--gb-*)
├── assets/                      ← Logo in 4 colorways; place future imagery here
│   ├── logo-taupe.png           ← Original — for cream / light backgrounds
│   ├── logo-cream.png           ← For brown-dark backgrounds
│   ├── logo-white.png           ← For olive / colored backgrounds
│   └── logo-olive.png           ← For two-tone compositions
├── reference/
│   └── DESIGN.md                ← Original full identity guide (canonical)
├── preview/                     ← Cards for the Design System tab
└── ui_kits/
    └── website/                 ← Recreation of the marketing site
        ├── README.md
        ├── index.html           ← Live demo: nav · hero · programa · trip · depoimentos · footer
        ├── Nav.jsx · Hero.jsx · ProgramCards.jsx · QuoteBlock.jsx · ContactForm.jsx · Footer.jsx · primitives.jsx
        └── …
```

There is no native app, no iOS/Android product, no docs portal in scope — the **product is a website (giborba.com.br)** that funnels women into either the weekly online program or the in-person *Inspire Trip* retreat.

---

## Content fundamentals — voice, tone, casing

The brand speaks **Portuguese (Brazil)**. Everything below is voice-level, not language-level — translate the rules, not the words.

### Who it speaks to
A 40+ woman who is tired, busy, and quietly searching for herself again. Not a beginner yogi shopper. Not a wellness influencer. She's the one rereading the page at midnight to see if Gi really *gets it*.

### Person & address
- **Direct second person — "você"** ("you"), never "vocês" or impersonal corporate "we."
- **Gi speaks as herself, in first person** — "eu estou ali para corrigir, para ouvir, para estar com você." That single-voice intimacy is the brand. No "our team," no "we believe."
- The reader is always *a woman*. Adjectives stay in the feminine ("perdida," "honesta," "sua"). Don't degender — this brand is unapologetically for women.

### Tone words to internalize
**Quiet · honest · grounded · invitational · slightly literary.** Never: hustle-y, "rise & shine," exclamation-stacked, emoji-rich, mystical-clichéd, or self-help-bro.

### Sentence shape
- Short. Often two-clause, with the second clause turning the first inside out.
  - *"Você não desapareceu. Você se perdeu."*
  - *"Yoga não é para ficar flexível. É para você voltar para você mesma."*
- Em-dashes and ellipses are welcome. Lists are not.
- The copy isn't afraid of italic emphasis — *"você mesma,"* *"de novo."* That's also why the type system has italic Cormorant doing the emotional work.

### Casing
- **Sentence case** for everything user-facing (headlines, buttons, fields). Never Title Case Like This.
- **ALL CAPS** is reserved for `eyebrow` / `label` micro-type at 10–11px with wide tracking (0.18em–0.28em). Examples: `YOGA PARA RESGATE DE IDENTIDADE`, `PROGRAMA PRINCIPAL`.
- Buttons take the ALL CAPS treatment at small size with tracking — *"AULA GRATUITA,"* *"SAIBA MAIS."*
- Pricing: `R$760/mês` — currency tight, slash separator, never "per month."

### Emoji & ornaments
- **No emoji in product copy.** The DESIGN.md guide has a handful (🌿 🪨 ✦) only inside its own internal reference cards, never as live UI. Treat that as a no.
- The brand's ornaments are *visual*, not glyphic: the leaf in the logo, hairline divider lines, the section-label trailing rule, a stray `✦` or `—` at most.
- Acceptable punctuation accents: `·` (middle dot, very common as separator), `—` em-dash, `→` for forward CTAs.

### Vocabulary the brand reaches for
*resgate, presença, identidade, voltar, respiro, silêncio, cura, real, honesta, acolhimento, raízes, natureza, mulher real.*

### Vocabulary the brand avoids
*namastê, jornada espiritual, energia, vibração, alinhar seus chakras, transformação 360°, jornei, descubra o seu eu interior, fluxo, manifestação.* Anything that smells like yoga-instagram.

### Tiny copy examples
- Hero pill: `Yoga para Resgate de Identidade`
- Hero H1: `Você não desapareceu. Você se perdeu.`
- Lead: `Yoga como ferramenta de resgate — não exercício, não espiritual.`
- CTA primary: `Reservar Aula Gratuita`
- CTA ghost: `Ver depoimentos`
- Form placeholder: `Pode ser honesta, estou aqui para isso`
- Final button: `Quero começar →`

---

## Visual foundations

### Color
A four-family palette: **cream/beige · taupe · olive · cana green** with **terracotta boho** as a rare accent and **brown** as the dark ink.

| Family | Role |
|---|---|
| Cream `#F7F2EB`, beige light `#EDE5D8` | Backgrounds. Cream is the base. Beige is the alternating section. **Never pure white.** |
| Taupe `#C4A882`, taupe-dark `#9A7F5F` | The logo color. Used for decoration, dividers, labels, secondary borders, subheads. |
| Olive `#757248`, olive-light `#969370` | **Action.** Primary CTA, active links, italic emphasis in H2. Hover state shifts toward `#6B4C32`. |
| Cana `#8EAB6E`, cana-pale `#D8E8CA` | Natural accent — secondary CTA, hover hint, soft tinted surfaces. |
| Boho `#C47A52` | Terracotta. Used *sparingly* for special moments (e.g. the Inspire Trip retreat CTA). |
| Brown-dark `#3E2D1C`, brown-mid `#6B4C32` | Body text and dark-mode sections (footer, "voz e tom"). |

The token names live in `colors_and_type.css` as `--gb-*`. Always reach for the semantic var (`--gb-bg`, `--gb-action`) over the raw color when possible.

### Typography
Three faces, three jobs:
- **Cormorant Garamond** (display, Light 300 / Regular 400, often *italic*). All H1–H4. The brand's emotional voice.
- **Jost** (body, Light 300 · Regular 400 · Medium 500). All paragraphs, labels, nav, buttons.
- **Dancing Script** (script). **Logo and brand-mark only.** Never for body, navigation, or buttons. May appear as a section accent (e.g. "Presença" / "Autenticidade" headings in the dark voz-e-tom section).

A signature move: one word in Cormorant italic next to a word in Cormorant Regular — *"Você não **desapareceu**."* — for warmth + structure in one line.

Type sizes are codified in `--gb-h1-size` … `--gb-eyebrow-size`. Eyebrows live at 10–11px with 0.18–0.28em tracking and uppercase.

### Spacing
Strict 8-point system. Tokens: `--gb-space-xs 4 / sm 8 / md 16 / lg 32 / xl 64 / 2xl 96`. Sections breathe big (64–96px vertical). Cards breathe inside (24–40px). Don't improvise off-system values.

### Corner radii
The brand is **never** square. The radii ladder:
- `4px` inputs, tiny tags
- `10px` form fields, chips
- `16px` cards, panels
- `20px` large cards, modals, mockup frames
- `40px` buttons, pills, hero badges
- `9999px` (or hand-drawn organic shapes like the hero portrait frame `160px 160px 120px 120px`)

### Shadows
Always brown-warm, never gray-blue. Soft and large rather than tight and dark. Tokens `--gb-shadow-xs … xl` plus `--gb-shadow-cta` (olive glow on primary hover) and `--gb-shadow-cta-cana` (green glow on cana). Hover lift = `translateY(-1px)` paired with the shadow upgrade.

### Borders
Hairline only. Either `1px solid var(--gb-border)` (#D9CEBB) for separators or `1.5px solid var(--gb-taupe)` for outlined buttons. Borders are **never** the loud part of a component.

### Backgrounds
- Solid cream/beige is the workhorse.
- Hero & special sections use a **diagonal three-stop gradient**: `linear-gradient(160deg, cream 0%, beige-light 50%, cana-pale 100%)`. Always at 160deg, always those three families.
- Radial accents (~12-18% opacity, olive or taupe) sit in the corners of the hero to add depth without "design."
- Dark sections (footer, voz-e-tom) go all the way to `--gb-brown-dark` with light beige text. There is no half-tone gray middle ground.
- **No** photo backgrounds with overlays. **No** noise textures. **No** blurry blobs.

### Imagery direction
Warm-natural, lightly desaturated "film" look — temperature 5500–6000K, brown shadow lift, beige/gold highlights preserved. Subjects: women 40+, natural light, leaves/stones/wood, moments of stillness. Avoid: stock yoga-girl Instagram poses, sterile white studio, cold blue/gray tints, mandala/lotus clip-art.

When a photo is missing, the system uses a soft beige↔cana gradient block with the placeholder caption in `Dancing Script` at low opacity. See `ui_kits/website/Hero.jsx`.

### Animation
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out-quad). Soft landing, no bounce, no overshoot.
- Default duration: **280ms** (also exposed as `--gb-dur-base`). Hover transitions: 200ms. Page-load fade-ups: 600ms staggered by 100ms.
- Entrance pattern: `fadeUp` — 20px translateY → 0, opacity 0 → 1.
- **No** parallax. **No** scroll-jacking. **No** typing-text effects. The brand whispers.

### Hover & press states
- **Buttons (primary):** background olive → brown-mid, `translateY(-1px)`, olive shadow.
- **Buttons (secondary outline):** border + text shift taupe → olive.
- **Buttons (ghost / link):** underline already present (1px taupe rule), shifts to olive on hover.
- **Cards:** `translateY(-4px)` + shadow upgrade `--gb-shadow-md` → `--gb-shadow-lg`. Never scale.
- **Press / active:** no shrink, no inset. Just hold the hover state. The brand is calm.
- **Focus rings:** olive border, not blue-default. `border-color: var(--gb-olive)` on inputs is the canonical pattern (see `.form-input` in DESIGN.md).

### Transparency & blur
Used in exactly two places:
1. **Sticky nav background** — `rgba(247, 242, 235, 0.92)` + `backdrop-filter: blur(12px)`. Keeps content readable as it scrolls under.
2. **Radial accent overlays** on hero gradients at 12–18% opacity.

Otherwise: surfaces are solid. No glassmorphism cards. No blurred photo overlays.

### Cards
- Background `--gb-white`, never pure white (`#FDFAF6`).
- Radius `20px` (or `16px` for tight grids).
- Border optional; hairline `--gb-border` if present.
- Shadow `--gb-shadow-md` resting → `--gb-shadow-lg` on hover.
- Overflow hidden when the card has a colored "visual" header.
- **No** colored left-border accent (this is a tropes-to-avoid pattern explicitly off-brand here).
- A common pattern: top half = gradient block with a `Dancing Script` watermark + small SVG icon, bottom half = white body with eyebrow → title → desc → price+CTA footer.

### Decorative motifs (drawn at small scale, in stroke)
The brand has four house-drawn SVG motifs (see DESIGN.md): **leaf** (the logo flourish, scaled down), **sacred circle** (concentric thin rings), **branch** (three asymmetric strokes), **dot-line divider** (─ • ─). They're hairline strokes (0.8–1.2px) in taupe / olive-light / cana. Reuse them; **do not invent new mystical icons.**

### Layout rules
- Maximum content width: `1200px`, centered.
- Section padding: `var(--gb-space-2xl) var(--gb-space-xl)` (96/64).
- Hero uses 2-column grid on desktop (text + portrait frame), single column under 900px.
- Footer always sits on `--gb-brown-dark` with 4-column grid (brand block / 2-3 link columns).
- Sticky elements: top nav only. Nothing else fixes. No floating chat bubbles, no "back to top," no cookie banners visible in the system.

---

## Iconography

This brand **deliberately uses very few icons.** It's not Material-icon-heavy; the visual mood comes from typography, color and breathing room.

### What lives in this system
- **`assets/logo-*.png`** — the wordmark, in four tints (taupe original / cream / white / olive). Includes the small olive-branch flourish off the "a" of *Borba*. This is the only "icon-like" asset the brand owns.
- **Four hand-drawn SVG motifs** — leaf, sacred circle, branch, dot-line divider. Inlined as SVG inside `ui_kits/website/primitives.jsx` (component: `<GBMotif kind="…" />`). Hairline strokes only.
- **Status indicators** — `✓` (used), `✕` (avoid), `◈` (edit/process) appear once in the photography card grid. They're Unicode glyphs, not icons.
- **Decorative glyphs** — `·`, `—`, `→`, `✦` as inline typographic ornaments.

### Functional icons (nav, programs, etc.)
When a real UI needs functional icons (calendar, play, arrow, whatsapp, instagram), this system points at **[Lucide](https://lucide.dev)** — `1.5px` stroke matches the brand's hairline aesthetic. Pull from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="calendar" style="width:20px;height:20px;color:var(--gb-taupe-dark)"></i>
<script>lucide.createIcons();</script>
```

**This is a substitution flag** — DESIGN.md does not specify an icon library. If the brand has a preferred set, swap Lucide for it. Default-stroke them in `--gb-taupe-dark` or `--gb-olive-light`, never solid-filled.

### Emoji
**Do not use emoji in product copy.** A few escape into internal reference material (🌿 🪨 ✦) but they are off-brand for live UI.

### When to draw an icon at all
Almost never. If you're considering an icon, first ask whether a small SVG motif (leaf / circle / branch) or a piece of micro-type (eyebrow label) would do the job better. The brand's most-used "icon" is **literal whitespace** — a 96px gap saying "breathe here."

---

## Quick start for a new design

1. Link the tokens: `<link rel="stylesheet" href="colors_and_type.css">`.
2. Reach for semantic variables: `background: var(--gb-bg-alt)`, `color: var(--gb-fg)`, `border-radius: var(--gb-radius-lg)`.
3. For type, just use plain h1/h2/h3/p — `colors_and_type.css` already styles them. Add `.gb-eyebrow` / `.gb-lead` / `.gb-script` utility classes for the rest.
4. Pull components from `ui_kits/website/` rather than re-implementing.
5. Headlines: lean into Cormorant italic + `<em>` for the emotional word. One per headline. Don't italicize everything.

---

## Caveats & substitutions to flag

- **Cormorant Garamond ships locally** from `fonts/CormorantGaramond-*.ttf` (10 weights/italics, brand-supplied). Jost and Dancing Script still load from Google Fonts CDN — confirm or swap if the brand owns desktop/web licenses for paid alternatives.
- **Lucide is a stand-in icon set.** Confirm or replace.
- **GitHub repo `dullio/gi-borba` is currently empty.** Once code lands there, the UI kit here should be cross-checked against actual component implementations (especially the booking flow, which we modeled as a single-field WhatsApp capture per DESIGN.md but which the real product may differ on).
- **No photography is included.** The system shows photo *placeholders* (soft cana/beige gradient frames with caption). Drop real photography into `assets/photography/` when available.

---

## Index — by file

- **Tokens & rules:** `colors_and_type.css`, this `README.md`
- **Source:** `reference/DESIGN.md` (the original 1700-line identity guide)
- **Brand assets:** `assets/logo-*.png`
- **Design system tab cards:** `preview/*.html`
- **Live UI kit:** `ui_kits/website/index.html` (open this to see everything composed)
- **Agent skill manifest:** `SKILL.md`
