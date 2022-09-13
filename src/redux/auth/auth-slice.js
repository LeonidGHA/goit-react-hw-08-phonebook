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
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (_, { payload }) => {
      const state = { ...payload, isLoggedIn: false };
      return state;
    },
    [logOut.fulfilled]: () => {
      return initialState;
    },
    [takeCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
