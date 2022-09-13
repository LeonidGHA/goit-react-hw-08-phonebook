import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getValue(_, { payload }) {
      return payload;
    },
  },
});
export const { getValue } = filter.actions;

export default filter.reducer;
