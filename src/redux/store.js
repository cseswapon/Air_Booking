import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import registerSlice from "./features/register/registerSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    register: registerSlice,
  },
});
