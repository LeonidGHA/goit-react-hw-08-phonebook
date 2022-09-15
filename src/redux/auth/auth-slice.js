import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  logIn,
  logOut,
  takeCurrentUser,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: true,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [registration.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [registration.rejected]: (state, { payload }) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = payload;
    },
    [logIn.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      // const state = { ...payload, isLoggedIn: true };
      // return state;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
      state.isLoading = false;
      // return initialState;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [takeCurrentUser.pending]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = true;
    },
    [takeCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [takeCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
