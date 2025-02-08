import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./plantSlice";

export const store = configureStore({
  reducer: {
    plant: plantReducer,
  },
});

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;