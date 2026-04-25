import React, { useState } from 'react';
import { ArrowLeft, Search, UserPlus } from 'lucide-react';
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

const ALL_CONTACTS = [
  { name: 'Rahul Sharma',    phone: '+91 98765 43210', lastPaid: '2 days ago' },
  { name: 'Sneha Patel',     phone: '+91 87654 32109', lastPaid: '1 week ago' },
  { name: 'Amit Kumar',      phone: '+91 76543 21098', lastPaid: '3 days ago' },
  { name: 'Priya Singh',     phone: '+91 65432 10987', lastPaid: 'Just now' },
  { name: 'Vikram Malhotra', phone: '+91 54321 09876', lastPaid: '1 month ago' },
  { name: 'Anjali Gupta',    phone: '+91 43210 98765', lastPaid: '2 weeks ago' },
  { name: 'Karan Joshi',     phone: '+91 32109 87654', lastPaid: '5 days ago' },
];

const ContactsPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filtered = ALL_CONTACTS.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.phone.includes(query)
  );

  return (
    <div className="app-shell">
      {/* Header */}
      <div style={{
        background: 'var(--sp-gradient-hero)',
        padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            border: '1.5px solid rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <ArrowLeft style={{ width: 18, height: 18, color: '#fff' }} />
        </button>
        <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', flex: 1 }}>Pay Contacts</h1>
        <button style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          border: '1.5px solid rgba(255,255,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <UserPlus style={{ width: 16, height: 16, color: '#fff' }} />
        </button>
      </div>

      {/* Search */}
      <div style={{ padding: '14px 16px 8px', background: 'var(--sp-surface)', borderBottom: '1px solid var(--sp-border)' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: 'var(--sp-bg)',
          border: '1.5px solid var(--sp-border)',
          borderRadius: '50px',
          padding: '10px 16px',
        }}>
          <Search style={{ width: 15, height: 15, color: 'var(--sp-text-muted)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search by name or number"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              background: 'transparent', border: 'none', outline: 'none',
              fontSize: '0.8125rem', color: 'var(--sp-text-primary)', width: '100%',
              fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--sp-text-muted)', marginTop: '40px', fontSize: '0.875rem' }}>
            No contacts found
          </p>
        )}
        {filtered.map((contact, i) => (
          <button
            key={i}
            onClick={() => navigate('/payment', { state: { contact } })}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'var(--sp-surface)',
              border: '1.5px solid var(--sp-border)',
              borderRadius: '16px',
              padding: '14px 16px',
              cursor: 'pointer',
              transition: 'box-shadow 0.14s, border-color 0.14s',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'left',
              width: '100%',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--sp-shadow-sm)'; e.currentTarget.style.borderColor = 'rgba(26,35,126,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--sp-border)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: AVATAR_GRADS[i % AVATAR_GRADS.length],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '1rem', color: '#fff',
                flexShrink: 0,
              }}>
                {contact.name[0]}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--sp-text-primary)', marginBottom: '2px' }}>
                  {contact.name}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--sp-text-muted)' }}>{contact.phone}</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 500, color: 'var(--sp-text-muted)', marginBottom: '2px' }}>Last paid</p>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--sp-text-secondary)' }}>{contact.lastPaid}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;