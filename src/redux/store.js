import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApi } from "./features/api/apiSlice";
import counterSlice from "./features/counter/counterSlice";
import loginSlice from "./features/login/loginSlice";
import registerSlice from "./features/register/registerSlice";
import oneWaySlice from "./features/oneWay/oneWaySlice";
import roundTripSlice from "./features/roundTrip/roundTripSlice";
import passInfo from "./features/passInfo/passInfo";

export const store = configureStore({
  // devTools:false,
  reducer: {
    counter: counterSlice,
    register: registerSlice,
    login: loginSlice,
    oneway: oneWaySlice,
    roundTrip: roundTripSlice,
    passInfo: passInfo,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
