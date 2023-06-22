import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import modalSlice from "./reducers/modalSlice";
import { cartReducer } from "./reducers/cart.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { addressReducer } from "./reducers/address.slice";
import { baseApi } from "./services/base.api";
import { orderReducer } from "./reducers/order.slice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    modalSlice,
    authSlice,
    order: orderReducer,
    cart: cartReducer,
    address: addressReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
  devTools: import.meta.env.MODE !== "production",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
