import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    foodItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.foodItem.find(foodItem => foodItem.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.foodItem.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.foodItem = state.foodItem.filter(foodItem => foodItem.id !== itemId);
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.foodItem.find(foodItem => foodItem.id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.foodItem.find(foodItem => foodItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      
    },
    removeAllFromCart: state => {
      state.foodItem = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart} = cartSlice.actions;

export default cartSlice.reducer;