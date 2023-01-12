import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem('cartItems')? 
    JSON.parse(localStorage.getItem('cartItems'))
    :[],
    totalQuantity:0,
    totalAmount:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            // checking for the index of an item
            const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            
            if(existingIndex >= 0){
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1
                }
                toast.info("Increased Product quantity",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    closeButton:false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                })
            }
            else{
                let tempProductItem ={
                    ...action.payload,
                    cartQuantity:1,
                };
                state.cartItems.push(tempProductItem)
                toast.success("Product added to cart", 
                {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                closeButton:false,
                progress: undefined,
                theme: "light",
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        //reducing cart
        decreaseCart(state,action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.error("Decrease product quantity", 
                {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    closeButton:false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                   }
                )
            }
            else if (state.cartItems[itemIndex].cartQuantity ===1){
                const deleteItem = state.cartItems.filter((item) => item.id !== action.payload.id)
                state.cartItems = deleteItem
                toast.error("Product removed from cart", 
                {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    closeButton:false,
                    progress: undefined,
                    theme: "light",
                   }
                )
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        // removeing Item
        removeFromCart(state,action){
            state.cartItems.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    const  newItem = state.cartItems.filter((item) => item.id !== cartItem.id)
                    state.cartItems= newItem;
                    toast.error("Product removed from cart", 
                    {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        closeButton:false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                       }
                    )
                }
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                return state;
            })
        },

        //clearing the cart 
        clearCart(state,action){
            state.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        } ,
        // Getting total items and Price
        getTotals(state, action){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) =>{

                const {price, cartQuantity} = cartItem
                const priceTotal = price * cartQuantity;

                cartTotal.total += priceTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal
            },
            {
                total:0,
                quantity:0
            }
            );
            total = parseFloat(total.toFixed(2));
            state.totalQuantity = quantity;
            state.totalAmount = total;

        }     
    }

})

export const {addToCart, decreaseCart, removeFromCart, getTotals, clearCart} = cartSlice.actions
export default cartSlice.reducer