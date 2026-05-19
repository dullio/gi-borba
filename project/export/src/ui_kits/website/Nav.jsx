/* global React, Button, Pill */

function Nav({ active = 'inicio', onNavigate, onCTA }) {
  const items = [
    { id: 'inicio', label: 'Início' },
    { id: 'programa', label: 'Programa' },
    { id: 'inspire', label: 'Inspire Trip' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'depoimentos', label: 'Depoimentos' },
  ];
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(247, 242, 235, 0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--gb-border)',
      padding: '0 80px',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div
        onClick={() => onNavigate?.('inicio')}
        style={{ cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center' }}
      >
        <img
          src="../../assets/logo-taupe.png"
          alt="Gi Borba Yoga"
          style={{ height: 52, width: 'auto', display: 'block' }}
        />
      </div>
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => onNavigate?.(item.id)}
            style={{
              fontFamily: 'var(--gb-font-body)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: active === item.id ? 'var(--gb-olive)' : 'var(--gb-fg-body)',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
          >{item.label}</li>
        ))}
      </ul>
      <Button variant="primary" size="sm" onClick={onCTA}>Aula Gratuita</Button>
    </nav>
  );
}

window.Nav = Nav;
