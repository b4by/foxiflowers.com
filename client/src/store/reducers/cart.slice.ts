import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productInCart = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        if (action.payload.quantity) {
          state.products.push({ ...action.payload });
        } else {
          state.products.push({ ...action.payload, quantity: 1 });
        }
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);

      item.quantity--;
    },
    removeProduct: (state, action) => {
      const removeItem = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
