/* global React, Button */
const { useState } = React;

function Field({ label, type = 'text', value, onChange, placeholder, focusedDefault = false }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: 'block',
        fontFamily: 'var(--gb-font-body)',
        fontSize: 11, fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--gb-taupe-dark)',
        marginBottom: 8,
      }}>{label}</label>
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'var(--gb-font-body)',
          fontSize: 14,
          fontWeight: 300,
          color: 'var(--gb-fg)',
          background: 'var(--gb-cream)',
          border: `1.5px solid ${focused || focusedDefault ? 'var(--gb-olive)' : 'var(--gb-border)'}`,
          borderRadius: 10,
          padding: '12px 16px',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
      />
    </div>
  );
}

function ContactForm({ inline = false, onSubmit, onClose }) {
  const [data, setData] = useState({ name: '', whatsapp: '', feeling: '' });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e?.preventDefault?.();
    setSubmitted(true);
    onSubmit?.(data);
  };

  const formCard = (
    <form onSubmit={submit} style={{
      background: 'var(--gb-white)',
      border: '1px solid var(--gb-border)',
      borderRadius: 24,
      padding: 40,
      maxWidth: 480,
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: inline ? 'var(--gb-shadow-md)' : 'var(--gb-shadow-xl)',
      position: 'relative',
    }}>
      {!inline && onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          style={{
            position: 'absolute', top: 14, right: 14,
            background: 'transparent', border: 'none', cursor: 'pointer',
            width: 32, height: 32, borderRadius: 999,
            color: 'var(--gb-taupe-dark)', fontSize: 18, lineHeight: 1,
          }}
        >×</button>
      )}

      <div style={{
        fontFamily: 'var(--gb-font-body)',
        fontSize: 10, fontWeight: 500,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--gb-taupe)', marginBottom: 12,
      }}>Aula gratuita · primeiro passo</div>

      <div style={{
        fontFamily: 'var(--gb-font-display)',
        fontSize: 32, fontWeight: 300, fontStyle: 'italic',
        color: 'var(--gb-fg)', lineHeight: 1.15,
        marginBottom: 28,
      }}>{submitted ? 'Recebi. Em breve, conversamos.' : 'Reserve sua aula gratuita'}</div>

      {!submitted ? (
        <>
          <Field
            label="Seu nome"
            value={data.name}
            onChange={(v) => setData({ ...data, name: v })}
            placeholder="Como prefere ser chamada?"
          />
          <Field
            label="WhatsApp"
            value={data.whatsapp}
            onChange={(v) => setData({ ...data, whatsapp: v })}
            placeholder="(00) 00000-0000"
          />
          <Field
            label="Como está se sentindo agora?"
            value={data.feeling}
            onChange={(v) => setData({ ...data, feeling: v })}
            placeholder="Pode ser honesta, estou aqui para isso"
          />
          <div style={{ marginTop: 24 }}>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Quero começar →
            </Button>
          </div>
        </>
      ) : (
        <div style={{
          fontFamily: 'var(--gb-font-body)',
          fontSize: 15, fontWeight: 300,
          color: 'var(--gb-fg-body)', lineHeight: 1.8,
        }}>
          Obrigada por confiar. Vou te escrever no WhatsApp dentro de 24h para combinarmos sua aula.
          Sem pressa, sem fórmula. <span style={{ fontFamily: 'var(--gb-font-script)', fontSize: 22, color: 'var(--gb-taupe)' }}>Gi</span>
        </div>
      )}
    </form>
  );

  if (inline) return formCard;

  // Modal overlay
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(62, 45, 28, 0.45)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'gb-fade-in 0.3s ease-out',
      }}
    >
      {formCard}
    </div>
  );
}

window.ContactForm = ContactForm;
