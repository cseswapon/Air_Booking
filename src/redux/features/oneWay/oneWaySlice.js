import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  source: "oneway",
  destinationTo: "",
  destinationFrom: "",
  date: "",
};

export const oneWaySlice = createSlice({
  name: "oneway",
  initialState,
  reducers: {
    destinationTo: (state, action) => {
      state.destinationTo = action.payload;
    },
    destinationFrom: (state, action) => {
      state.destinationFrom = action.payload;
    },
    destinationDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { destinationDate, destinationFrom, destinationTo } =
  oneWaySlice.actions;

export default oneWaySlice.reducer;
