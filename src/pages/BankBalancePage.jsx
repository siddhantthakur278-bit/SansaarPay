import React, { useState } from 'react';
import { ArrowLeft, Building, CreditCard, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BankBalancePage = () => {
  const navigate = useNavigate();
  const [balance] = useState(12345.67);

  const accounts = [
    { name: 'HDFC Bank', number: 'XXXX4589', balance: 8345.23, type: 'Savings' },
    { name: 'ICICI Bank', number: 'XXXX1234', balance: 4000.44, type: 'Current' },
    { name: 'SBI Bank', number: 'XXXX5678', balance: 0.00, type: 'Savings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Bank Balance</h1>
        <div className="w-10" />
      </div>

      {/* Total Balance */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center">
          <p className="text-sm opacity-90 mb-2">Total Balance</p>
          <h2 className="text-3xl font-bold mb-2">₹{balance.toLocaleString()}</h2>
          <p className="text-sm opacity-90">Across all bank accounts</p>
        </div>
      </div>

      {/* Bank Accounts */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-gray-800 px-2">Your Accounts</h3>
        
        {accounts.map((account, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{account.name}</h4>
                  <p className="text-sm text-gray-500">{account.number} • {account.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">₹{account.balance.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Add Money</span>
            </button>
            <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <Wallet className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Withdraw</span>
            </button>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="p-4 text-center">
        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default BankBalancePage;