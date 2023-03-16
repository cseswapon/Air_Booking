import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  companyName: "",
  personName: "",
  country: "bangladesh",
  division: "",
  district: [],
  districtValue:'',
  number: "",
  email:"",
  password: "",
  confirmPass: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    steppers: (state, action) => {
      state.step = action.payload;
    },
    companyName: (state, { payload }) => {
      state.companyName = payload;
    },
    personName: (state, { payload }) => {
      state.personName = payload;
    },
    country: (state, { payload }) => {
      state.country = payload;
    },
    division: (state, { payload }) => {
      state.division = payload;
    },
    district: (state, { payload }) => {
      state.district = payload;
    },
    districtValue: (state, { payload }) => {
      state.districtValue = payload;
    },
    number: (state, { payload }) => {
      state.number = payload;
    },
    email: (state, { payload }) => {
      state.email = payload;
    },
    password: (state, { payload }) => {
      state.password = payload;
    },
    confirmPass: (state, { payload }) => {
      state.confirmPass = payload;
    },
  },
});

export const {
  steppers,
  companyName,
  personName,
  country,
  division,
  district,
  districtValue,
  number,
  email,
  password,
  confirmPass,
} = registerSlice.actions;

export default registerSlice.reducer;
