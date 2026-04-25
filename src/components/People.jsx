import React from 'react';
import { ChevronRight, UserPlus } from 'lucide-react';
import { useToast } from './ToastContext';
import { useNavigate } from 'react-router-dom';

const AVATAR_GRADS = [
  'linear-gradient(135deg,#f4511e,#ff7043)',
  'linear-gradient(135deg,#c2185b,#e91e63)',
  'linear-gradient(135deg,#2e7d32,#43a047)',
  'linear-gradient(135deg,#6a1b9a,#9c27b0)',
  'linear-gradient(135deg,#0277bd,#039be5)',
  'linear-gradient(135deg,#f57f17,#fbc02d)',
  'linear-gradient(135deg,#c62828,#e53935)',
];

const PersonAvatar = ({ name, grad, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px',
      background: 'none', border: 'none', cursor: 'pointer', padding: '2px',
    }}
  >
    <div
      style={{
        width: 52, height: 52,
        borderRadius: '50%',
        background: grad,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
        fontWeight: 700,
        fontSize: '1.125rem',
        boxShadow: '0 3px 10px rgba(0,0,0,0.13)',
        transition: 'transform 0.14s, box-shadow 0.14s',
        border: '2.5px solid var(--sp-surface)',
        outline: '2px solid transparent',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.outline = '2px solid rgba(26,35,126,0.25)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.outline = '2px solid transparent'; }}
      onMouseDown={e  => { e.currentTarget.style.transform = 'scale(0.93)'; }}
      onMouseUp={e    => { e.currentTarget.style.transform = 'scale(1.08)'; }}
    >
      {name[0].toUpperCase()}
    </div>
    <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: 'var(--sp-text-secondary)', maxWidth: 60, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
      {name.split(' ')[0]}
    </span>
  </button>
);

const People = () => {
  const { showToast } = useToast();
  const navigate    = useNavigate();

  const people = [
    { name: 'Rahul',  grad: AVATAR_GRADS[0] },
    { name: 'Sneha',  grad: AVATAR_GRADS[1] },
    { name: 'Amit',   grad: AVATAR_GRADS[2] },
    { name: 'Priya',  grad: AVATAR_GRADS[3] },
    { name: 'Vikram', grad: AVATAR_GRADS[4] },
    { name: 'Anjali', grad: AVATAR_GRADS[5] },
    { name: 'Karan',  grad: AVATAR_GRADS[6] },
  ];

  return (
    <section style={{ background: 'var(--sp-surface)', padding: '20px 16px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2 className="sp-section-title">People</h2>
        <button
          onClick={() => navigate('/contacts')}
          style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            background: 'none',
            border: '1.5px solid var(--sp-border)',
            borderRadius: '50px',
            padding: '5px 12px',
            fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--sp-primary-light)',
            cursor: 'pointer',
            transition: 'background 0.15s',
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(26,35,126,0.05)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
        >
          All
          <ChevronRight style={{ width: 14, height: 14 }} />
        </button>
      </div>

      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
        {/* Add new */}
        <button
          onClick={() => navigate('/contacts')}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px',
            background: 'none', border: 'none', cursor: 'pointer', padding: '2px', flexShrink: 0, minWidth: 60,
          }}
        >
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(26,35,126,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px dashed rgba(26,35,126,0.25)',
          }}>
            <UserPlus style={{ width: 20, height: 20, color: 'var(--sp-primary-light)' }} />
          </div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: 'var(--sp-primary-light)' }}>New</span>
        </button>

        {people.map((p) => (
          <div key={p.name} style={{ flexShrink: 0, minWidth: 60 }}>
            <PersonAvatar
              name={p.name}
              grad={p.grad}
              onClick={() => {
                showToast(`Opening payment to ${p.name}`, 'info');
                setTimeout(() => navigate('/payment'), 400);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;
