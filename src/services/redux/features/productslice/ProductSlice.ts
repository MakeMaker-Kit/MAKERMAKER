import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductStateTypes } from "../type.types";

const initialState: ProductStateTypes = {
  isItemsAdded: false,
  productIndexQuantity: 0,
  productQuantity: 0,
  totalPrice: 0,
  totalQuantity: 0,
  cart: null,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {},
});
const { actions, caseReducers, getInitialState, reducer } = ProductSlice;

export default reducer;
export const {} = actions;
