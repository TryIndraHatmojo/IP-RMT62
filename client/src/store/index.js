import { configureStore } from "@reduxjs/toolkit";
import { proposalReducer } from "./proposalsSlice";
import { limitPackageReducer } from "./limitPackageSlice";

export const store = configureStore({
  reducer: {
    proposals: proposalReducer,
    limitPackages: limitPackageReducer,
  },
});
