import React from 'react';
import { Search, User, QrCode } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white sticky top-0 z-10">
      <div className="flex items-center flex-1 bg-gray-100 rounded-full px-4 py-2 mr-4">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input 
          type="text" 
          placeholder="Pay friends and merchants" 
          className="bg-transparent border-none focus:outline-none text-sm w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          S
        </div>
      </div>
    </header>
  );
};

export default Header;
