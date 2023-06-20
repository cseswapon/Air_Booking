import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
  token: "",
  contactNumber:"",
  role: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    createEmail: (state, { payload }) => {
      state.email = payload;
    },
    createPassword: (state, { payload }) => {
      state.password = payload;
    },
    generateToken: (state, { payload }) => {
      state.token = payload;
    },
    contactNumber: (state, { payload }) => {
      state.contactNumber = payload;
    },
    userRole: (state, { payload }) => {
      state.role = payload;
    },
  },
});

export const { createEmail, createPassword, generateToken, userRole,contactNumber } =
  loginSlice.actions;

export default loginSlice.reducer;
