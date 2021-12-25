import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../services/supabase";

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: supabase.auth.user(),
  session: supabase.auth.session(),
  loading: false,
  error: null,
};

export interface SignupParams {
  email: string;
  name: string;
  password: string;
}

const supabaseSignUp = createAsyncThunk(
  "auth/signUp",
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
        },
      );

      if (error) throw error;

      return { user, session, error };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<AuthState>) => {
      state.session = action.payload.session;
      state.user = action.payload.user;
    },

    signOut: (state) => {
      state.session = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(supabaseSignUp.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(supabaseSignUp.fulfilled, (state, { payload }) => {
      state.session = payload.session;
      state.user = payload.user;
      state.loading = false;
    });

    builder.addCase(supabaseSignUp.rejected, (state, { payload }) => {
      state.error = payload as any;
      state.loading = false;
    });
  },
});

export const { signUp, signOut } = authSlice.actions;

export default authSlice.reducer;
