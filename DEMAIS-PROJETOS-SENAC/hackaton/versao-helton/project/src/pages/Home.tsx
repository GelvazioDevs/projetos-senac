import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, History, Settings } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo ao CalcTrib NCM
        </h1>
        <p className="text-lg text-gray-600">
          Sua solução completa para cálculos tributários
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <button
          onClick={() => navigate('/query')}
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Search className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Consulta NCM</h2>
          <p className="text-gray-600 text-center">
            Calcule impostos com base nos códigos NCM
          </p>
        </button>

        <button
          onClick={() => navigate('/history')}
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <History className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Histórico</h2>
          <p className="text-gray-600 text-center">
            Visualize suas consultas anteriores
          </p>
        </button>

        <button
          onClick={() => navigate('/settings')}
          className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Settings className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Configurações</h2>
          <p className="text-gray-600 text-center">
            Personalize suas preferências
          </p>
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Consulta Rápida NCM</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Digite o código NCM (ex: 6109.10.00)"
            className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={() => navigate('/query')}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Calcular
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;