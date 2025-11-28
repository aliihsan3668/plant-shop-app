import React from 'react';
import { Link } from 'react-router-dom'; // We'll install react-router-dom next

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Green Thumb Delights</h1>
        <p>
          Welcome to Green Thumb Delights, your online sanctuary for beautiful and healthy houseplants!
          Whether you're a seasoned plant parent or just starting your green journey,
          we offer a curated selection to bring life and tranquility into your home.
          Explore our vibrant collection and find your perfect leafy companion today.
        </p>
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;