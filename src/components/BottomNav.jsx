import React from 'react';
import { Home, History, QrCode, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const NAV_ITEMS = [
    { label: 'Home',    icon: Home,    path: '/' },
    { label: 'History', icon: History, path: '/history' },
    { label: 'Scan',    icon: QrCode,  path: '/qr-scanner', center: true },
    { label: 'Offers',  icon: User,    path: '/offers' }, // Reusing User icon for Offers or just keep it as User for profile
  ];

  return (
    <nav style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid var(--sp-border)',
      padding: '8px 16px 20px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 100
    }}>
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        if (item.center) {
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                background: 'var(--sp-gradient-hero)',
                width: 56, height: 56, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(26, 35, 126, 0.3)',
                border: 'none', cursor: 'pointer',
                marginTop: '-36px'
              }}
            >
              <Icon style={{ width: 24, height: 24, color: '#fff' }} />
            </button>
          );
        }

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              background: 'none', border: 'none', cursor: 'pointer',
              flex: 1
            }}
          >
            <Icon style={{
              width: 20, height: 20,
              color: isActive ? 'var(--sp-primary)' : 'var(--sp-text-muted)',
              transition: 'color 0.2s'
            }} />
            <span style={{
              fontSize: '0.65rem', fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--sp-primary)' : 'var(--sp-text-muted)',
              transition: 'color 0.2s'
            }}>
              {item.label}
            </span>
            {isActive && (
              <div style={{
                width: 4, height: 4, borderRadius: '50%',
                background: 'var(--sp-primary)', marginTop: '2px'
              }} />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
