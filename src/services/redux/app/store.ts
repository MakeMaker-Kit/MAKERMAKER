import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import { RootState } from "./rootReducer";
import GlobalStateReducer from "../features/globalslice/GlobalStateSlice";
import SanityToClientReducer from "../features/sanitytoclient/SanityToClient";
import AuthReducer from "../features/authslice/AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  product: ProductReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
import ProductReducer from "../features/productslice/ProductSlice";
const store = configureStore({
  reducer: {
    globalstate: GlobalStateReducer,
    sanity: SanityToClientReducer,
    auth: AuthReducer,
    // product: ProductReducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type appDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type rootThunk = ThunkAction<void, RootState, unknown, Action>;
export default store;
