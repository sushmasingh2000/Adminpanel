import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Sales: 4000, Orders: 2400 },
  { name: 'Feb', Sales: 3000, Orders: 2210 },
  { name: 'Mar', Sales: 2000, Orders: 2290 },
  { name: 'Apr', Sales: 2780, Orders: 2000 },
  { name: 'May', Sales: 1890, Orders: 2181 },
  { name: 'Jun', Sales: 2390, Orders: 2500 },
  { name: 'Jul', Sales: 3490, Orders: 2100 },
];

const Graph = () => {
  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-2xl font-bold">$24,500</p>
          <p className="text-green-500">+5% from last month</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-2xl font-bold">1,245</p>
          <p className="text-red-500">-2% from last month</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">New Users</h3>
          <p className="text-2xl font-bold">320</p>
          <p className="text-green-500">+10% from last month</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-2xl font-bold">$8,760</p>
          <p className="text-green-500">+7% from last month</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Sales and Orders Over Time</h3>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
          <Line type="monotone" dataKey="Orders" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span className="font-medium">John Doe</span>
            <span className="text-gray-500">Completed an order</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Jane Smith</span>
            <span className="text-gray-500">Signed up</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Emily Johnson</span>
            <span className="text-gray-500">Added a new product</span>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Graph;
