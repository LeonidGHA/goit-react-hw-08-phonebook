import { createSlice } from '@reduxjs/toolkit';

import { getContacts, postContact } from './contacts-items-operations';

const initialState = {
  itemsList: [],
  isLoading: false,
};

const itemsSlise = createSlice({
  name: 'items',
  initialState,
  extraReducers: {
    [getContacts.fulfilled]: (state, { payload }) => {
      state.itemsList = payload;
      state.isLoading = false;
    },
    [postContact.fulfilled]: (state, { payload }) => {
      state.itemsList = [...state.itemsList, payload];
      state.isLoading = false;
    },
  },
});

export default itemsSlise.reducer;
