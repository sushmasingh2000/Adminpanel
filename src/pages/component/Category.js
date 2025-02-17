import { Delete, Edit } from '@mui/icons-material';
import { Switch } from '@mui/material';
import React, { useState } from 'react';
import tshirt from "../../assets/download.jpg"


const Category = () => {
  const [categories, setCategories] = useState([
    { 
      id: 1, 
      image: tshirt, // Placeholder image URL
      name: "Mens", 
      products: 1, 
      status: "Active" 
    },
    // Add more categories here...
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id) => {
    setCategories(categories.map(category =>
      category.id === id ? { ...category, status: category.status === "Active" ? "Inactive" : "Active" } : category
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          placeholder="Search categories..." 
          className="border border-gray-300 rounded px-3 py-2" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} 
        />
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Reorder categories
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            + Add new category
          </button>
        </div>
      </div>

      <table className="min-w-full border border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {/* <th className=" px-4 py-2">  <input type="checkbox" /></th>  */}
            <th className=" px-4 py-2">Category</th>
            <th className=" px-4 py-2">Products</th>
            <th className=" px-4 py-2">Status</th>
            <th className=" px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map(category => (
            <tr  className="border-b">
              {/* <td className=" px-4 py-2 ">
                <input type="checkbox"/>
              </td> */}
              <td className=" px-4 py-2 flex justify-center items-center">
                <img src={category.image} alt={category.name} className="w-8 h-8 mr-2" />
                {category.name}
              </td>
              <td className=" px-4 py-2 text-center">{category.products}</td>
              <td className=" px-4 py-2 text-center">
                <Switch 
                  onClick={() => handleStatusChange(category.id)}
                  className={`px-2 py-1 rounded ${category.status === "Active" ? "!text-green-500 " : "!bg-gray-400 text-gray-700"}`}
                >
                  {category.status}
                </Switch>
              </td>
              <td className=" px-4 py-2 text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-2"><Edit/></button>
                <button className="text-red-500 hover:text-red-700"><Delete/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;