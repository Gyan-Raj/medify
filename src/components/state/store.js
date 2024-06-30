import { configureStore } from "@reduxjs/toolkit";
import hospitalReducer from "./hospitalsList/hospitalSlice";

export const store = configureStore({
  reducer: {
    hospital: hospitalReducer,
  },
});
