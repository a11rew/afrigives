 
import { createSlice } from '@reduxjs/toolkit';

export interface DonationState {
  progress: number;
  imageSource: string;
  homeAddress: string;
  number: string;
  pickupDate: string;
}

const initialState: DonationState = {
  progress: 0,
  imageSource: '',
  homeAddress: '',
  number: '',
  pickupDate: '',
};

export const donationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    moveForward: (state) => {
      state.progress += 1;
    },
    setImage: (state, { payload }) => {
      state.imageSource = payload;
    },
    setDetails: (state, { payload }) => {
      state.homeAddress = payload.homeAddress;
      state.number = payload.number;
      state.pickupDate = payload.pickupDate;
    },
  },
});

export const { moveForward, setImage } = donationSlice.actions;

export default donationSlice.reducer;
