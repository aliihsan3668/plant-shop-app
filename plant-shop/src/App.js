import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage'; // Uncomment this

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;