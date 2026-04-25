import React from 'react';
import { Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        background: 'var(--sp-gradient-hero)',
        padding: '14px 16px 18px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Top row: logo + icons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: 34, height: 34,
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '1rem', color: '#fff',
            letterSpacing: '-0.5px',
            border: '1.5px solid rgba(255,255,255,0.3)',
          }}>
            S
          </div>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
            SansaarPay
          </span>
        </div>

        {/* Right icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', position: 'relative',
            }}
          >
            <Bell style={{ width: 16, height: 16, color: '#fff' }} />
            {/* Notification dot */}
            <span style={{
              position: 'absolute', top: 6, right: 6,
              width: 7, height: 7, borderRadius: '50%',
              background: '#ff7043',
              border: '1.5px solid rgba(26,35,126,0.8)',
            }} />
          </button>

          {/* User avatar */}
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg,#ffca28,#ffa000)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '0.9rem', color: '#fff',
            border: '2px solid rgba(255,255,255,0.4)',
            cursor: 'pointer',
          }}>
            S
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div
        onClick={() => {}}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: 'rgba(255,255,255,0.14)',
          border: '1.5px solid rgba(255,255,255,0.22)',
          borderRadius: '50px',
          padding: '9px 16px',
          cursor: 'text',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Search style={{ width: 16, height: 16, color: 'rgba(255,255,255,0.7)', flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Pay friends, merchants & bills"
          style={{
            background: 'transparent', border: 'none', outline: 'none',
            color: '#fff', fontSize: '0.8125rem', fontWeight: 400,
            width: '100%',
            fontFamily: "'Inter', sans-serif",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
