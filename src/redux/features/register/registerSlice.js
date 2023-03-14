import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
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
    password: (state, { payload }) => {
      state.password = payload;
    },
    confirmPass: (state, { payload }) => {
      state.confirmPass = payload;
    },
  },
});

export const { steppers, password, confirmPass } = registerSlice.actions;

export default registerSlice.reducer;
