import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  adult: {
    fname: "",
    lname: "",
    dob: "",
  },
  fname: "",
  lname: "",
  infant: [],
  child: [],
};
export const passInfo = createSlice({
  initialState,
  name: "Passenger Information",
  reducers: {
    addAdult: (state, { payload }) => {
      state.adult.fname = payload.fname;
      state.adult.lname = payload.lname;
      state.adult.dob = payload.dob;
    },
    addInfant: (state, { payload: { index, value } }) => {
      const obj = {};
      obj[index] = value;
      state.infant.push(obj);
      /* const { index, value } = payload;
      state.infant[index] = value; */
    },
  },
});

export const { addAdult, addInfant } = passInfo.actions;

export default passInfo.reducer;
