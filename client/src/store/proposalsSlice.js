import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiModalNekat, getBearerToken } from "../helpers/helpers";
import { toast } from "react-toastify";

const proposalSlice = createSlice({
  name: "proposals",
  initialState: {
    proposals: [],
    proposal: {},
  },
  reducers: {
    setProposals: (state, action) => {
      state.proposals = action.payload;
    },
    setProposal: (state, action) => {
      state.proposal = action.payload;
    },
  },
});

export const { setProposals, setProposal } = proposalSlice.actions;
export const proposalReducer = proposalSlice.reducer;

export const fetchProposals = createAsyncThunk(
  "proposals/fetchProposals",
  async (payload, thunkAPI) => {
    try {
      const { dispatch, getState } = thunkAPI;
      const { data } = await apiModalNekat.get("/proposals", {
        headers: {
          Authorization: getBearerToken(),
        },
      });
      dispatch(setProposals(data));
    } catch (error) {
      console.log("🚀 ~ error:", error);
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

export const fetchProposalById = createAsyncThunk(
  "proposals/fetchProposalById",
  async (id, thunkAPI) => {
    try {
      const { dispatch, getState } = thunkAPI;
      const { data } = await apiModalNekat.get(`/proposals/${id}`, {
        headers: {
          Authorization: getBearerToken(),
        },
      });
      dispatch(setProposal(data));
    } catch (error) {
      console.log("🚀 ~ error:", error);
      toast.dismiss();
      toast.error(
        error?.response?.data?.message || "Failed to fetch proposal",
        {
          position: "top-center",
          theme: "colored",
        }
      );
    }
  }
);
