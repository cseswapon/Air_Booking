import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  company: "",
  email: "",
  password: "",
  token: "",
  contactNumber: "",
  role: "",
  image: "",
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
    setCompany: (state, { payload }) => {
      state.company = payload;
    },
    loadedImage: (state, { payload }) => {
      state.image = payload;
    },
  },
});

export const {
  createEmail,
  createPassword,
  generateToken,
  userRole,
  contactNumber,
  setCompany,
  loadedImage,
} = loginSlice.actions;

export default loginSlice.reducer;
