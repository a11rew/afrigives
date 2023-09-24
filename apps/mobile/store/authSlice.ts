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
  },
});

export const { skipAuth } = authSlice.actions;

export default authSlice.reducer;
