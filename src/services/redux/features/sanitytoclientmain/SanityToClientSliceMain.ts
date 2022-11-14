import {
  createSlice,
  createAsyncThunk,
  AsyncThunkAction,
  AsyncThunk,
  AsyncThunkPayloadCreator,
  AsyncThunkOptions,
  Dispatch,
} from "@reduxjs/toolkit";
import { sanityInitialState } from "../type.types";
import SanityService from "./SanityToClientServiceMain";
import { SanityServiceTypes } from "./SanityToClientServiceMain";
import { RootState } from "../../app/rootReducer";
import { AxiosError } from "axios";
const { fetchProductsDisplay, fetchHomeHeader } = SanityService;
// Localrorage Get Item
const data = localStorage.getItem("ProductDisplays");
let ProductDsiplayResponse;
if (data) {
  ProductDsiplayResponse = JSON.parse(data);
}
const homeHeaderData = localStorage.getItem("HomeHeader");
let homeHeaderResponse;
if (homeHeaderData || typeof homeHeaderData === "string") {
  homeHeaderResponse = JSON.parse(homeHeaderData);
}

// Localrorage Get Item

const initialState: sanityInitialState = {
  error: null,
  message: "",
  loading: false,
  homeHeader: null,
  headerHome: null,
  displaymore: null,
  homeBrand: null,
  testimonials: null,
  socialLinks: null,
  footerAbout: null,
  productDisplays: ProductDsiplayResponse ? ProductDsiplayResponse : null,
  // delete: null,
};
type SliceFunctionDefinition = (
  query: string,
  thunkApi?: any
) => (query?: string) => Promise<null | any>;

// (query: string) => Promise<null>;AsyncThunkAction<(query: string) => Promise<null
//AsyncThunk<(query: string) => Promise<null>
/**
type QueryResponse = {
  [key: string]: null | undefined;
};
 */
type TypedCreateAsyncThunk<AsyncThunkConfg> = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    AsyncThunkConfig
  >,
  options?: AsyncThunkOptions<ThunkArg, AsyncThunkConfig>
) => AsyncThunk<Returned, ThunkArg, AsyncThunkConfig>;

// export const createAppAsyncThunk: TypedCreateAsyncThunk<{
//   state: RootState;
// }> = createAsyncThunk<
//   MyData,
//   QueryResponseData,
//   { extra: { jwt: string }; rejectedValue: ValidationError }
// >("sanityMain/createAppAsyncThunk", async (state: RootState, thunkApi) => {
//   try {
//   } catch (err) {}
// });

export interface QueryResponseData {
  [key: string]: string | Boolean | undefined;
  _id?: Boolean;
  title: string;
  desc: string;
}
export type ValidationError = {
  errorMessage: string;
  errorResponse: string;
};
type MyData = {} | null;
type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: unknown;
  /** type for `thunkApi.dispatch` */
  dispatch?: Dispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
};

export const getFetchProductsDisplay = createAsyncThunk<
  MyData,
  string,
  { extra: { jwt: string }; rejectValue: ValidationError }
>("sanityMain/getFetchProductsDisplay", async (query, thunkApi) => {
  try {
    return await fetchProductsDisplay(query);
  } catch (error: any) {
    let errorLog: AxiosError<ValidationError> = error;
    if (!errorLog.response) throw errorLog;
    return thunkApi.rejectWithValue(errorLog.response.data as ValidationError);
  }
});
//
export const getHomeHeader = createAsyncThunk<
  MyData,
  string,
  { extra: { jwt: string }; rejectedValue: ValidationError }
>("sanityMain/getHomeHeader", async (query, thunkApi) => {
  try {
    return await fetchHomeHeader(query);
  } catch (err: any) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) throw error;
    return thunkApi.rejectWithValue(error.response.data as ValidationError);
  }
});
const textGet = createAsyncThunk<
  MyData,
  QueryResponseData,
  { extra: { jwt: string }; rejectValue: ValidationError }
>("", async (user, thunkApi) => {
  const { _id, ...userData } = user;
  const response = await fetch(`https://reqres.in/api/users/${_id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${thunkApi.extra.jwt}`,
    },
    body: JSON.stringify(userData),
  });
  if (response.status === 400) {
    return thunkApi.rejectWithValue((await response.json()) as ValidationError);
  }
  return (await response.json()) as MyData;
});
export const SanityMainSlice = createSlice({
  name: "sanityMain",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(textGet.pending, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(textGet.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(textGet.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage;
        } else {
          state.error = action.error;
        }
      })
      .addCase(getFetchProductsDisplay.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.productDisplay = action.payload;
      })
      .addCase(getFetchProductsDisplay.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorResponse;
          state.loading = false;
        } else {
          state.error = action.error;
        }
      });
  },
});

const { actions, reducer } = SanityMainSlice;
export default reducer;
export const {} = actions;
export const homeHeaderState = (state: RootState) =>
  state.sanityMain.homeHeader;
export const headerHomeState = (state: RootState) =>
  state.sanityMain.headerHome;
export const testimonials = (state: RootState) => state.sanityMain.testimonials;
export const socialLinks = (state: RootState) => state.sanityMain.socialLinks;
export const footerAbout = (state: RootState) => state.sanityMain.footerAbout;
export const homeBrand = (state: RootState) => state.sanityMain.homeBrand;
export const ProductDisplays = (state: RootState) =>
  state.sanityMain?.productDisplays;
export const Delete = (state: RootState) => state.sanityMain.delete;
