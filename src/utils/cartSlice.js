import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers : {
        addItem : (state, action) => {
            state.push(action.payload)
        },
        removeItem : (state) => {
            state.pop()
        },
        clearItem : (state) => {
            state.length = 0
        }
    }
})

export const {addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer; 