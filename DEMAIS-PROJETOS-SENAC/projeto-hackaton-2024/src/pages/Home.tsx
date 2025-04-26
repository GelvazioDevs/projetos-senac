import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, History, Settings, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [quickNCM, setQuickNCM] = React.useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickNCM) {
      navigate(`/query?code=${quickNCM}`);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CalcTrib NCM</h1>
        <p className="text-xl text-gray-600">Your comprehensive NCM tax calculation solution</p>
      </div>

      <form onSubmit={handleQuickSearch} className="max-w-xl mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            value={quickNCM}
            onChange={(e) => setQuickNCM(e.target.value)}
            placeholder="Quick NCM lookup (e.g., 6109.10.00)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            Search <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/query')}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Calculator className="w-8 h-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">NCM Query</h2>
          <p className="text-gray-600">Calculate taxes for specific NCM codes</p>
        </button>

        <button
          onClick={() => navigate('/history')}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <History className="w-8 h-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Query History</h2>
          <p className="text-gray-600">View your previous calculations</p>
        </button>

        <button
          onClick={() => navigate('/settings')}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Settings className="w-8 h-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-600">Customize your calculation preferences</p>
        </button>
      </div>
    </div>
  );
};

export default Home;