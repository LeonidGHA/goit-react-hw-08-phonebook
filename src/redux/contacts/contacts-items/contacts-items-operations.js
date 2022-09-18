import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      const statusErr = error.response.status;
      if (statusErr === 404) {
        Notiflix.Notify.failure('The user collection does not exist.');
      }
      if (statusErr === 500) {
        Notiflix.Notify.warning('server error. try again later');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/post',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('contacts', contact);
      // console.log(data);

      return data;
    } catch (error) {
      const statusErr = error.response.status;
      if (statusErr === 400) {
        Notiflix.Notify.failure('User creation error try again.');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${id}`);
      Notiflix.Notify.success(`Deleted a contact`);
      return id;
    } catch (error) {
      const statusErr = error.response.status;
      if (statusErr === 404) {
        Notiflix.Notify.failure('The user collection does not exist.');
      }
      if (statusErr === 500) {
        Notiflix.Notify.warning('server error. try again later');
      }
      return rejectWithValue(error.message);
    }
  }
);

export const renameContact = createAsyncThunk(
  'contacts/patch',
  async ({ id, user }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`contacts/${id}`, user);

      return data;
    } catch (error) {
      const statusErr = error.response.status;
      if (statusErr === 400) {
        Notiflix.Notify.failure('Contact changes failed, try again.');
      }

      return rejectWithValue(error.message);
    }
  }
);
