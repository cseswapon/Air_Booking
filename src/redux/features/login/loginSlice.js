import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
  token: "",
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
    }
  },
});

export const { createEmail, createPassword,generateToken } = loginSlice.actions;

export default loginSlice.reducer;
