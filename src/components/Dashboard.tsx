import React from 'react';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const stats = [
  { icon: TrendingUp, label: 'Total Sales', value: '$24,563', change: '+12.5%' },
  { icon: Users, label: 'Active Users', value: '1,234', change: '+3.2%' },
  { icon: DollarSign, label: 'Revenue', value: '$12,345', change: '+8.1%' },
  { icon: Activity, label: 'Engagement', value: '86%', change: '+4.6%' },
];

export function Dashboard() {
  return (
    <main className="flex-1 p-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value, change }) => (
          <div key={label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <Icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-green-600">{change}</span>
              <span className="text-sm text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center py-3 border-b border-gray-100 last:border-0">
              <img
                src={`https://source.unsplash.com/random/40x40?sig=${i}`}
                alt="User"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">User Activity {i}</p>
                <p className="text-sm text-gray-500">Completed action {i}</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">2h ago</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}