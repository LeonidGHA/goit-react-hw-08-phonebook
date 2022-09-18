import { createSlice } from '@reduxjs/toolkit';

import {
  getContacts,
  postContact,
  deleteContact,
  renameContact,
} from './contacts-items-operations';

const initialState = {
  itemsList: [],
  isLoading: false,
  error: null,
};

const itemsSlise = createSlice({
  name: 'items',
  initialState,
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.itemsList = payload;
      state.isLoading = false;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [postContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [postContact.fulfilled]: (state, { payload }) => {
      state.itemsList = [...state.itemsList, payload];
      state.isLoading = false;
    },
    [postContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.itemsList = state.itemsList.filter(el => el.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [renameContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [renameContact.fulfilled]: (state, { payload }) => {
      // state.itemsList = state.itemsList.map(el =>
      //   el.id === payload.id ? payload : el
      // );

      state.itemsList = state.itemsList.reduce((prevstate, el) => {
        if (el.id === payload.id) {
          return [...prevstate, payload];
        }
        return [...prevstate, el];
      }, []);
      state.isLoading = false;
    },
    [renameContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default itemsSlise.reducer;
