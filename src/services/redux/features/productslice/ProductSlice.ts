import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductStateTypes, TCart } from "../type.types";
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
  productQuantity:0,
  totalPrice: totalPricwData ? totalPricwData : 0,
  totalQuantity: totalQuantityData ? totalQuantityData : 0,
  cart: cartItemData ? cartItemData : null || {},
  ShouldCartBeCleared: false,
  ShouldCartBeReset: false
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction) => {
      // state.cart = action.payload;
    },
    addToCart: (state, action) => {
      let updatedItemIndex = state?.cart?.find(
        (item) => item?.id === action.payload.product?._id
      );
      if (updatedItemIndex) {
        const updatedCartItems = state.cart?.map((cartProduct) => {
          if (cartProduct.id === action.payload.product?._id) {
            toast(
              `Your product ${action.payload.product?.title} has already been added to your cart`,
              { duration: 5000 }
            );
            state.totalQuantity = state.totalQuantity;
            state.totalPrice = state.totalPrice;
            state.productQuantity = 1;
          }
        });
      } else {
        if (state.productQuantity > 1) {
          toast.error(
            `Only a single ${action.payload.product?.title} can  be added`
          );
          state.productQuantity = 1;
        } else {
          state.cart?.push(action.payload.product);
          state.totalQuantity = state.totalQuantity + action.payload?.quantity;
          state.totalPrice =
            state.totalPrice +
            action.payload?.product?.amount * action.payload.quantity;
          state.isItemsAdded = true;
          toast.success(
            `${action.payload.quantity} ${action.payload.product?.title} has been successfully added `
          );
        }
      }
    },
    getIdentifiedProduct: (state, action: PayloadAction) => {},
    removeFromCart: (state, action) => {
      let updatedItemIndex = state.cart?.find(
        (item) => item.id === action.payload?.product?._id
      );
      const newCartItem = state.cart?.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      let cartItem = state.cart?.splice(updatedItemIndex, 1);
      state.totalPrice =
        state.totalPrice - updatedItemIndex.amount * state.productQuantity;
      state.totalQuantity = state.totalQuantity - state.productQuantity;
      state.cart = newCartItem;
    },
    incrementProduct: (state, action: PayloadAction) => {
      state.productQuantity = state.productQuantity + 1;
    },
    decrementProduct: (state, action) => {
      state.productQuantity =
        state.productQuantity - 1 > 1  ? toast.error(`Don't do that to ${action.payload.product?.name}`) && 1 : state.productQuantity - 1;
    },
    increaseProductInCart: (state, action) => {
      let PriceInProductStock = action.payload.stockitems;
const updatedItemindex= state.cart?.findIndex((cartItem) => cartItem.id === action.payload.product?_id);
const updatedItem = typeof updatedItemindex === "undefined" || updatedItemindex ? toast.error(`Please we cannot update the cart item check if it exist`) :  { ...state.cart[updatedItemindex]}
state.productQuantity = state.productQuantity + 1 > 1 && state.productQuantity >  PriceInProductStock  ? toast.error(``) && 1 : 1;
return state.productQuantity;
    },
    decreaseProductInCart: (state, action) => {
      let PriceInProductStock = action.payload.stockitems;
state.productQuantity =  state.productQuantity - 1 < 1 ? 1 : state.productQuantity -  1
    },
    removeAllProductInCart: (state, action) => {
      if(action.payload?.ShouldCartBeCLear === "true" || state.ShouldCartBeCleared === true){
        state.cart = [];
        state.productQuantity = 0;
        state.totalPrice = 0;
        state.ShouldCartBeCleared = false;
      } else return
    },
    removeAllSingularProductInCart: (state, action) => {
      const CartitemsList = state.cart?.map((CartItem) => {
        if(CartItem.stockitems > 1){
          let updatedItem = state.cart?.find((item) => item.id  === action.payload.product.id);
        state.productQuantity = state.productQuantity - 1 
        } else {
          return state.productQuantity
        }
        return CartItem
      })
    },
    increaseAllSingularProductInCart: (state, action: PayloadAction) => {},
    resetCart: (state, action) => {
      if(action.payload.ShouldCartBeReset === "true" || state.ShouldCartBeReset === true && typeof state.ShouldCartBeReset === "boolean"){
        state.cart = [];
        state.productQuantity = 0;
        state.totalPrice = 0;
        state.ShouldCartBeReset = false;

      } else return
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
  incrementProdut,
  decreaseProductInCart,
  decrementProduct,
  removeAllProductInCart,
  removeAllSingularProductInCart,
  increaseAllSingularProductInCart,
  increaseProductInCart,
  resetCart,
  setCart,
} = actions;
