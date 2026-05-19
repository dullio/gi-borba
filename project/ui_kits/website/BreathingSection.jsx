/* global React */
// "Respiro" — narrow section between two big sections.
// One short phrase in italic Cormorant, optionally framed by motif marks.
// Used to give the eye rest and pace the brand's "quiet" voice.

function BreathingSection({ children, tone = 'cream', motifs = true, attribution }) {
  const tones = {
    cream:  { bg: 'var(--gb-cream)',       fg: 'var(--gb-fg)',          accent: 'var(--gb-taupe)',      sub: 'var(--gb-taupe-dark)' },
    beige:  { bg: 'var(--gb-beige-light)', fg: 'var(--gb-fg)',          accent: 'var(--gb-olive)',      sub: 'var(--gb-taupe-dark)' },
    olive:  { bg: 'var(--gb-olive)',       fg: 'var(--gb-beige-light)', accent: 'var(--gb-cana-pale)',  sub: 'var(--gb-cana-pale)'   },
    dark:   { bg: 'var(--gb-brown-dark)',  fg: 'var(--gb-beige-light)', accent: 'var(--gb-taupe)',      sub: 'var(--gb-taupe)'       },
  };
  const t = tones[tone] || tones.cream;

  return (
    <section style={{
      background: t.bg,
      padding: '72px 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {motifs && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 28,
          color: t.accent,
          opacity: 0.7,
        }}>
          <span style={{ width: 48, height: 1, background: 'currentColor', opacity: 0.5 }}/>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="7" cy="7" r="2.5" fill="currentColor"/>
          </svg>
          <span style={{ width: 48, height: 1, background: 'currentColor', opacity: 0.5 }}/>
        </div>
      )}
      <div style={{
        fontFamily: 'var(--gb-font-display)',
        fontSize: 'clamp(26px, 3vw, 38px)',
        fontWeight: 300,
        fontStyle: 'italic',
        lineHeight: 1.35,
        color: t.fg,
        maxWidth: 760,
        margin: '0 auto',
        textWrap: 'balance',
      }}>{children}</div>
      {attribution && (
        <div style={{
          fontFamily: 'var(--gb-font-body)',
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: t.sub,
          marginTop: 24,
        }}>{attribution}</div>
      )}
    </section>
  );
}

window.BreathingSection = BreathingSection;
