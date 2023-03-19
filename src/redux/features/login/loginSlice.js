import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
  userInfo: null,
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
    infoUser: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

export const { createEmail, createPassword, infoUser } = loginSlice.actions;

export default loginSlice.reducer;
