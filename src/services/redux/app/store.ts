import { configureStore, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import { RootState } from "./rootReducer";
import GlobalStateReducer from "../features/globalslice/GlobalStateSlice";
import SanityToClientReducer from "../features/sanitytoclient/SanityToClient";
import AuthReducer from "../features/authslice/AuthSlice";
const store = configureStore({
  reducer: {
    globalstate: GlobalStateReducer,
    sanity: SanityToClientReducer,
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type appDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type rootThunk = ThunkAction<void, RootState, unknown, Action>;
export default store;
