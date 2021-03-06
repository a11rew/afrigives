/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiError, Session, User } from '@supabase/supabase-js';
import { supabase } from '../services/supabase';

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: {
    signUp: string | null;
    signIn: string | null;
  };
}

const initialState: AuthState = {
  user: supabase.auth.user(),
  session: supabase.auth.session(),
  loading: false,
  error: {
    signUp: null,
    signIn: null,
  },
};

export interface SignupParams {
  email: string;
  name: string;
  password: string;
}

export const supabaseSignUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, name, password }: SignupParams, { rejectWithValue }) => {
    try {
      const { user, session, error } = await supabase.auth.signUp(
        {
          email,
          password,
        },
        {
          data: {
            name,
          },
        }
      );

      if (error) throw error;

      return { user, session, error };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const supabaseSignIn = createAsyncThunk(
  'auth/signIn',
  async (
    { email, password }: Omit<SignupParams, 'name'>,
    { rejectWithValue }
  ) => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) throw error;

      return { user, session, error };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshAuth: (state) => {
      state.user = supabase.auth.user();
      state.session = supabase.auth.session();
    },
    logout: (state) => {
      state.user = null;
      state.session = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(supabaseSignUp.pending, (state) => {
      state.error.signUp = null;
      state.loading = true;
    });

    builder.addCase(supabaseSignUp.fulfilled, (state, { payload }) => {
      state.session = payload.session;
      state.user = payload.user;
      state.loading = false;
    });

    builder.addCase(supabaseSignUp.rejected, (state, { payload }) => {
      state.error.signUp = (payload as ApiError).message;
      state.loading = false;
    });

    builder.addCase(supabaseSignIn.pending, (state) => {
      state.error.signIn = null;
      state.loading = true;
    });

    builder.addCase(supabaseSignIn.fulfilled, (state, { payload }) => {
      state.session = payload.session;
      state.user = payload.user;
      state.loading = false;
    });

    builder.addCase(supabaseSignIn.rejected, (state, { payload }) => {
      state.error.signIn = (payload as ApiError).message;
      state.loading = false;
    });
  },
});

export const { refreshAuth, logout } = authSlice.actions;

export default authSlice.reducer;
