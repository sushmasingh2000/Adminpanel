import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Header from './Layout/Header';
import Product from './pages/component/Product';
import AllProduct from './pages/component/AllProduct';
import Category from './pages/component/Category';

const App = () => {
  return (
    <Router>
      <div className="flex fixed top-0 w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col ">
          <Header />
          <main className="flex-1 p-6 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/productdetail" element={<Product />} />
              <Route path="/products" element={<AllProduct />} />
              <Route path="/category" element={<Category />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
