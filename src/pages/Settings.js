import React from 'react';

const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Settings</h2>
      <div className="mt-4 space-y-4">
        {/* General Settings */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">General Settings</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Site Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium">Site URL</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Changes</button>
          </form>
        </div>

        {/* User Preferences */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">User Preferences</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email Notifications</label>
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable email notifications</span>
            </div>
            <div>
              <label className="block text-sm font-medium">Dark Mode</label>
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Enable dark mode</span>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Preferences</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
