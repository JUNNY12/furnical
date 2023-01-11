import { createSlice } from "@reduxjs/toolkit";
import {auth} from "../../services/auth"

const initialState = {
    token: localStorage.getItem("furnical-token") ? localStorage.getItem("furnical-token") : null,
    user: localStorage.getItem("furnical-user") ? JSON.parse(localStorage.getItem("furnical-user")) : null,
    isAuthenticated:localStorage.getItem("furnical-token") ? true : false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem("furnical-token", action.payload.token);
            localStorage.setItem("furnical-user", JSON.stringify(action.payload.user));
        },
        logout(state, action) {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("furnical-token");
            localStorage.removeItem("furnical-user")
        }
    },
    extraReducers: (builder) => {
        // if login endpoint is called, update the state with the response.
        builder.addMatcher( auth.endpoints.login.matchFulfilled,
          (state, action) => {
            const { user, jwt } = action.payload;
            state.token = jwt;
            state.user = user;
            localStorage.setItem("furnical-token", jwt);
            localStorage.setItem("furnical-user", JSON.stringify(action.payload.user));
            state.isAuthenticated = true;
          },
        );
        
      },
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer; 