import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const filterInitialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      state.value = '';
    });
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
