import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  source: "roundTrip",
  destinationTo: "",
  destinationFrom: "",
  startDate: "",
  EndDate: "",
};

export const roundTripSlice = createSlice({
  name: "roundTrip",
  initialState,
  reducers: {
    destinationTo: (state, action) => {
      state.destinationTo = action.payload;
    },
    destinationFrom: (state, action) => {
      state.destinationFrom = action.payload;
    },
    destinationStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    destinationEndDate: (state, action) => {
      state.EndDate = action.payload;
    },
  },
});

export const {
  destinationStartDate,
  destinationEndDate,
  destinationFrom,
  destinationTo,
} = roundTripSlice.actions;

export default roundTripSlice.reducer;
