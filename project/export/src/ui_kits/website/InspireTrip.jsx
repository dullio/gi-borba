/* global React, Button, SectionLabel, Motif, Pill */

function InspireTrip({ onCTA }) {
  const features = [
    'Alimentação consciente · vegana opcional',
    'Acroyoga e prática em dupla',
    'Comunidade de mulheres 40+',
    'Tema semanal de cura e identidade',
  ];
  return (
    <section id="inspire" style={{
      background: 'var(--gb-brown-dark)',
      color: 'var(--gb-beige-light)',
      padding: '96px 80px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--gb-font-body)',
            fontSize: 10, fontWeight: 500,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--gb-taupe)',
            display: 'flex', alignItems: 'center', gap: 16,
            marginBottom: 16,
          }}>
            Retiro Imersivo
            <span style={{ flex: 1, height: 1, background: 'rgba(196,168,130,0.3)', maxWidth: 60 }}/>
          </div>
          <h2 style={{
            fontFamily: 'var(--gb-font-display)',
            fontSize: 'clamp(40px, 4.5vw, 64px)',
            fontWeight: 300,
            color: 'var(--gb-beige-light)',
            lineHeight: 1.1,
            margin: '0 0 24px',
          }}>
            <em style={{ color: 'var(--gb-cana-pale)', fontStyle: 'italic' }}>Inspire Trip</em>
            <br/>na natureza
          </h2>
          <p style={{
            fontFamily: 'var(--gb-font-body)',
            fontSize: 16, fontWeight: 300,
            color: 'var(--gb-beige-mid)',
            lineHeight: 1.8,
            margin: '0 0 32px',
            maxWidth: 460,
          }}>
            Quatro dias para sair do automático. Yoga ao amanhecer, comida que cura,
            conversas que não acontecem em grupo de WhatsApp. Você volta diferente —
            ou volta pela primeira vez.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px' }}>
            {features.map((f) => (
              <li key={f} style={{
                fontFamily: 'var(--gb-font-body)',
                fontSize: 14, fontWeight: 300,
                color: 'var(--gb-beige-mid)',
                padding: '10px 0',
                borderBottom: '1px solid rgba(201,185,154,0.12)',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--gb-cana)', flexShrink: 0,
                }}/>
                {f}
              </li>
            ))}
          </ul>
          <Button variant="boho" onClick={onCTA}>Ver próximas datas</Button>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {/* Placeholder image frame — vertical natural arch */}
          <div style={{
            width: 360, height: 460,
            borderRadius: '180px 180px 24px 24px',
            background: 'linear-gradient(160deg, var(--gb-olive-light) 0%, var(--gb-olive) 60%, var(--gb-brown-mid) 100%)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--gb-shadow-xl)',
          }}>
            {/* radial light */}
            <div style={{
              position: 'absolute', top: -60, left: '50%',
              transform: 'translateX(-50%)',
              width: 240, height: 240,
              background: 'radial-gradient(circle, rgba(255,250,238,0.4), transparent 60%)',
            }}/>
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.8)',
            }}>
              <Motif kind="branch" size={96} color="rgba(253,250,246,0.55)"/>
              <div style={{
                fontFamily: 'var(--gb-font-script)',
                fontSize: 36, fontWeight: 500,
                marginTop: 24,
              }}>respiro coletivo</div>
              <div style={{
                fontFamily: 'var(--gb-font-body)',
                fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)', marginTop: 8,
              }}>— foto do retiro —</div>
            </div>
          </div>
          {/* Floating pill */}
          <div style={{
            position: 'absolute', top: 40, right: 8,
            background: 'var(--gb-cream)', color: 'var(--gb-brown-dark)',
            padding: '14px 22px',
            borderRadius: 60,
            boxShadow: 'var(--gb-shadow-lg)',
            display: 'flex', flexDirection: 'column', gap: 2,
            whiteSpace: 'nowrap',
          }}>
            <div style={{ fontFamily: 'var(--gb-font-body)', fontSize: 9, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gb-taupe)', whiteSpace: 'nowrap' }}>Próxima data</div>
            <div style={{ fontFamily: 'var(--gb-font-display)', fontSize: 20, fontWeight: 500, fontStyle: 'italic', color: 'var(--gb-olive)', whiteSpace: 'nowrap' }}>Set · 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.InspireTrip = InspireTrip;
