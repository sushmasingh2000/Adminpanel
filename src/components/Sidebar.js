import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt, FaUsers, FaCog, FaCircle, FaThList, FaTruck,
  FaMoneyBill, FaPercent, FaChartLine, FaShoppingBag, FaSignOutAlt, FaCaretDown
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const user = {
    name: "John Doe",
    avatar: "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
    isOnline: true,
  };

  const menuItems = [
    { path: "/", icon: <FaTachometerAlt />, label: "Dashboard" },
    { path: "/orders", icon: <FaShoppingBag />, label: "Orders" },
    { path: "/delivery", icon: <FaTruck />, label: "Delivery" },
    {
      path: "/products",
      icon: <FaThList />,
      label: "Products",
      children: [
        { path: "/products", label: "All Products" },
        { path: "/products/categories", label: "Categories" },
        { path: "/products/inventory", label: "Inventory" },
      ]
    },
    { path: "/category", icon: <FaChartLine />, label: "Category" },
    { path: "/payouts", icon: <FaMoneyBill />, label: "Payouts" },
    { path: "/discounts", icon: <FaPercent />, label: "Discounts" },
    { path: "/audience", icon: <FaUsers />, label: "Audience" },
    { path: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  const handleProductsDropdownToggle = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col relative">
      <div className="p-5 flex items-center space-x-3 border-b border-gray-700">
        <img src={user.avatar} alt="User Avatar" className="w-12 h-12 rounded-full" />
        <div>
          <h1 className="text-xl font-bold">Admin</h1>
          <div className="flex items-center space-x-1 text-sm">
            <FaCircle className={`text-xs ${user.isOnline ? 'text-green-400' : 'text-gray-500'}`} />
            <span>{user.isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>

      <ul className="flex-1">
        {menuItems.map((item) => (
          <li key={item.path} className={`p-4 hover:bg-gray-700 relative ${location.pathname.startsWith(item.path) ? 'bg-gray-700' : ''}`}>
            {item.label === "Products" ? (
              <div>
                <div
                  onClick={handleProductsDropdownToggle}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    {item.icon} <span>{item.label}</span>
                  </Link>
                </div>
              </div>
            ) : (
              <Link to={item.path} className="flex items-center space-x-2">
                {item.icon} <span>{item.label}</span>
              </Link>
            )}
          </li>
        ))}
        <li className="p-4 hover:bg-gray-700 mt-auto border-t border-gray-700">
          <Link to="/logout" className="flex items-center space-x-2">
            <FaSignOutAlt />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;