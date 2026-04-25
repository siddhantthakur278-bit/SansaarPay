import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ArrowUpRight, ArrowDownLeft, Filter } from 'lucide-react';

const ALL_TXN = [
  { id: 1,  name: 'Zomato',          date: 'Today, 2:30 PM',        amount: 340,    type: 'debit',  status: 'success', category: 'Food' },
  { id: 2,  name: 'Siddhant Thakur', date: 'Yesterday, 11:15 AM',   amount: 1200,   type: 'credit', status: 'success', category: 'Transfer' },
  { id: 3,  name: 'Airtel Recharge', date: '22 Apr, 9:00 AM',        amount: 299,    type: 'debit',  status: 'success', category: 'Recharge' },
  { id: 4,  name: 'Swiggy',          date: '20 Apr, 8:45 PM',        amount: 450,    type: 'debit',  status: 'failed',  category: 'Food' },
  { id: 5,  name: 'Salary',          date: '15 Apr, 10:00 AM',       amount: 45000,  type: 'credit', status: 'success', category: 'Transfer' },
  { id: 6,  name: 'Netflix',         date: '10 Apr, 12:00 PM',       amount: 649,    type: 'debit',  status: 'success', category: 'Bills' },
  { id: 7,  name: 'Rahul Sharma',    date: '8 Apr, 6:20 PM',         amount: 500,    type: 'credit', status: 'success', category: 'Transfer' },
];

const FILTERS = ['All', 'Credits', 'Debits', 'Failed'];

const TransactionHistoryPage = () => {
  const navigate = useNavigate();
  const [active, setActive]  = useState('All');
  const [query,  setQuery]   = useState('');
  const [search, setSearch]  = useState(false);

  const filtered = ALL_TXN.filter(tx => {
    const matchFilter =
      active === 'All'     ? true :
      active === 'Credits' ? tx.type === 'credit' :
      active === 'Debits'  ? tx.type === 'debit' && tx.status !== 'failed' :
      tx.status === 'failed';
    const matchSearch = tx.name.toLowerCase().includes(query.toLowerCase());
    return matchFilter && matchSearch;
  });

  const TxRow = ({ tx }) => {
    const isCredit = tx.type === 'credit';
    const isFailed = tx.status === 'failed';
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--sp-surface)',
        border: '1.5px solid var(--sp-border)',
        borderRadius: '16px',
        padding: '14px 16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: 44, height: 44, borderRadius: '14px', flexShrink: 0,
            background: isCredit ? 'rgba(0,137,123,0.1)' : isFailed ? 'rgba(229,57,53,0.08)' : 'rgba(26,35,126,0.07)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {isCredit
              ? <ArrowDownLeft style={{ width: 20, height: 20, color: 'var(--sp-accent)' }} />
              : <ArrowUpRight  style={{ width: 20, height: 20, color: isFailed ? 'var(--sp-danger)' : 'var(--sp-primary-light)' }} />
            }
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--sp-text-primary)', marginBottom: '2px' }}>{tx.name}</p>
            <p style={{ fontSize: '0.72rem', color: 'var(--sp-text-muted)' }}>{tx.date}</p>
            {isFailed && (
              <span style={{
                display: 'inline-block', marginTop: '3px',
                background: 'rgba(229,57,53,0.1)',
                color: 'var(--sp-danger)',
                fontSize: '0.625rem', fontWeight: 700,
                padding: '2px 8px', borderRadius: '50px',
                letterSpacing: '0.04em',
              }}>
                FAILED
              </span>
            )}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{
            fontWeight: 700, fontSize: '0.9375rem',
            color: isFailed ? 'var(--sp-text-muted)' : isCredit ? 'var(--sp-accent)' : 'var(--sp-text-primary)',
            textDecoration: isFailed ? 'line-through' : 'none',
          }}>
            {isCredit ? '+' : '−'} ₹{tx.amount.toLocaleString('en-IN')}
          </p>
          <p style={{ fontSize: '0.68rem', color: 'var(--sp-text-muted)', marginTop: '2px' }}>{tx.category}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="app-shell">
      {/* Header */}
      <div style={{ background: 'var(--sp-gradient-hero)', padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: search ? '12px' : 0 }}>
          <button
            onClick={() => navigate(-1)}
            style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <ArrowLeft style={{ width: 18, height: 18, color: '#fff' }} />
          </button>
          <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', flex: 1 }}>Transaction History</h1>
          <button
            onClick={() => setSearch(!search)}
            style={{ width: 36, height: 36, borderRadius: '50%', background: search ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <Search style={{ width: 16, height: 16, color: '#fff' }} />
          </button>
        </div>
        {search && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '50px', padding: '9px 16px' }}>
            <Search style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.7)', flexShrink: 0 }} />
            <input
              autoFocus
              type="text"
              placeholder="Search transactions…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{ background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '0.8125rem', width: '100%', fontFamily: "'Inter', sans-serif" }}
            />
          </div>
        )}
      </div>

      {/* Filter tabs */}
      <div style={{ background: 'var(--sp-surface)', borderBottom: '1px solid var(--sp-border)', padding: '12px 16px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '6px 16px', borderRadius: '50px', flexShrink: 0,
              border: `1.5px solid ${active === f ? 'var(--sp-primary)' : 'var(--sp-border)'}`,
              background: active === f ? 'rgba(26,35,126,0.08)' : 'transparent',
              color: active === f ? 'var(--sp-primary)' : 'var(--sp-text-secondary)',
              fontWeight: active === f ? 700 : 500, fontSize: '0.8rem',
              cursor: 'pointer', transition: 'all 0.13s', fontFamily: "'Inter', sans-serif",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filtered.length === 0
          ? <p style={{ textAlign: 'center', color: 'var(--sp-text-muted)', marginTop: '40px', fontSize: '0.875rem' }}>No transactions found</p>
          : filtered.map(tx => <TxRow key={tx.id} tx={tx} />)
        }
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
