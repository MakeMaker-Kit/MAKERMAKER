import { configureStore, Action, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import { RootState } from "./rootReducer";
import GlobalStateReducer from "../features/globalslice/GlobalStateSlice";
import SanityToClientReducer from "../features/sanitytoclient/SanityToClient";
import AuthReducer from "../features/authslice/AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, createTransform } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import SanityMainReducer from "../features/sanitytoclientmain/SanityToClientSliceMain";
import ProductReducer from "../features/productslice/ProductSlice";
import { TransformCredentials } from "./persist";

export interface IAppState {
  authentication?: IAuthenticationState;
  extras: {
    loading: boolean;
  };
}
export interface IAuthenticationState {
  token: string;
  expires: number;
  user?: {
    name: string;
    email: string;
  };
}

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["extras"],
  transforms: [TransformCredentials],
  // stateReconciler: autoMergeLevel2
};
const sanityPersistConfig = {
  key: "sanity",
  version: 1,
  storage,
  whitelist: ["productDisplays", "footerAbout", "homeHeader", "headerHome"],
};
const reducer = combineReducers({
  product: ProductReducer,
  globalstate: GlobalStateReducer,
  sanity: SanityToClientReducer,
  auth: AuthReducer,
  sanitymain: persistReducer(sanityPersistConfig, SanityMainReducer),
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    product: ProductReducer,
    globalstate: GlobalStateReducer,
    sanity: SanityToClientReducer,
    auth: AuthReducer,
    sanityMain: SanityMainReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type appDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type rootThunk = ThunkAction<void, RootState, unknown, Action>;
export default store;
