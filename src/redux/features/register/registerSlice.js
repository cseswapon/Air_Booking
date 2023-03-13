import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
      steppers: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { steppers } = registerSlice.actions;

export default registerSlice.reducer;
