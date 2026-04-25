import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Gift, Tag, Users } from 'lucide-react';

const OffersPage = () => {
  const navigate = useNavigate();

  const offers = [
    { id: 1, title: 'Cashback up to ₹100', desc: 'On your next Swiggy order above ₹299', icon: <Gift className="w-6 h-6 text-pink-600" />, color: 'bg-pink-100' },
    { id: 2, title: 'Flat ₹50 Off', desc: 'On prepaid mobile recharges using SansaarPay', icon: <Tag className="w-6 h-6 text-blue-600" />, color: 'bg-blue-100' },
    { id: 3, title: 'Refer & Earn ₹200', desc: 'Invite friends and earn when they make their first payment', icon: <Users className="w-6 h-6 text-green-600" />, color: 'bg-green-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto shadow-2xl flex flex-col font-sans">
      <div className="bg-white px-4 py-4 flex items-center gap-4 sticky top-0 z-10 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 flex-1">Offers & Rewards</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${offer.color}`}>
              {offer.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg leading-tight">{offer.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{offer.desc}</p>
              <button className="mt-3 text-blue-600 font-semibold text-sm">Redeem Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
