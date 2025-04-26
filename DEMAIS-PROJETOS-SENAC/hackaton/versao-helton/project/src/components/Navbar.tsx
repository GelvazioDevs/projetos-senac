import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Users, Package, History, Settings, Calculator } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <Home className="w-5 h-5 mr-1" />
              Início
            </NavLink>
            <NavLink
              to="/query"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <Search className="w-5 h-5 mr-1" />
              Consulta NCM
            </NavLink>
            <NavLink
              to="/tax-calculation"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <Calculator className="w-5 h-5 mr-1" />
              Cálculo de Impostos
            </NavLink>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <Users className="w-5 h-5 mr-1" />
              Clientes
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <Package className="w-5 h-5 mr-1" />
              Produtos
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <History className="w-5 h-5 mr-1" />
              Histórico
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <Settings className="w-5 h-5 mr-1" />
              Configurações
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;