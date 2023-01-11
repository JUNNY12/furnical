import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem('cart')
}