import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer,
    auth: authReducer,
    cart:cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    serializeableCheck: false
});