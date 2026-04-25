import React from 'react';
import { ArrowLeft, User, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {
  const navigate = useNavigate();
  
  const contacts = [
    { name: 'Rahul Sharma', phone: '+91 98765 43210', lastPaid: '2 days ago' },
    { name: 'Sneha Patel', phone: '+91 87654 32109', lastPaid: '1 week ago' },
    { name: 'Amit Kumar', phone: '+91 76543 21098', lastPaid: '3 days ago' },
    { name: 'Priya Singh', phone: '+91 65432 10987', lastPaid: 'Just now' },
    { name: 'Vikram Malhotra', phone: '+91 54321 09876', lastPaid: '1 month ago' },
    { name: 'Anjali Gupta', phone: '+91 43210 98765', lastPaid: '2 weeks ago' },
    { name: 'Karan Joshi', phone: '+91 32109 87654', lastPaid: '5 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-white border-b border-gray-200 sticky top-0">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Pay Contacts</h1>
        <div className="w-10" />
      </div>

      {/* Search */}
      <div className="p-4 bg-white">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input 
            type="text" 
            placeholder="Search contacts" 
            className="bg-transparent border-none focus:outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="p-4 space-y-2">
        {contacts.map((contact, index) => (
          <div 
            key={index}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate('/payment', { state: { contact } })}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {contact.name[0]}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{contact.name}</h3>
                  <p className="text-sm text-gray-500">{contact.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Last paid</p>
                <p className="text-sm font-medium text-gray-600">{contact.lastPaid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Contact Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ContactsPage;