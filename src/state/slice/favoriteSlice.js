import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"


const initialState = {
    favoriteItems:localStorage.getItem('favoriteItems')?
    JSON.parse(localStorage.getItem('favoriteItems'))
    :
    [],
}

const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addFavorite(state, action){
            const existingItem = state.favoriteItems.findIndex((item) => item.id === action.payload.id)
            if (existingItem >= 0 ){
                const removeFavorite = state.favoriteItems.filter((item) => item.id !== action.payload.id)
                state.favoriteItems = removeFavorite
                
                toast.info("Unlisted from Wishlist",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 100,
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
                let tempFavorite ={
                    ...action.payload
                }
                state.favoriteItems.push(tempFavorite)
                toast.info("Added to  Wishlist",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 100,
                    closeButton:false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                })
            }
            localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems))
        },
        removeFavorite(state, action){
            const existingItem = state.favoriteItems.findIndex((item) => item.id === action.payload.id)
            if (existingItem >= 0 ){
                const removeFavorite = state.favoriteItems.filter((item) => item.id !== action.payload.id)
                state.favoriteItems = removeFavorite

                toast.info("Product Removed",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 100,
                    closeButton:false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                })
            }
            localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems))
        }
    }
})

export const {addFavorite, removeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer


