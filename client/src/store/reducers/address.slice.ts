import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  address: "",
  additional_info: "",
  comment: "",
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    changeAddress: (state, action) => {
      const newState = { ...state, ...action.payload };
      return newState;
    },
  },
});

export const addressReducer = addressSlice.reducer;
export const { changeAddress } = addressSlice.actions;
