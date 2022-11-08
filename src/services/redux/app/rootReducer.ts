import {
  AnyAction,
  combineReducers,
  ThunkDispatch,
  configureStore,
  Store,
} from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { User } from "../features/type.types";
const rootReducer = combineReducers({});

export type RootState = ReturnType<any>;

export default rootReducer;
// export type RootStates = ReturnType<typeof reducers>;

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};
// export type ThunkPoppulator = <User>
//4. create the store with your custom AppStore
export const store: AppStore = configureStore({
  reducer: {},
});

// you can also create some redux hooks using the above explicit types
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
