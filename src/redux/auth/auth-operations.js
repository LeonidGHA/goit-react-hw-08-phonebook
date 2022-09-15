import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`users/signup`, { ...user });
      token.set(data.token);

      Notiflix.Notify.success('You have a new Contact');
      // console.log(data);
      return data;
    } catch (error) {
      const statusErr = error.response.status;
      if (statusErr === 400) {
        Notiflix.Notify.failure('user creation error');
      }
      if (statusErr === 500) {
        Notiflix.Notify.warning('server error. try again later');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`users/login`, { ...user });
      token.set(data.token);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Login error');
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      token.unset();
      return;
    } catch (error) {
      const statusErr = error.response.status;
      if (statusErr === 500) {
        Notiflix.Notify.warning('server error. try again later');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const takeCurrentUser = createAsyncThunk(
  'auth/reboot',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const localStorToken = state.auth.token;

    if (!localStorToken) {
      return rejectWithValue(`token is invalid`);
    }
    token.set(localStorToken);
    try {
      const { data } = await axios.get('users/current');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
