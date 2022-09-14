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
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [registration.rejected]: (state, { payload }) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [logIn.fulfilled]: (_, { payload }) => {
      const state = { ...payload, isLoggedIn: true };
      return state;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [logOut.fulfilled]: () => {
      return initialState;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [takeCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [takeCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default authSlice.reducer;