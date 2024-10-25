import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
            <h1 className="ml-4 text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-6 w-6 text-gray-500" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}