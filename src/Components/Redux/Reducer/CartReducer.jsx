import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cartValues: [],
    totalPrice: 0
}
const CartReducer = createSlice({
    name: "CartReducer",
    initialState,
    reducers: {
        incrementcart: (state, action) => {
            state.cartValues.push(action.payload)
            const Price = state.cartValues.map(data => data.itemPrice)
            state.totalPrice = Price.reduce((a, b) => a + b)
        },
        decrementcart: (state, action) => {
            const index = state.cartValues.findIndex(obj => obj.itemTitle === action.payload.itemTitle)
            if (index > -1) {
                state.cartValues.splice(index, 1)
            }
    
            const Price = state.cartValues.map(data => data.itemPrice)
            state.totalPrice = Price.reduce((a, b) => a + b)
        }
    }
})
export const { incrementcart, decrementcart } = CartReducer.actions;
export default CartReducer.reducer;