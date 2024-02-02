import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../cartSlice";
import { authReducer } from "../authSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
