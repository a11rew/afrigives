import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface DonationState {
  imageSource: string | null;
  homeAddress: string | null;
  number: string | null;
  pickupDate: string | null;
  personalization: Personalization | null;
}

export interface Personalization {
  getLocationUpdates: boolean | null;
  rememberPreferences: boolean | null;
}

const initialState: DonationState = {
  imageSource: null,
  homeAddress: null,
  number: null,
  pickupDate: null,
  personalization: null,
};

export const donationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setImage: (state, { payload }: PayloadAction<string>) => {
      state.imageSource = payload;
    },
    setDetails: (
      state,
      {
        payload,
      }: PayloadAction<
        Pick<DonationState, 'homeAddress' | 'number' | 'pickupDate'>
      >
    ) => {
      state.homeAddress = payload.homeAddress;
      state.number = payload.number;
      state.pickupDate = payload.pickupDate;
    },
    setPersonalization: (
      state,
      { payload }: PayloadAction<Personalization>
    ) => {
      state.personalization = payload;
    },
  },
});

export const { setImage, setDetails, setPersonalization } =
  donationSlice.actions;

export default donationSlice.reducer;
