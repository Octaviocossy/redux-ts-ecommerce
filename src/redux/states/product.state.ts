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
    _setProducts: (_, action) => {
      return { products: action.payload, isLoading: false };
    },
    _handleProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    _handleLoading: (state) => {
      return { ...state, isLoading: true };
    },
  },
});

export const { _setProducts, _handleLoading, _handleProducts } =
  productState.actions;
