import React from 'react';
import { Home, BarChart2, Users, Settings, HelpCircle } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm h-screen">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {menuItems.map(({ icon: Icon, label }) => (
            <li key={label}>
              <button className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}