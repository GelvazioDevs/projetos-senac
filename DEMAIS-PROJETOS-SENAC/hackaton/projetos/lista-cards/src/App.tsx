import React from 'react';
import { CardList } from './components/CardList';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sales Campaigns
          </h1>
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default App;