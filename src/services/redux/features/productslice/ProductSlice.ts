import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductStateTypes } from "../type.types";
const IndexData = localStorage.getItem("productIndexQuantity");
let productIndexData;
if (IndexData || typeof IndexData === "string") {
  productIndexData = JSON.parse(IndexData);
}
const productData = localStorage.getItem("productQuantity");
let productQuanData;
if (productData || typeof productData === "string") {
  productQuanData = JSON.parse(productData);
}
//
const totalData = localStorage.getItem("totalPrice");
let totalPricwData;
if (totalData || typeof totalData === "string") {
  totalPricwData = JSON.parse(totalData);
}
//
const totalQuan = localStorage.getItem("totalQuantity");
let totalQuantityData;
if (totalQuan || typeof totalQuan === "string") {
  totalQuantityData = JSON.parse(totalQuan);
}
//
const cartData = localStorage.getItem("cart");
let cartItemData;
if (cartData || typeof cartData === "string") {
  cartItemData = JSON.parse(cartData);
}
const initialState: ProductStateTypes = {
  isItemsAdded: false,
  productIndexQuantity: productIndexData ? productIndexData : 0,
  productQuantity: productQuanData ? productQuanData : 0,
  totalPrice: totalPricwData ? totalPricwData : 0,
  totalQuantity: totalQuantityData ? totalQuantityData : 0,
  cart: cartItemData ? cartItemData : null,
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
