import { configureStore } from '@reduxjs/toolkit';

import { IAppStore } from '../models';

import { generalState, productState, cartState } from './states';

const Store = configureStore<IAppStore>({
  reducer: {
    product: productState.reducer,
    cart: cartState.reducer,
    general: generalState.reducer,
  },
});

export default Store;
