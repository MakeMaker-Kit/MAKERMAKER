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
const { fetchProductsDisplay } = SanityService;

const initialState: sanityInitialState = {
  error: null,
  message: "",
  loading: false,
  homeHeader: [],
  headerHome: [],
  displaymore: [],
  homeBrand: [],
  testimonials: [],
  socialLinks: [],
  footerAbout: [],
  productDisplay: [],
  delete: [],
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

export const createAppAsyncThunk: TypedCreateAsyncThunk<{
  state: RootState;
}> = createAsyncThunk<
  MyData,
  QueryResponseData,
  { extra: { jwt: string }; rejectedValue: ValidationError }
>("sanityMain/createAppAsyncThunk", async (state: RootState, thunkApi) => {
  try {
  } catch (err) {}
});

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
type MyData = {};
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
        // state.productDisplay = action.payload;
      })
      .addCase(getFetchProductsDisplay.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

const { actions, reducer } = SanityMainSlice;
export default reducer;
export const {} = actions;
