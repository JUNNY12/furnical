import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice"
import favoriteReducer from "./slice/favoriteSlice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer,
    auth: authReducer,
    cart:cartReducer,
    favorite:favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    serializeableCheck: false
});