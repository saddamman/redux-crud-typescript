import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    counter: productSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




export default store;
