import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { foodCart: [], cartItems: 9 },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.foodCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex === -1) {
        state.foodCart.push(newProduct);
      } else {
        state.foodCart[findIndex].quant++;
      }
    },
    removeToCart: (state, action) => {
      const newProduct = action.payload;

      let findIndex = state.foodCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex !== -1) {
        state.foodCart[findIndex].quant--;
      }
    },
    deleteProduct: (state) => {},
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
