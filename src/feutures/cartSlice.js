import { createSlice } from "@reduxjs/toolkit";

export const producrCartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.products.findIndex(
        (prod) => prod.id === action.payload.id
      );

      if (productIndex === -1) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
          state.products[productIndex].quantity += 1
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(prod => prod.id !== action.payload)
    },
    removeQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (prod) => prod.id === action.payload
      )

      if(state.products[productIndex].quantity >= 2) {
        state.products[productIndex].quantity -= 1
      }
    },
  },
});

export const { addToCart, removeFromCart, removeQuantity } = producrCartSlice.actions;

export default producrCartSlice.reducer;
