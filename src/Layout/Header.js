import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <>
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Branding/Logo */}
      <div className="text-lg font-bold">
        <Link to="/" className="hover:text-gray-300">
          Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="material-icons">Notifications</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span> Singh</span>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded">
          Logout
        </button>
      </div>
    </header>
    </>
  );
};

export default Header;
