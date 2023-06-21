import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  email: "",
  contactNumber: "",
  image: null,
};

const profileSettingSlice = createSlice({
  name: "profileSettings",
  initialState,
  reducers: {
    updateCompanyName: (state, { payload }) => {
      state.company = payload;
    },
    updateEmail: (state, { payload }) => {
      state.email = payload;
    },
    updateContactNumber: (state, { payload }) => {
      state.contactNumber = payload;
    },
  },
});

export const { updateCompanyName, updateEmail, updateContactNumber } =
    profileSettingSlice.actions;
  
export default profileSettingSlice.reducer;
