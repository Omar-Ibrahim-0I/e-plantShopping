import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name,
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 0 });
      }
    },
    removeItem: (state, action) => {
      state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name,
      );

      if (existingItem && action.payload.quantity > 0) {
        existingItem.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
