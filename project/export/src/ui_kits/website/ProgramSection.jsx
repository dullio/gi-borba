/* global React, Button, SectionLabel, Pill */
const { useState } = React;

const PROGRAMS = [
  {
    id: 'online',
    tag: 'Programa Principal',
    title: 'Yoga Online Ao Vivo',
    desc: '4 aulas por semana, cada uma com tema de cura e identidade. Presença pessoal real — não gravação impessoal.',
    price: 'R$760', priceUnit: '/mês',
    visualGradient: 'linear-gradient(135deg, var(--gb-beige-light), var(--gb-beige-dark))',
    watermark: 'presença',
    cta: 'Reservar',
    ctaVariant: 'primary',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="16" r="8" stroke="#9A7F5F" strokeWidth="1.5" fill="none"/>
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#9A7F5F" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'inspire',
    tag: 'Retiro Imersivo',
    title: 'Inspire Trip',
    desc: 'Na natureza, com alimentação consciente, acroyoga e comunidade de mulheres. Transformação documentada.',
    price: 'Consulte vagas',
    visualGradient: 'linear-gradient(135deg, var(--gb-olive-light), var(--gb-olive))',
    watermark: 'resgate',
    cta: 'Ver datas',
    ctaVariant: 'secondary',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 24C8 15.163 15.163 8 24 8s16 7.163 16 16-7.163 16-16 16S8 32.837 8 24z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
        <path d="M24 16v16M16 24h16" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'avulsa',
    tag: 'Flexível',
    title: 'Aula Presencial Avulsa',
    desc: 'Para quem quer sentir a experiência antes de se comprometer. Correção de postura em tempo real.',
    price: 'R$260', priceUnit: '/aula',
    visualGradient: 'linear-gradient(135deg, var(--gb-cana-pale), var(--gb-cana))',
    watermark: 'aula avulsa',
    cta: 'Agendar',
    ctaVariant: 'boho',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 36L24 12l12 24" stroke="rgba(117,114,72,0.75)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.6 28h16.8" stroke="rgba(117,114,72,0.75)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function ProgramCard({ program, onSelect }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onSelect?.(program)}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        background: 'var(--gb-white)',
        boxShadow: hover ? 'var(--gb-shadow-lg)' : 'var(--gb-shadow-md)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <div style={{
        height: 200,
        background: program.visualGradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <span style={{
          fontFamily: 'var(--gb-font-script)',
          fontSize: 44,
          opacity: 0.32,
          color: 'var(--gb-white)',
          position: 'absolute',
          letterSpacing: '0.02em',
        }}>{program.watermark}</span>
        <div style={{ position: 'relative', zIndex: 1 }}>{program.icon}</div>
      </div>
      <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'var(--gb-font-body)',
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--gb-taupe)',
          marginBottom: 10,
        }}>{program.tag}</div>
        <div style={{
          fontFamily: 'var(--gb-font-display)',
          fontSize: 24,
          fontWeight: 400,
          color: 'var(--gb-fg)',
          lineHeight: 1.25,
          marginBottom: 12,
        }}>{program.title}</div>
        <div style={{
          fontFamily: 'var(--gb-font-body)',
          fontSize: 13,
          color: 'var(--gb-fg-body)',
          lineHeight: 1.7,
          flex: 1,
        }}>{program.desc}</div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          paddingTop: 18,
          borderTop: '1px solid var(--gb-border)',
        }}>
          <span style={{
            fontFamily: 'var(--gb-font-display)',
            fontSize: program.priceUnit ? 22 : 15,
            fontWeight: program.priceUnit ? 500 : 400,
            fontStyle: program.priceUnit ? 'normal' : 'italic',
            color: program.priceUnit ? 'var(--gb-olive)' : 'var(--gb-taupe-dark)',
            whiteSpace: 'nowrap',
          }}>
            {program.price}
            {program.priceUnit && <span style={{ fontSize: 12, fontWeight: 300, fontStyle: 'normal', color: 'var(--gb-fg-body)' }}>{program.priceUnit}</span>}
          </span>
          <Button variant={program.ctaVariant} size="sm">{program.cta}</Button>
        </div>
      </div>
    </div>
  );
}

function ProgramSection({ onReserve }) {
  return (
    <section id="programa" style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 80px',
    }}>
      <SectionLabel>Programas</SectionLabel>
      <h2 style={{
        fontFamily: 'var(--gb-font-display)',
        fontSize: 'clamp(36px, 4vw, 56px)',
        fontWeight: 300,
        color: 'var(--gb-fg)',
        lineHeight: 1.15,
        margin: '0 0 16px',
      }}>Três <em style={{ color: 'var(--gb-olive)', fontStyle: 'italic' }}>caminhos</em> para voltar</h2>
      <p style={{
        fontFamily: 'var(--gb-font-body)',
        fontSize: 15,
        fontWeight: 300,
        color: 'var(--gb-fg-body)',
        lineHeight: 1.8,
        maxWidth: 560,
        margin: '0 0 48px',
      }}>Online ao vivo, retiro imersivo na natureza, ou uma aula avulsa para sentir antes de decidir. Cada caminho começa pelo mesmo lugar — você.</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 28,
      }}>
        {PROGRAMS.map((p) => <ProgramCard key={p.id} program={p} onSelect={onReserve} />)}
      </div>
    </section>
  );
}

window.ProgramSection = ProgramSection;
window.PROGRAMS = PROGRAMS;
