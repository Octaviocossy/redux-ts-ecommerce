import { createSlice } from '@reduxjs/toolkit';

import { IGeneralStore } from '../../models';

const GeneralEmptyState: IGeneralStore = {
  error: null,
};

export const generalState = createSlice({
  name: 'general',
  initialState: GeneralEmptyState,
  reducers: {
    _setError: (_, action) => {
      return { error: action.payload };
    },
    _clearError: () => {
      return { error: null };
    },
  },
});

export const { _setError, _clearError } = generalState.actions;
