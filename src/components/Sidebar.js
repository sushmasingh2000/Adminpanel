import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaCog, FaCircle } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  // Sample user data
  const user = {
    name: "John Doe",
    avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
    isOnline: true,
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      {/* Header */}
      <div className="p-5 flex items-center space-x-3 border-b border-gray-700">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold">Admin </h1>
          <div className="flex items-center space-x-1 text-sm">
            <FaCircle
              className={`text-xs ${user.isOnline ? 'text-green-400' : 'text-gray-500'}`}
            />
            <span>{user.isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex-1">
        <li className={`p-4 hover:bg-gray-700 ${location.pathname === '/' ? 'bg-gray-700' : ''}`}>
          <Link to="/" className="flex items-center space-x-2">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={`p-4 hover:bg-gray-700 ${location.pathname === '/users' ? 'bg-gray-700' : ''}`}>
          <Link to="/users" className="flex items-center space-x-2">
            <FaUsers />
            <span>Users</span>
          </Link>
        </li>
        <li className={`p-4 hover:bg-gray-700 ${location.pathname === '/settings' ? 'bg-gray-700' : ''}`}>
          <Link to="/settings" className="flex items-center space-x-2">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
