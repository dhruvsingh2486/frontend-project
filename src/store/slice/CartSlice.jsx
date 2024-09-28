import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    // cartItems: [], // at the begining use this  but after localstoraage use this
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalqty: 0,
    cartTotalprice:0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addtoCart(state,action) {
            // console.log(action.payload);
            // state.cartItems.push(action.payload)
            const itemindex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemindex>=0) {
                state.cartItems[itemindex].cartQty +=1
            }
            else {
               let tempProductItem = {...action.payload, cartQty:1};
               state.cartItems.push(tempProductItem);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseCart(state,action){
            const itemindex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id);

                if (state.cartItems[itemindex].cartQty>1) {
                    
                    state.cartItems[itemindex].cartQty -=1
                }
                else if (state.cartItems[itemindex].cartQty===1) {
                    const nextCart = state.cartItems.filter(
                        (item) => item.id !== action.payload.id
                    );
                    state.cartItems = nextCart;
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    }
})



export const { addtoCart, decreaseCart} = cartSlice.actions
export default cartSlice.reducer;