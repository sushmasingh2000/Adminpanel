
import React, { useState } from 'react';
import tshirt from "../../assets/download.jpg"
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { Delete, Edit } from '@mui/icons-material';
import { Switch } from '@mui/material';

const products = [
  { id: 1, name: 'T-shirt', category: 'Mens', price: 450, oldPrice: 500, inventory: 'Unlimited', status: true },
];

function AllProduct() {
  const [productData, setProductData] = useState(products); // Use state for dynamic data
 const navigate = useNavigate()
  const handleStatusChange = (id) => {
    setProductData(productData.map(product =>
      product.id === id ? { ...product, status: !product.status } : product
    ));
    // In a real app, you'd make an API call here to update the status
    console.log(`Toggling status for product ID: ${id}`);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>

        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <input type="text" placeholder="Search products..." className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
          </div>
          <button onClick={()=>navigate('/productdetail')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add New Product</button>
        </div>

        <div className="overflow-x-auto"> {/* For horizontal scrolling */}
          <table className="min-w-full table-auto border-collapse items-center">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="p-3 !text-center"><input type="checkbox" /></th>
                <th className="p-3  !text-center">Product</th>
                <th className="p-3   !text-center">Price</th>
                <th className="p-3  !text-center">Inventory</th>
                <th className="p-3  !text-center">Status</th>
                <th className="p-3  !text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {productData.map(product => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 !text-center"><input type="checkbox" /></td>
                  <td className="p-3 flex items-center">
                    <img src={tshirt} alt="Product" className="w-12 h-12 mr-2" />
                    <div>
                     <span className='!text-blue-800 cursor-pointer' onClick={()=>navigate('/productdetail')}> {product.name}</span><br />
                      {product.category}
                    </div>
                  </td>
                  <td className="p-3 !text-center">
                    ₹{product.price} <span className="line-through text-gray-500">₹{product.oldPrice}</span>
                  </td>
                  <td className="p-3 !text-center">{product.inventory}</td>
                  <td className="p-3 !text-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <Switch type="checkbox" className="sr-only peer" checked={product.status} onChange={() => handleStatusChange(product.id)} />
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{product.status ? 'Active' : 'Inactive'}</span>
                    </label>
                  </td>
                  <td className="p-3 flex justify-center">
                    <button className="!text-blue-500  font-bold py-1 px-2 rounded"><FaEye/></button>
                    <button className="!text-yellow-500  font-bold py-1 px-2 rounded"><Edit/></button>
                    <button className="!text-red-500  font-bold py-1 px-2 rounded"><Delete/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;