// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice.ts'; // Correct path

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
