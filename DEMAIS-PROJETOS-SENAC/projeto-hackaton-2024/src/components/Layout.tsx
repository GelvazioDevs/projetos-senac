import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, Calculator, History, Settings } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-blue-600">
                <Home className="w-5 h-5 mr-1" />
                <span className="font-semibold">CalcTrib NCM</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/query" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
                <Calculator className="w-5 h-5 mr-1" />
                <span>Query</span>
              </Link>
              <Link to="/history" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
                <History className="w-5 h-5 mr-1" />
                <span>History</span>
              </Link>
              <Link to="/settings" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
                <Settings className="w-5 h-5 mr-1" />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;