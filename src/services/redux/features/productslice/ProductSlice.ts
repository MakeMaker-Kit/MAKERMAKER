import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductStateTypes, TCart } from "../type.types";
import { toast } from "react-hot-toast";
import { RootState } from "../../app/rootReducer";
import { TProduct } from "../../../../types/global.types";
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
let totalPriceData;
if (totalData || typeof totalData === "string") {
  totalPriceData = JSON.parse(totalData);
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
  productIndexQuantity: 1,
  // @ts-ignore
  productQuantity: productQuanData ? productQuanData : 1,
  // @ts-ignore
  totalPrice: totalPriceData ? totalPriceData : 0,
  // @ts-ignore
  totalQuantity: totalQuantityData ? totalQuantityData : 0,
  cart: cartItemData ? cartItemData : null || [],
  ShouldCartBeCleared: false,
  ShouldCartBeReset: false,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction) => {
      // state.cart = action.payload;
    },
    addToCart: (
      state,
      action: { type: string; payload: { product: TProduct } }
    ) => {
      let updatedItemIndex = state?.cart?.find(
        (item) => item?._id === action.payload.product?._id
      );
      if (updatedItemIndex) {
        state.cart?.map((cartProduct) => {
          if (cartProduct._id === action.payload.product?._id) {
            toast(
              `Your product ${action.payload.product?.title} has already been added to your cart`,
              { duration: 5000 }
            );
            state.totalQuantity = state.totalQuantity;
            state.totalPrice = state.totalPrice;
            state.productQuantity = 1;
          }
        });
        // return updatedCartItems;
      } else {
        if (state.productQuantity > 1) {
          toast.error(
            `Only a single ${action.payload.product?.title} can  be added`
          );
          state.productQuantity = 1;
        } else {
          state.cart?.push(action.payload.product);
          state.totalQuantity = state.totalQuantity + 1;
          state.totalPrice =
            state.totalPrice +
            action.payload?.product?.price * state.productQuantity;
          state.isItemsAdded = true;
          toast.success(
            ` ${action.payload.product?.title} has been successfully added `
          );
          // Store cartItem in the localStorage
          localStorage.setItem("cart", JSON.stringify(state.cart));
          localStorage.setItem(
            " totalQuantity",
            JSON.stringify(state.totalQuantity)
          );
          localStorage.setItem(
            "productQuantity",
            JSON.stringify(state.productQuantity)
          );
          localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        }
      }
    },
    getIdentifiedProduct: (state, action: PayloadAction) => {},
    removeFromCart: (state, action) => {
      let updatedItemIndex = state.cart.find(
        (item) => item._id === action.payload?.product?._id
      );
      const newCartItem = state.cart?.filter(
        (cartItem) => cartItem.id !== action.payload._id
      );
      // let cartItem = state.cart?.splice(updatedItemIndex, 1);

      state.totalPrice =
        // @ts-ignore
        state.totalPrice - updatedItemIndex.price * state.productQuantity;
      state.totalQuantity = state.totalQuantity - state.productQuantity;
      state.cart = newCartItem;
    },
    incrementProduct: (state, action: PayloadAction) => {
      state.productQuantity = state.productQuantity + 1;
    },
    decrementProduct: (state, action) => {
      // @ts-ignore
      state.productQuantity =
        state.productQuantity - 1 < 1
          ? toast.error(`Don't do that to ${action.payload.product?.title}`) &&
            1
          : state.productQuantity - 1;
    },
    increaseProductInCart: (state, action) => {
      let PriceInProductStock = action.payload.stockitems;
      const updatedItemindex = state.cart?.findIndex(
        (cartItem) => cartItem.id === action.payload.product?._id
      );
      // const updatedItem =
      typeof updatedItemindex === "undefined" || updatedItemindex
        ? toast.error(`Please we cannot update the cart item check if it exist`)
        : { ...state.cart[updatedItemindex] };
      //@ts-ignore
      state.productQuantity =
        state.productQuantity + 1 > 1 &&
        state.productQuantity > PriceInProductStock
          ? toast.error(`Hey don't do that please, thank you`) && 1
          : 1;
      // return state.productQuantity;
    },
    decreaseProductInCart: (state) => {
      // let PriceInProductStock = action.payload.stockitems;
      //@ts-ignore
      state.productQuantity =
        state.productQuantity - 1 < 1
          ? 1 && toast.error("Don't do that ")
          : state.productQuantity - 1;
    },
    removeAllProductInCart: (state, action) => {
      if (
        action.payload?.ShouldCartBeCLear === "true" ||
        state.ShouldCartBeCleared === true
      ) {
        state.cart = [];
        state.productQuantity = 0;
        state.totalPrice = 0;
        state.ShouldCartBeCleared = false;
      } else return;
    },
    removeAllSingularProductInCart: (state, action) => {
      const CartitemsList = state.cart?.map((CartItem) => {
        if ((CartItem.stockItems as number) > 1) {
          let updatedItem = state.cart?.find(
            (item) => item.id === action.payload.product.id
          );
          state.productQuantity = state.productQuantity - 1;
        } else {
          return state.productQuantity;
        }
        return CartItem;
      });
    },
    increaseAllSingularProductInCart: (state, action: PayloadAction) => {
      const CheckIfItemExits = state.cart?.map((CartItem) => {
        if (
          (CartItem.stockItems as number) > 1 ||
          typeof CartItem.stockitems === "undefined"
        ) {
        }
      });
    },
    resetCart: (state, action) => {
      if (
        action.payload.ShouldCartBeReset === "true" ||
        (state.ShouldCartBeReset === true &&
          typeof state.ShouldCartBeReset === "boolean")
      ) {
        state.cart = [];
        state.productQuantity = 0;
        state.totalPrice = 0;
        state.ShouldCartBeReset = false;
      } else return;
    },
  },

  extraReducers: {},
});
const { actions, caseReducers, getInitialState, reducer } = ProductSlice;

export default reducer;
export const {
  addToCart,
  getIdentifiedProduct,
  removeFromCart,
  incrementProduct,
  decreaseProductInCart,
  decrementProduct,
  removeAllProductInCart,
  removeAllSingularProductInCart,
  increaseAllSingularProductInCart,
  increaseProductInCart,
  resetCart,
  setCart,
} = actions;

export const TotalQuantity = (state: RootState) => state.product.totalQuantity;
export const Cart = (state: RootState) => state.product.cart;
export const TotalPrice = (state: RootState) => state.product.totalPrice;
export const ProductQuantity = (state: RootState) =>
  state.product.productQuantity;
export const ProductIndexQuantity = (state: RootState) =>
  state.product.productIndexQuantity;
export const shouldCartBeCleared = (state: RootState) =>
  state.product.ShouldCartBeCleared;
export const shouldCartBeReset = (state: RootState) =>
  state.product.ShouldCartBeReset;
export const IsItemAdded = (state: RootState) => state.product.isItemAdded;
// export const onModalState = (state: RootState) => state.product.totalQuantity;
