import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await axios.post(`users/signup`, { ...user });
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post(`users/login`, { ...user });
    token.set(data.token);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('users/logout', async () => {
      token.unset();
    });
  } catch (error) {
    console.log(error);
  }
});

export const takeCurrentUser = createAsyncThunk(
  'auth/renoot',
  async (_, thunkApi) => {
    // console.log(thunkApi);
    // console.log(thunkApi.getState());
    const state = thunkApi.getState();
    const localStorToken = state.auth.token;
    if (!localStorToken) {
      return thunkApi.rejectWithValue();
    }
    token.set(localStorToken);
    try {
      const { data } = await axios.get('users/current');

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
