import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useToast } from './ToastContext';

const PersonAvatar = ({ name, color, onClick }) => (
  <div 
    className="flex flex-col items-center gap-2 cursor-pointer group"
    onClick={onClick}
  >
    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-white text-xl font-semibold shadow-sm transition-transform group-active:scale-95 group-hover:opacity-90`}>
      {name[0]}
    </div>
    <span className="text-xs font-medium text-gray-700">{name}</span>
  </div>
);

const People = () => {
  const { showToast } = useToast();

  const handlePersonClick = (name) => {
    showToast(`Opening payment to ${name}`, 'success');
    setTimeout(() => showToast(`Enter amount to send to ${name}`, 'info'), 800);
  };

  const handleExploreClick = () => {
    showToast('Opening contacts explorer', 'info');
  };

  const people = [
    { name: 'Rahul', color: 'bg-orange-500', onClick: () => handlePersonClick('Rahul') },
    { name: 'Sneha', color: 'bg-pink-500', onClick: () => handlePersonClick('Sneha') },
    { name: 'Amit', color: 'bg-green-600', onClick: () => handlePersonClick('Amit') },
    { name: 'Priya', color: 'bg-purple-600', onClick: () => handlePersonClick('Priya') },
    { name: 'Vikram', color: 'bg-blue-500', onClick: () => handlePersonClick('Vikram') },
    { name: 'Anjali', color: 'bg-yellow-600', onClick: () => handlePersonClick('Anjali') },
    { name: 'Karan', color: 'bg-red-500', onClick: () => handlePersonClick('Karan') },
  ];

  return (
    <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">People</h2>
        <button 
          className="flex items-center text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-blue-50 transition-colors"
          onClick={handleExploreClick}
        >
          Explore
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {people.map((person, index) => (
          <PersonAvatar key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

export default People;
