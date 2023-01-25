import { createSlice } from '@reduxjs/toolkit';

import { IProductStore } from '../../models';

const ProductsEmptyState: IProductStore = {
  products: [],
  isLoading: true,
};

export const productState = createSlice({
  name: 'product',
  initialState: ProductsEmptyState,
  reducers: {
    setProducts: (_, action) => {
      return { products: action.payload, isLoading: false };
    },
  },
});

export const { setProducts } = productState.actions;
