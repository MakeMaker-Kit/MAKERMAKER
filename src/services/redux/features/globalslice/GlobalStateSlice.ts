import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInitialState } from "../type.types";

const initialState: globalInitialState = {
  message: "",
};
const globalState = createSlice({
  name: "globalstate",
  initialState,
  reducers: {},
  extraReducers: {},
});

const { actions, reducer } = globalState;
export default reducer;
export const {} = actions;
