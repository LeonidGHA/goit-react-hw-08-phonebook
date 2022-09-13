import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const getContacts = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const postContact = createAsyncThunk('contacts/post', async contact => {
  try {
    const { data } = await axios.post('contacts', contact);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    const { data } = await axios.delete(`contacts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const renameContact = createAsyncThunk(
  'contacts/patch',
  async ({ id, user }) => {
    try {
      const { data } = await axios.patch(`contacts/${id}`, user);
      return data;
    } catch (error) {}
  }
);
