import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Gift, Tag, Users, Clock, ChevronRight } from 'lucide-react';

const OFFERS = [
  {
    id: 1,
    title: 'Cashback up to ₹100',
    desc: 'On your next Swiggy order above ₹299. Valid till 30 Apr.',
    tag: 'Food',
    expiry: '2 days left',
    grad: 'linear-gradient(135deg,#c2185b,#e91e63)',
    icon: Gift,
  },
  {
    id: 2,
    title: 'Flat ₹50 Off',
    desc: 'On prepaid mobile recharges using SansaarPay. Any operator.',
    tag: 'Recharge',
    expiry: '5 days left',
    grad: 'linear-gradient(135deg,#1a237e,#3949ab)',
    icon: Tag,
  },
  {
    id: 3,
    title: 'Refer & Earn ₹200',
    desc: 'Invite friends. Earn cashback when they make their first payment.',
    tag: 'Referral',
    expiry: 'No expiry',
    grad: 'linear-gradient(135deg,#00838f,#00acc1)',
    icon: Users,
  },
  {
    id: 4,
    title: '10% Off on DTH Recharge',
    desc: 'On Tata Sky, Airtel DTH and Dish TV recharges above ₹199.',
    tag: 'Entertainment',
    expiry: '12 days left',
    grad: 'linear-gradient(135deg,#e65100,#fb8c00)',
    icon: Tag,
  },
];

const OfferCard = ({ offer }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = offer.icon;
  return (
    <div
      style={{
        background: 'var(--sp-surface)',
        border: `1.5px solid ${hovered ? 'rgba(26,35,126,0.2)' : 'var(--sp-border)'}`,
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: hovered ? 'var(--sp-shadow-md)' : 'var(--sp-shadow-sm)',
        transition: 'box-shadow 0.15s, border-color 0.15s, transform 0.14s',
        transform: hovered ? 'scale(1.015)' : 'scale(1)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Colored top strip */}
      <div style={{ height: 5, background: offer.grad }} />
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          {/* Icon */}
          <div style={{
            width: 44, height: 44, borderRadius: '14px', flexShrink: 0,
            background: offer.grad,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon style={{ width: 20, height: 20, color: '#fff' }} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Tag + expiry row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span style={{
                fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.06em',
                background: 'rgba(26,35,126,0.07)', color: 'var(--sp-primary-light)',
                padding: '2px 8px', borderRadius: '50px',
              }}>
                {offer.tag.toUpperCase()}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.65rem', color: 'var(--sp-text-muted)', fontWeight: 500 }}>
                <Clock style={{ width: 10, height: 10 }} />
                {offer.expiry}
              </span>
            </div>

            <h3 style={{ fontWeight: 800, fontSize: '0.9375rem', color: 'var(--sp-text-primary)', marginBottom: '4px', lineHeight: 1.3 }}>
              {offer.title}
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--sp-text-secondary)', lineHeight: 1.5 }}>
              {offer.desc}
            </p>
          </div>
        </div>

        {/* Redeem button */}
        <button style={{
          marginTop: '14px', width: '100%',
          padding: '11px', borderRadius: '12px', border: 'none',
          background: offer.grad,
          color: '#fff', fontWeight: 700, fontSize: '0.8125rem',
          cursor: 'pointer', fontFamily: "'Inter', sans-serif",
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          letterSpacing: '0.01em',
        }}>
          Redeem Now
          <ChevronRight style={{ width: 15, height: 15 }} />
        </button>
      </div>
    </div>
  );
};

const OffersPage = () => {
  const navigate = useNavigate();
  return (
    <div className="app-shell">
      {/* Header */}
      <div style={{ background: 'var(--sp-gradient-hero)', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => navigate(-1)}
          style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <ArrowLeft style={{ width: 18, height: 18, color: '#fff' }} />
        </button>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Offers & Rewards</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem' }}>{OFFERS.length} offers available for you</p>
        </div>
      </div>

      {/* Cards */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {OFFERS.map(offer => <OfferCard key={offer.id} offer={offer} />)}
      </div>
    </div>
  );
};

export default OffersPage;
