import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { RootState } from "../store";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    filterModalIsOpen: false,
    componentName: null,
  } as {
    isOpen: boolean;
    filterModalIsOpen: boolean;
    componentName: ReactNode;
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.componentName = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.componentName = null;
    },
    openFilterModal: (state, action) => {
      state.filterModalIsOpen = true;
    },
    closeFilterModal: (state) => {
      state.filterModalIsOpen = false;
    },
  },
});

export const { openModal, closeModal, openFilterModal, closeFilterModal } =
  modalSlice.actions;

export default modalSlice.reducer;

export const selectIsOpen = (state: RootState) => state.modalSlice.isOpen;
export const selectFilterModalIsOpen = (state: RootState) =>
  state.modalSlice.filterModalIsOpen;
export const selectComponentName = (state: RootState) =>
  state.modalSlice.componentName;
