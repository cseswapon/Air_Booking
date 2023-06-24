import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  email: "",
  contactNumber: "",
};

const profileSettingSlice = createSlice({
  name: "profileSettings",
  initialState,
  reducers: {
    updateCompanyName: (state, { payload }) => {
      state.company = payload;
    },
    updateContactNumber: (state, { payload }) => {
      state.contactNumber = payload;
    },
    
  },
});

export const { updateCompanyName, updateContactNumber } =
    profileSettingSlice.actions;
  
export default profileSettingSlice.reducer;
