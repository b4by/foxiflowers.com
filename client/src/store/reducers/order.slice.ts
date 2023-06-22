import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  cart: [],
  timestamp: new Date().setHours(new Date().getHours() + 3, 0, 0, 0),
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const newOrder = action.payload;
      return { ...state, ...newOrder };
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const { addOrder } = orderSlice.actions;
