import React from 'react';
import {
  QrCode, Contact, Smartphone, Landmark,
  ArrowLeftRight, Receipt, Zap, Gift,
} from 'lucide-react';
import { useToast } from './ToastContext';
import { useNavigate } from 'react-router-dom';

/* Each action gets a distinct color pair [bg gradient, icon color] */
const ACTIONS = [
  { icon: QrCode,         label: 'Scan QR',        grad: 'linear-gradient(135deg,#1a237e,#3949ab)', route: '/qr-scanner',  key: 'Scan any QR code' },
  { icon: Contact,        label: 'Pay Contacts',    grad: 'linear-gradient(135deg,#00838f,#00acc1)', route: '/contacts',    key: 'Pay contacts' },
  { icon: Smartphone,     label: 'Pay Number',      grad: 'linear-gradient(135deg,#6a1b9a,#9c27b0)', route: '/payment',     key: 'Pay phone number' },
  { icon: Landmark,       label: 'Bank Transfer',   grad: 'linear-gradient(135deg,#0277bd,#039be5)', route: '/payment',     key: 'Bank transfer' },
  { icon: ArrowLeftRight, label: 'Self Transfer',   grad: 'linear-gradient(135deg,#2e7d32,#43a047)', route: '/payment',     key: 'Self transfer' },
  { icon: Receipt,        label: 'Pay Bills',       grad: 'linear-gradient(135deg,#c62828,#e53935)', route: '/payment',     key: 'Pay bills' },
  { icon: Zap,            label: 'Recharge',        grad: 'linear-gradient(135deg,#e65100,#fb8c00)', route: '/payment',     key: 'Mobile recharge' },
  { icon: Gift,           label: 'Rewards',         grad: 'linear-gradient(135deg,#4a148c,#7b1fa2)', route: '/offers',      key: 'Rewards' },
];

const ActionButton = ({ icon: Icon, label, grad, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
    }}
  >
    <div style={{
      width: 52, height: 52,
      borderRadius: '16px',
      background: grad,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
      transition: 'transform 0.14s, box-shadow 0.14s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.18)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)'; }}
      onMouseDown={e  => { e.currentTarget.style.transform = 'scale(0.94)'; }}
      onMouseUp={e    => { e.currentTarget.style.transform = 'scale(1.07)'; }}
    >
      <Icon style={{ width: 22, height: 22, color: '#fff' }} />
    </div>
    <span style={{
      fontSize: '0.6875rem', fontWeight: 500,
      color: 'var(--sp-text-secondary)',
      textAlign: 'center', lineHeight: 1.3,
      maxWidth: 64,
    }}>
      {label}
    </span>
  </button>
);

const QuickActions = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleClick = (action) => {
    showToast(`${action.label} opened`, 'success');
    setTimeout(() => navigate(action.route), 400);
  };

  return (
    <section style={{ background: 'var(--sp-surface)', padding: '20px 16px 16px' }}>
      <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--sp-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
        Quick Actions
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px 4px' }}>
        {ACTIONS.map((action) => (
          <ActionButton key={action.key} {...action} onClick={() => handleClick(action)} />
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
