import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  adult: null,
  infant: null,
  child: null,
};
export const passInfo = createSlice({
  initialState,
  name: "Passenger Information",
  reducers: {
    addAdult: (state, { payload }) => {
      state.adult = payload;
    },
    addInfant: (state, { payload }) => {
      state.infant = payload;
    },
    addChild: (state, { payload }) => {
      state.child = payload;
    },
  },
});

export const { addAdult, addInfant, addChild } = passInfo.actions;

export default passInfo.reducer;
