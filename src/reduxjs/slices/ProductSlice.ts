import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Product = {
  id: string;
  name: string;
  price: string;
};

type ProductsState = {
  products: Product[];
};

const initialState: ProductsState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'productsq',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ name: string; price: string }>) => {
      const newProduct = {
        id: Math.random().toString(),
        name: action.payload.name,
        price: action.payload.price,
      };
      state.products.push(newProduct);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;

export default productSlice.reducer;
