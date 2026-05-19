/* global React */

function StatsBar() {
  const stats = [
    { value: '100%', label: 'Retenção de alunas' },
    { value: '15+',  label: 'Anos de prática' },
    { value: '4×',   label: 'Aulas por semana' },
    { value: '7+',   label: 'Formações em yoga' },
  ];
  return (
    <div style={{
      background: 'var(--gb-white)',
      padding: '32px 80px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '1px solid var(--gb-border)',
      borderBottom: '1px solid var(--gb-border)',
    }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{
          textAlign: 'center',
          padding: '20px 16px',
          borderLeft: i === 0 ? 'none' : '1px solid var(--gb-border)',
        }}>
          <div style={{
            fontFamily: 'var(--gb-font-display)',
            fontSize: 44,
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--gb-olive)',
            lineHeight: 1,
          }}>{s.value}</div>
          <div style={{
            fontFamily: 'var(--gb-font-body)',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gb-taupe-dark)',
            marginTop: 10,
          }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

window.StatsBar = StatsBar;
