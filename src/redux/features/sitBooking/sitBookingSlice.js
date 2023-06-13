import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  booking: null,
};
export const sitBookingSlice = createSlice({
  initialState,
  name: "sitBooking",
  reducers: {
      sitBook: (state, { payload }) => {
          state.booking = payload
    },
  },
});

export const { sitBook } = sitBookingSlice.actions;

export default sitBookingSlice.reducer;
