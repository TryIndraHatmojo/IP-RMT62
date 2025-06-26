import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiModalNekat, getBearerToken } from "../helpers/helpers";
import { toast } from "react-toastify";

const limitPackageSlice = createSlice({
  name: "limitPackages",
  initialState: {
    limitPackages: [],
  },
  reducers: {
    setLimitPackages: (state, action) => {
      state.limitPackages = action.payload;
    },
  },
});

export const { setLimitPackages } = limitPackageSlice.actions;
export const limitPackageReducer = limitPackageSlice.reducer;

export const fetchLimitPackages = createAsyncThunk(
  "limitPackages/fetchLimitPackages",
  async (payload, thunkAPI) => {
    try {
      const { dispatch } = thunkAPI;
      const { data } = await apiModalNekat.get("/packages", {
        headers: {
          Authorization: getBearerToken(),
        },
      });
      dispatch(setLimitPackages(data));
    } catch (error) {
      console.log("🚀 ~ error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to fetch limit packages",
        {
          position: "top-center",
          theme: "colored",
        }
      );
    }
  }
);
