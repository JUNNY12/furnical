import { createSlice } from "@reduxjs/toolkit";
import {auth} from "../../services/auth"

const initialState = {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem("marketplace-token", action.payload.token);
            localStorage.setItem("marketplace-user", JSON.stringify(action.payload.user));
        },
        logout(state, action) {
            state.token = null;
            state.user = null;
            localStorage.removeItem("marketplace-token");
            localStorage.removeItem("marketplace-user");
        }
    },
    extraReducers: (builder) => {
        // if login endpoint is called, update the state with the response.
        builder.addMatcher(
            auth.endpoints.login.matchFulfilled,
          (state, action) => {
            const { user, jwt } = action.payload;
            state.token = jwt;
            state.user = user;
            localStorage.setItem("marketplace-token", jwt);
            localStorage.setItem("marketplace-user", JSON.stringify(action.payload.user));
            state.isAuthenticated = true;
          },
        );
        
      },
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer; 