import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { userApi } from "./features/api/apiSlice";
import counterSlice from "./features/counter/counterSlice";
import loginSlice from "./features/login/loginSlice";
import registerSlice from "./features/register/registerSlice";
import oneWaySlice from "./features/oneWay/oneWaySlice";
import roundTripSlice from "./features/roundTrip/roundTripSlice";
import passInfo from "./features/passInfo/passInfo";
import sitBookingSlice from "./features/sitBooking/sitBookingSlice";
import persistReducer from "redux-persist/es/persistReducer";
import profileSettingSlice from "./features/profileSetting/profileSetting";

/* export const store = configureStore({
  // devTools:false,
  reducer: {
    counter: counterSlice,
    register: registerSlice,
    login: loginSlice,
    oneway: oneWaySlice,
    roundTrip: roundTripSlice,
    passInfo: passInfo,
    sitBooking: sitBookingSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
 */

const persistConfig = {
  key: "root",
  storage,
  // this is a state hide with a page reload
  // blacklist: ["counter", "register", "login"],
  // this is a state show with a page reload
  whitelist: ["counter", "register", "login"],
};

const reducer = combineReducers({
  counter: counterSlice,
  register: registerSlice,
  login: loginSlice,
  oneway: oneWaySlice,
  roundTrip: roundTripSlice,
  passInfo: passInfo,
  sitBooking: sitBookingSlice,
  profileSetting: profileSettingSlice,
  [userApi.reducerPath]: userApi.reducer,
});

// const middleware = [...getDefaultMiddleware({ serializableCheck: false })];

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      userApi.middleware
    ),
});
