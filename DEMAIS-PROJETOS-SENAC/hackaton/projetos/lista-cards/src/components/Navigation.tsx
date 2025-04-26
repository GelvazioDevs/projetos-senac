import React from 'react';
import { Users, Package, TrendingUp } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 h-16">
          <a
            href="#clients"
            className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:border-blue-600 border-b-2 border-transparent"
          >
            <Users className="w-5 h-5 mr-2" />
            <span className="font-medium">Clientes</span>
          </a>
          
          <a
            href="#products"
            className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:border-blue-600 border-b-2 border-transparent"
          >
            <Package className="w-5 h-5 mr-2" />
            <span className="font-medium">Produtos</span>
          </a>
          
          <a
            href="#sales"
            className="inline-flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 hover:border-blue-600 border-b-2 border-transparent"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="font-medium">Ações de Vendas</span>
          </a>
        </div>
      </div>
    </nav>
  );
}