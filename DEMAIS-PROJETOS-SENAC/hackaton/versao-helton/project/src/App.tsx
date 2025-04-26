import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Query from './pages/Query';
import CustomerRegistration from './pages/CustomerRegistration';
import ProductRegistration from './pages/ProductRegistration';
import TaxCalculation from './pages/TaxCalculation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<Query />} />
          <Route path="/customers" element={<CustomerRegistration />} />
          <Route path="/products" element={<ProductRegistration />} />
          <Route path="/tax-calculation" element={<TaxCalculation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;