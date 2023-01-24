import { configureStore } from '@reduxjs/toolkit';

import { IAppStore } from '../models';

import { generalState, productState } from './states';

const Store = configureStore<IAppStore>({
  reducer: {
    product: productState.reducer,
    general: generalState.reducer,
  },
});

export default Store;
