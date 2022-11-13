import {
  createSlice,
  createAsyncThunk,
  AsyncThunkAction,
  AsyncThunk,
  AsyncThunkPayloadCreator,
  AsyncThunkOptions,
} from "@reduxjs/toolkit";
import { sanityInitialState } from "../type.types";
import SanityService from "./SanityToClientServiceMain";
import { SanityServiceTypes } from "./SanityToClientServiceMain";
import { RootState } from "../../app/rootReducer";

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
 *  catch (err) {
    let error: AxiosError<ValidationErrors> = err // cast the error for access
    if (!error.response) {
      throw err
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return rejectWithValue(error.response.data)
  }
 */
type QueryResponse = {
  [key: string]: null | undefined;
};
const { fetchProductsDisplay } = SanityService;
export const getFetchProductsDisplay = createAsyncThunk<
  QueryResponse,
  RootState
>("sanityMain/getFetchProductsDisplay", async (query: string, thunkApi) => {
  try {
    return await getFetchProductsDisplay(query);
  } catch (error: unknown) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    }
    return thunkApi.rejectWithValue(message);
  }
});
type TypedCreateAsyncThunk<ThunkApiConfig> = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
  options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
) => AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;

export const createAppAsyncThunk: TypedCreateAsyncThunk<{
  state: RootState;
}> = createAsyncThunk;

export const SanityMainSlice = createSlice({
  name: "sanityMain",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFetchProductsDisplay);
  },
});

const { actions, reducer } = SanityMainSlice;
export default reducer;
export const {} = actions;
