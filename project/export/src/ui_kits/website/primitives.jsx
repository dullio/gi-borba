/* global React */
// Gi Borba UI Kit · primitives
// Buttons, Pills, Motif, Eyebrow, SectionLabel — all share the same brand vocabulary.
// All components export to window at the bottom for cross-file consumption.

const { useState } = React;

// ─── Button ──────────────────────────────────────────────────
function Button({ variant = 'primary', size = 'md', children, onClick, type = 'button', as = 'button', href, style: extraStyle, ...rest }) {
  const base = {
    fontFamily: 'var(--gb-font-body)',
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 40,
    transition: 'all 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { fontSize: 10, padding: '10px 22px' },
    md: { fontSize: 11, padding: '14px 32px' },
    lg: { fontSize: 12, padding: '16px 38px' },
  };
  const variants = {
    primary:   { background: 'var(--gb-olive)', color: 'var(--gb-white)' },
    secondary: { background: 'transparent', border: '1.5px solid var(--gb-taupe)', color: 'var(--gb-fg)' },
    boho:      { background: 'var(--gb-cana)', color: 'var(--gb-white)' },
    warm:      { background: 'var(--gb-taupe)', color: 'var(--gb-white)' },
    ghost:     { background: 'transparent', color: 'var(--gb-fg-body)', padding: '14px 0', borderRadius: 0, borderBottom: '1px solid var(--gb-taupe)' },
    dark:      { background: 'var(--gb-brown-dark)', color: 'var(--gb-beige-light)' },
  };
  const [hover, setHover] = useState(false);
  const hoverShift = {
    primary:   hover ? { background: 'var(--gb-brown-mid)', transform: 'translateY(-1px)', boxShadow: 'var(--gb-shadow-cta)' } : {},
    secondary: hover ? { borderColor: 'var(--gb-olive)', color: 'var(--gb-olive)' } : {},
    boho:      hover ? { background: 'var(--gb-olive)', transform: 'translateY(-1px)', boxShadow: 'var(--gb-shadow-cta-cana)' } : {},
    warm:      hover ? { background: 'var(--gb-taupe-dark)' } : {},
    ghost:     hover ? { color: 'var(--gb-olive)', borderColor: 'var(--gb-olive)' } : {},
    dark:      hover ? { background: 'var(--gb-brown-mid)' } : {},
  };
  const style = { ...base, ...sizes[size], ...variants[variant], ...hoverShift[variant], ...extraStyle };
  const handlers = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick };
  if (as === 'a') {
    return <a href={href} style={style} {...handlers} {...rest}>{children}</a>;
  }
  return <button type={type} style={style} {...handlers} {...rest}>{children}</button>;
}

// ─── Pill / Badge ────────────────────────────────────────────
function Pill({ variant = 'taupe', children, style }) {
  const variants = {
    olive: { background: 'var(--gb-olive)', color: 'var(--gb-white)' },
    cana:  { background: 'var(--gb-cana-pale)', color: 'var(--gb-olive)', border: '1px solid var(--gb-cana-light)' },
    taupe: { background: 'transparent', border: '1px solid var(--gb-taupe)', color: 'var(--gb-taupe-dark)' },
    cream: { background: 'var(--gb-beige-light)', color: 'var(--gb-brown-mid)' },
    dark:  { background: 'var(--gb-brown-dark)', color: 'var(--gb-beige-light)' },
  };
  return (
    <span style={{
      fontFamily: 'var(--gb-font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '6px 16px',
      borderRadius: 40,
      display: 'inline-block',
      ...variants[variant],
      ...style,
    }}>{children}</span>
  );
}

// ─── Eyebrow ─────────────────────────────────────────────────
function Eyebrow({ children, color = 'var(--gb-fg-decor)', style }) {
  return (
    <div style={{
      fontFamily: 'var(--gb-font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color,
      ...style,
    }}>{children}</div>
  );
}

// ─── Section label (eyebrow with trailing rule) ──────────────
function SectionLabel({ children, style }) {
  return (
    <div style={{
      fontFamily: 'var(--gb-font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--gb-fg-decor)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 16,
      ...style,
    }}>
      {children}
      <span style={{ flex: 1, height: 1, background: 'var(--gb-border)', maxWidth: 60 }}></span>
    </div>
  );
}

// ─── Hero pill (outlined small caps) ─────────────────────────
function HeroPill({ children }) {
  return (
    <div style={{
      display: 'inline-block',
      fontFamily: 'var(--gb-font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--gb-taupe-dark)',
      border: '1px solid var(--gb-taupe)',
      padding: '6px 20px',
      borderRadius: 40,
    }}>{children}</div>
  );
}

// ─── Motifs (hairline SVGs) ──────────────────────────────────
function Motif({ kind = 'leaf', size = 60, color }) {
  const stroke = color || 'currentColor';
  const props = { width: size, height: size, viewBox: '0 0 80 80', fill: 'none' };
  if (kind === 'leaf') return (
    <svg {...props}>
      <path d="M22 66 Q27 56 33 48" stroke={stroke} strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M33 48 C 28 36, 38 18, 60 14 C 57 32, 50 52, 33 48 Z" stroke={stroke} strokeWidth="1.2" fill={stroke} fillOpacity="0.1"/>
      <path d="M33 48 Q 45 32 58 17" stroke={stroke} strokeWidth="0.6" fill="none" opacity="0.7"/>
    </svg>
  );
  if (kind === 'circle') return (
    <svg {...props}>
      <circle cx="40" cy="40" r="28" stroke={stroke} strokeWidth="1" fill="none"/>
      <circle cx="40" cy="40" r="20" stroke={stroke} strokeWidth="0.6" fill="none" opacity="0.5"/>
      <circle cx="40" cy="40" r="12" stroke={stroke} strokeWidth="0.4" fill="none" opacity="0.3"/>
      <circle cx="40" cy="40" r="3" fill={stroke}/>
    </svg>
  );
  if (kind === 'branch') return (
    <svg {...props}>
      <line x1="40" y1="10" x2="40" y2="70" stroke={stroke} strokeWidth="0.8" opacity="0.6"/>
      <path d="M24 28 Q32 20 40 26 Q48 20 56 28" stroke={stroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M22 38 Q31 28 40 36 Q49 28 58 38" stroke={stroke} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M26 50 Q33 40 40 46 Q47 40 54 50" stroke={stroke} strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
  if (kind === 'divider') return (
    <svg {...props}>
      <line x1="6" y1="40" x2="32" y2="40" stroke={stroke} strokeWidth="1" opacity="0.5"/>
      <circle cx="40" cy="40" r="5" fill={stroke}/>
      <line x1="48" y1="40" x2="74" y2="40" stroke={stroke} strokeWidth="1" opacity="0.5"/>
    </svg>
  );
  return null;
}

// Decorative vertical line — used between hero and section
function DecoLine({ height = 60, style }) {
  return <div style={{
    width: 1,
    height,
    background: 'linear-gradient(to bottom, transparent, var(--gb-taupe), transparent)',
    margin: '32px auto',
    ...style,
  }}/>;
}

Object.assign(window, { Button, Pill, Eyebrow, SectionLabel, HeroPill, Motif, DecoLine });
