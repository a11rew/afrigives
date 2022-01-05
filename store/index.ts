import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import donationReducer from './donationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: donationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
