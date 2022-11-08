import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sanityInitialState } from "../type.types";

const initialState: sanityInitialState = {
  error: "",
  message: "",
  loading: false,
  homeHeader: null,
};

const SanityToClientSlice = createSlice({
  name: "sanity",
  initialState,
  reducers: {
    getHomeHeader: (state, action) => {},
  },
  extraReducers: {},
});

const { actions, reducer } = SanityToClientSlice;

export const {} = actions;
export default reducer;
