/* global React */

function Footer() {
  const cols = [
    {
      h: 'Programa',
      links: ['Yoga Online', 'Aula Presencial', 'Inspire Trip', 'Acroyoga'],
    },
    {
      h: 'Sobre',
      links: ['Quem é a Gi', 'Formações', 'Depoimentos', 'Contato'],
    },
    {
      h: 'Conecte',
      links: ['@giborbayoga', 'WhatsApp', 'Newsletter'],
    },
  ];
  return (
    <footer style={{
      background: 'var(--gb-brown-dark)',
      padding: '72px 80px 48px',
      color: 'var(--gb-beige-mid)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 48,
      }}>
        <div>
          <img
            src="../../assets/logo-cream.png"
            alt="Gi Borba Yoga"
            style={{ height: 56, width: 'auto', marginBottom: 18 }}
          />
          <p style={{
            fontFamily: 'var(--gb-font-body)',
            fontSize: 13, fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(201,185,154,0.7)',
            maxWidth: 280,
            margin: 0,
          }}>
            Yoga para mulher que se perdeu.<br/>
            Resgate pessoal — não exercício.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.h}>
            <div style={{
              fontFamily: 'var(--gb-font-body)',
              fontSize: 10, fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--gb-taupe)', marginBottom: 18,
            }}>{col.h}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {col.links.map((link) => (
                <li key={link} style={{
                  fontFamily: 'var(--gb-font-body)',
                  fontSize: 13, fontWeight: 300,
                  color: 'rgba(201,185,154,0.78)',
                  marginBottom: 10,
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gb-cana-pale)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(201,185,154,0.78)'}
                >{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1200,
        margin: '56px auto 0',
        paddingTop: 28,
        borderTop: '1px solid rgba(201,185,154,0.15)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--gb-font-body)',
        fontSize: 11,
        color: 'rgba(201,185,154,0.5)',
        letterSpacing: '0.08em',
      }}>
        <div>© 2026 Gi Borba Yoga · Todos os direitos reservados</div>
        <div style={{ fontFamily: 'var(--gb-font-script)', fontSize: 18, color: 'var(--gb-taupe)' }}>— respira —</div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
