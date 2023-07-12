import {createSlice} from '@reduxjs/toolkit';
import ItemDetails from '../scenes/itemDetails/ItemDetails';

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state,action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            const newItem = action.payload.item;
            const existingItemIndex = state.cart.findIndex(
              (item) => item.id === newItem.id
            );
          
            if (existingItemIndex !== -1) {
              state.cart[existingItemIndex].count++;
            } else {
              state.cart.push(newItem);
            }
          },
          


        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id) {
                    item.count++;
                }
                return item;
            })
        },

        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            })
        },

        setIsCartOpen: (state)=> {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});


export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;