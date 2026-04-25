import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { contact, amount, note } = location.state || { 
    contact: { name: 'Recipient' }, 
    amount: 0, 
    note: '' 
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Payment Success</h1>
        <div className="w-10" />
      </div>

      {/* Success Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        
        <div className="text-3xl font-bold text-gray-800 mb-6">
          ₹{amount.toLocaleString()}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Sent to</span>
            <span className="font-semibold">{contact.name}</span>
          </div>
          
          {note && (
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Note</span>
              <span className="font-semibold">{note}</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Transaction ID</span>
            <span className="font-mono text-sm text-gray-500">
              TXN{Date.now().toString().slice(-8)}
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-3 w-full max-w-md">
          <button 
            onClick={() => navigate('/payment', { state: { contact } })}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Again
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 bg-white border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          Amount will be debited from your bank account
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;