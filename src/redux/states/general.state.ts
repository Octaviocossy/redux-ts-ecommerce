import { createSlice } from '@reduxjs/toolkit';

import { IGeneralStore } from '../../models';

const GeneralEmptyState: IGeneralStore = {
  error: null,
};

export const generalState = createSlice({
  name: 'general',
  initialState: GeneralEmptyState,
  reducers: {
    setError: (_, action) => {
      return { error: action.payload };
    },
    clearError: () => {
      return { error: null };
    },
  },
});

export const { setError, clearError } = generalState.actions;
