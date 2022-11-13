import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sanityInitialState } from "../type.types";

const initialState: sanityInitialState = {
  error: null,
  message: "",
  loading: false,
  homeHeader: [],
  headerHome: [],
  displaymore: [],
  homeBrand: [],
  testimonials: [],
  socialLinks: [],
  footerAbout: [],
  productDisplay: [],
  delete: [],
};

export const SanityMainSlice = createSlice({
  name: "sanity-main",
  initialState,
  reducers: {},
});

const { actions, reducer } = SanityMainSlice;
export default reducer;
export const {} = actions;
