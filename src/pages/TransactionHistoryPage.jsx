import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const TransactionHistoryPage = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, name: 'Zomato', date: 'Today, 2:30 PM', amount: '₹340', type: 'debit', status: 'success' },
    { id: 2, name: 'Siddhant Thakur', date: 'Yesterday, 11:15 AM', amount: '₹1,200', type: 'credit', status: 'success' },
    { id: 3, name: 'Airtel Recharge', date: '22 Apr, 9:00 AM', amount: '₹299', type: 'debit', status: 'success' },
    { id: 4, name: 'Swiggy', date: '20 Apr, 8:45 PM', amount: '₹450', type: 'debit', status: 'failed' },
    { id: 5, name: 'Salary', date: '15 Apr, 10:00 AM', amount: '₹45,000', type: 'credit', status: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto shadow-2xl flex flex-col font-sans">
      <div className="bg-white px-4 py-4 flex items-center gap-4 sticky top-0 z-10 border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 flex-1">Transaction History</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                {tx.type === 'credit' ? (
                  <ArrowDownLeft className="w-6 h-6 text-green-600" />
                ) : (
                  <ArrowUpRight className="w-6 h-6 text-red-600" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{tx.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{tx.date}</p>
                {tx.status === 'failed' && (
                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full mt-1 inline-block font-medium">Failed</span>
                )}
              </div>
            </div>
            <div className={`font-semibold ${tx.status === 'failed' ? 'text-gray-400 line-through' : tx.type === 'credit' ? 'text-green-600' : 'text-gray-800'}`}>
              {tx.type === 'credit' ? '+' : '-'}{tx.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
