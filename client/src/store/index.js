import { configureStore } from "@reduxjs/toolkit";
import { proposalReducer } from "./proposalsSlice";

export const store = configureStore({
  reducer: {
    proposals: proposalReducer,
  },
});
