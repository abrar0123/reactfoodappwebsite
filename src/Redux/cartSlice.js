import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { foodCart: [], cartItems: 0, showModel: false },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.foodCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex === -1) {
        state.foodCart.push(newProduct);
        state.cartItems++;
      } else {
        state.foodCart[findIndex].quant++;
        state.foodCart[findIndex].subtotal =
          state.foodCart[findIndex].price * state.foodCart[findIndex].quant;

        state.cartItems++;
      }
    },

    removeToCart: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.foodCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex !== -1) {
        if (state.foodCart[findIndex].quant > 0) {
          state.foodCart[findIndex].quant--;
          state.foodCart[findIndex].subtotal =
            state.foodCart[findIndex].price * state.foodCart[findIndex].quant;

          state.cartItems--;
        }
      }
    },
    deleteProduct: (state, action) => {
      const newProduct = action.payload;
      let findIndex = state.foodCart.findIndex((e) => e.id === newProduct.id);
      if (findIndex !== -1) {
        state.foodCart.splice(findIndex, 1);
      }
    },
    cartModel: (state, action) => {
      console.log("click handler");

      const model = action.payload.data;
      state.showModel = model;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
