import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiModalNekat, getBearerToken } from "../helpers/helpers";
import { toast } from "react-toastify";

const proposalSlice = createSlice({
  name: "proposals",
  initialState: {
    proposals: [],
  },
  reducers: {
    setProposals: (state, action) => {
      state.proposals = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setProposals } = proposalSlice.actions;
export const proposalReducer = proposalSlice.reducer;

export const fetchProposals = createAsyncThunk(
  "menu/fetchProposals",
  async (payload, thunkAPI) => {
    try {
      const { dispatch, getState } = thunkAPI;
      toast.loading("Loading proposals...", {
        position: "top-center",
        theme: "colored",
      });
      const { data } = await apiModalNekat.get("/proposals", {
        headers: {
          Authorization: getBearerToken(),
        },
      });
      toast.dismiss();
      dispatch(setProposals(data));
    } catch (error) {
      toast.dismiss();
      toast.error(
        error?.response?.data?.message || "Failed to fetch proposals",
        {
          position: "top-center",
          theme: "colored",
        }
      );
    }
  }
);
