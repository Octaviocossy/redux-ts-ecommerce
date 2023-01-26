import { createSlice } from '@reduxjs/toolkit';

import { ICartStore } from '../../models';

const CartEmptyState: ICartStore = {
  products: [],
};

export const cartState = createSlice({
  name: 'cart',
  initialState: CartEmptyState,
  reducers: {
    addProductToCart: (state, action) => {
      return { ...state, products: [...state.products, action.payload] };
    },
  },
});

export const { addProductToCart } = cartState.actions;
