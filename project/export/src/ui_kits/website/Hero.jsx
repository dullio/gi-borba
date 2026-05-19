/* global React, Button, HeroPill */

function Hero({ onPrimary, onSecondary }) {
  return (
    <section id="inicio" style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: 680,
      display: 'flex',
      alignItems: 'center',
      padding: '120px 80px 100px',
      color: 'var(--gb-beige-light)',

      /* Layer 1 (bottom): photo. Placeholder from Unsplash — Maria Orlova,
         woman in warm natural light. Swap for `url('../../assets/photography/hero.jpg')`
         when the real Gi photography arrives.
         Two dark overlays on top guarantee text legibility regardless of photo. */
      backgroundImage:
        // Linear gradient on top: opaque-left → transparent-right, for text legibility
        'linear-gradient(95deg, rgba(28,18,8,0.78) 0%, rgba(28,18,8,0.55) 38%, rgba(28,18,8,0.18) 70%, rgba(28,18,8,0) 100%), ' +
        // Bottom vignette to anchor the page break
        'linear-gradient(180deg, transparent 55%, rgba(28,18,8,0.55) 100%), ' +
        // The actual photo
        "url('" + window.__resources.heroPhoto + "')",
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Warm color-grade overlay on top of the photo for brand alignment.
          Mix-blend-multiply tints any photo into the cream/olive register. */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(196,168,130,0.25) 0%, transparent 70%)',
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }}/>

      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 640 }}>
        <div style={{ marginBottom: 28 }}>
          {/* Light variant of the hero pill, for dark backgrounds */}
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--gb-font-body)',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gb-beige-light)',
            border: '1px solid rgba(245, 238, 226, 0.45)',
            background: 'rgba(28,18,8,0.18)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '6px 20px',
            borderRadius: 40,
          }}>Yoga para Resgate de Identidade</div>
        </div>

        <h1 style={{
          fontFamily: 'var(--gb-font-display)',
          fontSize: 'clamp(52px, 6.5vw, 88px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--gb-beige-light)',
          lineHeight: 1.02,
          margin: '0 0 22px',
          letterSpacing: '-0.005em',
          textShadow: '0 2px 24px rgba(28,18,8,0.4)',
        }}>
          Você não<br/>desapareceu.<br/>
          <span style={{
            fontStyle: 'normal',
            fontWeight: 500,
            color: 'var(--gb-cana-pale)',
          }}>Você se perdeu.</span>
        </h1>

        <p style={{
          fontFamily: 'var(--gb-font-body)',
          fontSize: 16,
          fontWeight: 300,
          color: 'rgba(245, 238, 226, 0.88)',
          lineHeight: 1.8,
          marginBottom: 40,
          maxWidth: 460,
          textShadow: '0 1px 16px rgba(28,18,8,0.5)',
        }}>
          Yoga como ferramenta de resgate — não exercício, não espiritual.
          Presença compartilhada, aula ao vivo, uma mulher que entende sua dor
          porque viveu a mesma.
        </p>

        <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={onPrimary}>Reservar Aula Gratuita</Button>
          <Button variant="ghost" onClick={onSecondary} style={{
            color: 'var(--gb-beige-light)',
            borderBottomColor: 'rgba(245,238,226,0.5)',
          }}>Ver depoimentos</Button>
        </div>
      </div>

      {/* Photo-credit pill, bottom-right — flags this as a placeholder */}
      <div style={{
        position: 'absolute',
        right: 32, bottom: 32,
        zIndex: 2,
        fontFamily: 'var(--gb-font-body)',
        fontSize: 10,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(245,238,226,0.6)',
        background: 'rgba(28,18,8,0.35)',
        padding: '6px 14px',
        borderRadius: 40,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}>foto placeholder · Unsplash</div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute',
        bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        color: 'rgba(245,238,226,0.55)',
      }}>
        <span style={{ fontFamily: 'var(--gb-font-body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase' }}>respira</span>
        <span style={{ width: 1, height: 32, background: 'currentColor', opacity: 0.6 }}></span>
      </div>
    </section>
  );
}

window.Hero = Hero;
