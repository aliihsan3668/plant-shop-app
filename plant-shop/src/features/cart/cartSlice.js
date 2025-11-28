import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of { id, name, price, quantity, image }
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload; // This will be the plant object
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;
      state.totalAmount += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image, // Add image to cart item
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload; // This will be the plant ID
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) return; // Should not happen if UI is correct

      state.totalQuantity--;
      state.totalAmount -= existingItem.price; // Subtract unit price

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    deleteItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);

        if (existingItem) {
            state.totalQuantity -= existingItem.quantity;
            state.totalAmount -= existingItem.totalPrice;
            state.items = state.items.filter(item => item.id !== id);
        }
    },
  },
});

export const { addItemToCart, removeItemFromCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;