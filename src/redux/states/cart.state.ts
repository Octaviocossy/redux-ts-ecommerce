import { createSlice } from '@reduxjs/toolkit';

import { ICartStore } from '../../models';

const CartEmptyState: ICartStore = {
  products: [],
};

export const cartState = createSlice({
  name: 'cart',
  initialState: CartEmptyState,
  reducers: {
    _handleProductCart: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

export const { _handleProductCart } = cartState.actions;
