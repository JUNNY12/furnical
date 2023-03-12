import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        currentPage: 1,
        totalPage:null
    },
    reducers:{
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setTotalPage: (state, action) => {
            state.totalPage = action.payload
        }
    }
})

export const { setCurrentPage, setTotalPage } = paginationSlice.actions
export default paginationSlice.reducer