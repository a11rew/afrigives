import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  skipAuth: boolean;
}

const initialState: AuthState = {
  skipAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    skipAuth: (state) => {
      state.skipAuth = true;
    },
    resetSkipAuth: (state) => {
      state.skipAuth = false;
    },
  },
});

export const { skipAuth, resetSkipAuth } = authSlice.actions;

export default authSlice.reducer;
