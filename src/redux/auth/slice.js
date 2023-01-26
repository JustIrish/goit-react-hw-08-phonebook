import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authIsLoading: false,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.authIsLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.authIsLoading = false;
        state.authError = null;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
        state.authIsLoading = true;
      })
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, refreshUser.rejected),
        (state, action) => {
          state.authError = action.payload;
          state.authIsLoading = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
