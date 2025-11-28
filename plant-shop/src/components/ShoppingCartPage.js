import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../features/cart/cartSlice';
import Header from './Header'; // Import the Header

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleIncreaseQuantity = (item) => {
    // addItemToCart increments quantity if item exists, otherwise adds as new
    dispatch(addItemToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  const handleCheckout = () => {
    alert('Checkout feature coming soon!'); // Task 18: Checkout button message
  };

  return (
    <div>
      <Header /> {/* Task 10: Header displays on this page */}
      <div className="shopping-cart-page">
        <h2>Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Time to find some green!</p>
            <Link to="/products" className="continue-shopping-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              {/* Task 13: Total number of plants in the cart */}
              <p>Total Items: <strong>{totalQuantity}</strong></p>
              {/* Task 14: Total cost of all items in the cart */}
              <p>Total Cost: <strong>${totalAmount.toFixed(2)}</strong></p>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  {/* Task 15: Each plant type displays thumbnail, name, unit price */}
                  <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      {/* Task 16: Increase button */}
                      <button onClick={() => handleDecreaseQuantity(item.id)} className="quantity-button">-</button>
                      <span>{item.quantity}</span>
                      {/* Task 17: Decrease button */}
                      <button onClick={() => handleIncreaseQuantity(item)} className="quantity-button">+</button>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    {/* Task 19: A delete button */}
                    <button onClick={() => handleDeleteItem(item.id)} className="delete-button">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions-bottom">
              {/* Task 18: A checkout button */}
              <button onClick={handleCheckout} className="checkout-button">Checkout</button>
              {/* Task 20: A continue shopping button */}
              <Link to="/products" className="continue-shopping-button">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;