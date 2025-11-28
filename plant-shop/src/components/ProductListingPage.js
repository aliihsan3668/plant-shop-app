import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import plants from '../data/plants'; // Import your plant data
import { addItemToCart } from '../features/cart/cartSlice';
import Header from './Header'; // We'll create this next

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItemToCart(plant));
  };

  const isPlantInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  // Group plants by category for Task 8
  const groupedPlants = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div>
      <Header /> {/* Header displays on this page */}
      <div className="product-listing-page">
        <h2>Our Green Collection</h2>
        {Object.keys(groupedPlants).map(category => (
          <div key={category} className="plant-category">
            <h3>{category}</h3>
            <div className="plant-grid">
              {groupedPlants[category].map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h4>{plant.name}</h4>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isPlantInCart(plant.id)}
                    className={`add-to-cart-button ${isPlantInCart(plant.id) ? 'added' : ''}`}
                  >
                    {isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;