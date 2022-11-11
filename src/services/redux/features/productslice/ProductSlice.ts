import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductStateTypes } from "../type.types";
import { toast } from "react-hot-toast";
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
  reducers: {
    setCart: (state, action: PayloadAction) => {
      state.cart = action.payload;
    },
    addToCart: (state, action: PayloadAction) => {},
    getIdentifiedProduct: (state, action: PayloadAction) => {},
    removeFromCart: (state, action: PayloadAction) => {},
    incrementProdut: (state, action: PayloadAction) => {},
    decrementProduct: (state, action: PayloadAction) => {},
    increaseProductInCart: (state, action: PayloadAction) => {},
    decreaseProductInCart: (state, action: PayloadAction) => {},
    removeAllProductInCart: (state, action: PayloadAction) => {},
    removeAllSingularProductInCart: (state, action: PayloadAction) => {},
    increaseAllSingularProductInCart: (state, action: PayloadAction) => {},
    resetCart: (state, action: PayloadAction) => {},
  },

  extraReducers: {},
});
const { actions, caseReducers, getInitialState, reducer } = ProductSlice;

export default reducer;
export const {} = actions;
