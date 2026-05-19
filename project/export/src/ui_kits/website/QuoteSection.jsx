/* global React, SectionLabel */

function QuoteSection() {
  return (
    <section id="depoimentos" style={{
      background: 'var(--gb-beige-light)',
      padding: '96px 80px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Vozes</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--gb-font-display)',
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 300,
          color: 'var(--gb-fg)',
          lineHeight: 1.15,
          margin: '0 0 56px',
        }}>Quem <em style={{ color: 'var(--gb-olive)', fontStyle: 'italic' }}>voltou</em> conta</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }}>
          {/* Testimonial */}
          <div style={{ position: 'relative' }}>
            <div style={{
              fontFamily: 'var(--gb-font-display)',
              fontSize: 120, lineHeight: 0.7,
              color: 'var(--gb-beige-mid)',
              position: 'absolute', top: 8, left: 22,
              fontStyle: 'italic',
              userSelect: 'none',
              pointerEvents: 'none',
            }}>"</div>
            <div style={{
              borderLeft: '3px solid var(--gb-taupe)',
              borderRadius: '0 16px 16px 0',
              background: 'var(--gb-white)',
              padding: '40px 36px',
              height: '100%',
              boxSizing: 'border-box',
              position: 'relative',
            }}>
              <div style={{
                fontFamily: 'var(--gb-font-display)',
                fontSize: 22,
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--gb-fg)',
                lineHeight: 1.5,
                marginBottom: 20,
              }}>
                "Antes eu me perguntava: onde fui parar? Depois de 8 semanas com a Gi,
                entendi: não fui a lugar nenhum. Só precisava respirar para me encontrar de novo."
              </div>
              <div style={{
                fontFamily: 'var(--gb-font-body)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--gb-taupe-dark)',
              }}>— Ana Paula, 47 anos · aluna há 14 meses</div>
            </div>
          </div>

          {/* Gi's signature */}
          <div style={{
            background: 'var(--gb-olive)',
            borderRadius: 16,
            padding: '40px 36px',
            color: 'var(--gb-beige-light)',
          }}>
            <div style={{
              fontFamily: 'var(--gb-font-display)',
              fontSize: 40,
              color: 'rgba(216,232,202,0.4)',
              marginBottom: 4,
              fontStyle: 'italic',
              lineHeight: 0.7,
            }}>"</div>
            <div style={{
              fontFamily: 'var(--gb-font-display)',
              fontSize: 26,
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--gb-beige-light)',
              lineHeight: 1.4,
              marginBottom: 20,
            }}>
              Yoga não é para ficar flexível.<br/>É para você voltar para você mesma.
            </div>
            <div style={{
              fontFamily: 'var(--gb-font-script)',
              fontSize: 28,
              color: 'var(--gb-cana-pale)',
              fontWeight: 500,
              lineHeight: 1,
            }}>— Gi Borba</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.QuoteSection = QuoteSection;
