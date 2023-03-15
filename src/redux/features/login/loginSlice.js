import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
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
  },
});

export const { createEmail, createPassword } = loginSlice.actions;

export default loginSlice.reducer;
