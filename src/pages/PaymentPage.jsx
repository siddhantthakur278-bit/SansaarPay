import React, { useState } from 'react';
import { ArrowLeft, IndianRupee, Send } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contact = location.state?.contact || { name: 'Contact', phone: '' };
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handlePayment = () => {
    if (amount && parseFloat(amount) > 0) {
      navigate('/payment-success', { 
        state: { 
          contact, 
          amount: parseFloat(amount),
          note 
        } 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Send Money</h1>
        <div className="w-10" />
      </div>

      {/* Recipient Info */}
      <div className="p-6 bg-white text-center">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xl mx-auto mb-4">
          {contact.name[0]}
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{contact.name}</h2>
        <p className="text-gray-500">{contact.phone}</p>
      </div>

      {/* Amount Input */}
      <div className="p-6 bg-white">
        <div className="flex items-center justify-center mb-6">
          <IndianRupee className="w-8 h-8 text-gray-500 mr-2" />
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-4xl font-bold text-gray-800 bg-transparent border-none outline-none w-32 text-center"
          />
        </div>

        {/* Note Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Add a note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          disabled={!amount || parseFloat(amount) <= 0}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          <Send className="w-5 h-5 mr-2 inline" />
          Send ₹{amount || '0'}
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Recent with {contact.name}</h3>
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <p className="text-gray-500 text-center">No recent transactions</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;