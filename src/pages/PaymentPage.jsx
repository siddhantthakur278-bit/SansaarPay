import React, { useState } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const QUICK_AMOUNTS = [200, 500, 1000, 2000];

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contact  = location.state?.contact || { name: 'Recipient', phone: '' };
  const [amount, setAmount] = useState('');
  const [note,   setNote]   = useState('');
  const [paying, setPaying] = useState(false);

  const numAmount = parseFloat(amount) || 0;

  const handlePay = () => {
    if (numAmount <= 0) return;
    setPaying(true);
    setTimeout(() => {
      navigate('/payment-success', { state: { contact, amount: numAmount, note } });
    }, 900);
  };

  return (
    <div className="app-shell">
      {/* Header */}
      <div style={{
        background: 'var(--sp-gradient-hero)',
        padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}
        >
          <ArrowLeft style={{ width: 18, height: 18, color: '#fff' }} />
        </button>
        <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', flex: 1 }}>Send Money</h1>
      </div>

      {/* Recipient chip */}
      <div style={{
        background: 'var(--sp-surface)',
        padding: '20px 16px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        borderBottom: '1px solid var(--sp-border)',
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg,#1a237e,#3949ab)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: '1.5rem', color: '#fff',
          boxShadow: 'var(--sp-shadow-md)',
          marginBottom: '10px',
        }}>
          {contact.name[0].toUpperCase()}
        </div>
        <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--sp-text-primary)', marginBottom: '2px' }}>{contact.name}</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--sp-text-muted)' }}>{contact.phone || 'UPI Payment'}</p>
      </div>

      {/* Amount area */}
      <div style={{ background: 'var(--sp-surface)', padding: '28px 24px 20px', borderBottom: '1px solid var(--sp-border)' }}>
        <p className="sp-label" style={{ textAlign: 'center', marginBottom: '10px', letterSpacing: '0.06em' }}>ENTER AMOUNT</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '20px' }}>
          <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--sp-text-secondary)', marginTop: '4px' }}>₹</span>
          <input
            type="number"
            inputMode="numeric"
            placeholder="0"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{
              fontSize: '3rem', fontWeight: 800,
              color: numAmount > 0 ? 'var(--sp-text-primary)' : 'var(--sp-text-muted)',
              background: 'transparent', border: 'none', outline: 'none',
              width: '160px', textAlign: 'center',
              fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>

        {/* Quick amount pills */}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
          {QUICK_AMOUNTS.map(q => (
            <button
              key={q}
              onClick={() => setAmount(String(q))}
              style={{
                padding: '6px 14px',
                borderRadius: '50px',
                border: `1.5px solid ${amount === String(q) ? 'var(--sp-primary)' : 'var(--sp-border)'}`,
                background: amount === String(q) ? 'rgba(26,35,126,0.07)' : 'transparent',
                color: amount === String(q) ? 'var(--sp-primary)' : 'var(--sp-text-secondary)',
                fontSize: '0.8rem', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.13s',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              ₹{q}
            </button>
          ))}
        </div>

        {/* Note field */}
        <div style={{
          display: 'flex', alignItems: 'center',
          background: 'var(--sp-bg)',
          border: '1.5px solid var(--sp-border)',
          borderRadius: '12px',
          padding: '12px 14px', gap: '10px',
        }}>
          <input
            type="text"
            placeholder="Add a note (optional)"
            value={note}
            onChange={e => setNote(e.target.value)}
            maxLength={50}
            style={{
              background: 'transparent', border: 'none', outline: 'none',
              fontSize: '0.875rem', color: 'var(--sp-text-primary)', width: '100%',
              fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>
      </div>

      {/* Bank selector */}
      <div style={{ padding: '12px 16px', background: 'var(--sp-surface)', borderBottom: '1px solid var(--sp-border)' }}>
        <button style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', background: 'var(--sp-bg)',
          border: '1.5px solid var(--sp-border)', borderRadius: '12px',
          padding: '12px 14px', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: 30, height: 30, borderRadius: '8px', background: 'linear-gradient(135deg,#0277bd,#039be5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: '0.65rem', fontWeight: 800 }}>HDFC</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--sp-text-primary)' }}>HDFC Bank •••• 4589</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--sp-text-muted)' }}>Balance: ₹8,345</p>
            </div>
          </div>
          <ChevronDown style={{ width: 16, height: 16, color: 'var(--sp-text-muted)' }} />
        </button>
      </div>

      {/* Pay button */}
      <div style={{ padding: '20px 16px', marginTop: 'auto' }}>
        <button
          onClick={handlePay}
          disabled={numAmount <= 0 || paying}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '16px',
            border: 'none',
            background: numAmount > 0 && !paying ? 'var(--sp-gradient-hero)' : '#e0e0e0',
            color: numAmount > 0 && !paying ? '#fff' : '#9e9e9e',
            fontSize: '1rem', fontWeight: 700,
            cursor: numAmount > 0 && !paying ? 'pointer' : 'not-allowed',
            transition: 'all 0.15s',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.01em',
            boxShadow: numAmount > 0 && !paying ? 'var(--sp-shadow-md)' : 'none',
          }}
        >
          {paying ? 'Processing…' : `Pay ₹${numAmount > 0 ? numAmount.toLocaleString() : '0'}`}
        </button>
        <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--sp-text-muted)', marginTop: '10px' }}>
          🔒 Secured by 256-bit SSL encryption
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;