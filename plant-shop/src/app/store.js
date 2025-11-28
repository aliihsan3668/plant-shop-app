import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'; // Import your cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your cart reducer here
  },
});

export default store;