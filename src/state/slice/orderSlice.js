import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    orderItems: localStorage.getItem("orderItems") ?
        JSON.parse(localStorage.getItem("orderItems")) :
        [],
}


const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToOrder(state, action) {

            const existingIndex = state.orderItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.orderItems[existingIndex] = {
                    ...state.orderItems[existingIndex],
                    orderQuantity: state.orderItems[existingIndex].orderQuantity + 1,
                };
            } else {
                let tempProductItem = {
                    ...action.payload,
                    orderQuantity: 1,
                    orderDate: new Date().toISOString(), // Add the current date to the product information
                    success: true // Add a success flag to the product information
                };
                state.orderItems.push(tempProductItem);
            }
            localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
        },
        clearOrder(state, action) {
            state.orderItems = [];
            localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
        },

        setOrderItemFailed(state, action) {
            const existingIndex = state.orderItems.findIndex((item) => item.id === action.payload.id);
            if (existingIndex >= 0) {
                state.orderItems[existingIndex] = {
                    ...state.orderItems[existingIndex],
                    orderQuantity: state.orderItems[existingIndex].orderQuantity + 1,
                };
            } else {
                let tempProductItem = {
                    ...action.payload,
                    orderQuantity: 1,
                    orderDate: new Date().toISOString(), // Add the current date to the product information
                    success: false 
                };
                state.orderItems.push(tempProductItem);
            }
            localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
        },

    }
})

export const {
    addToOrder,
    clearOrder,
    setOrderItemFailed
} = orderSlice.actions;

export default orderSlice.reducer;