/* global React, ContactForm, SectionLabel, Motif */

function ContactSection({ formRef }) {
  return (
    <section id="contato" ref={formRef} style={{
      padding: '96px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative motifs in corners */}
      <div style={{ position: 'absolute', top: 40, right: 60, opacity: 0.25 }}>
        <Motif kind="leaf" size={140} color="var(--gb-cana)"/>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 40, opacity: 0.18 }}>
        <Motif kind="circle" size={180} color="var(--gb-taupe)"/>
      </div>

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'center', position: 'relative',
      }}>
        <div>
          <SectionLabel>Aula gratuita</SectionLabel>
          <h2 style={{
            fontFamily: 'var(--gb-font-display)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 300,
            color: 'var(--gb-fg)',
            lineHeight: 1.15,
            margin: '0 0 24px',
          }}>
            O primeiro <em style={{ color: 'var(--gb-olive)', fontStyle: 'italic' }}>passo</em><br/>é gentil.
          </h2>
          <p style={{
            fontFamily: 'var(--gb-font-body)',
            fontSize: 16, fontWeight: 300,
            color: 'var(--gb-fg-body)',
            lineHeight: 1.8, maxWidth: 440,
            margin: '0 0 28px',
          }}>
            Uma aula. Sem pacote, sem fórmula, sem cobrança. Só você experimentando
            como é uma aula comigo — para decidir, depois, com tranquilidade.
          </p>
          <div style={{
            fontFamily: 'var(--gb-font-script)',
            fontSize: 36, fontWeight: 500,
            color: 'var(--gb-taupe)',
            lineHeight: 1.1,
          }}>te espero.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ContactForm inline />
        </div>
      </div>
    </section>
  );
}

window.ContactSection = ContactSection;
