import {
  createSlice,
  createAsyncThunk,
  AsyncThunkAction,
  AsyncThunk,
  AsyncThunkPayloadCreator,
  AsyncThunkOptions,
  Dispatch,
} from "@reduxjs/toolkit";
import { sanityInitialState, THomeContact } from "../type.types";
import SanityService from "./SanityToClientServiceMain";
import { SanityServiceTypes } from "./SanityToClientServiceMain";
import { RootState } from "../../app/rootReducer";
import { AxiosError } from "axios";
import { SanityCreateTypes } from "./SanityToClientServiceMain";
const {
  fetchProductsDisplay,
  fetchHomeHeader,
  fetchDisplayMore,
  fetchTestimonials,
  fetchHomeBrands,
  fetchUserContact,
  fetchContactForm,
  fetchContactInformation,
  fetchBlogDetail,
  fetchBlogs,
} = SanityService;
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

const displayMoreData = localStorage.getItem("DisplayMore");
let displayMoreResponse;
if (displayMoreData || typeof displayMoreData === "string") {
  displayMoreResponse = JSON.parse(displayMoreData);
}
const footerAboutData = localStorage.getItem("DisplayMore");
let footerAboutResponse;
if (footerAboutData || typeof footerAboutData === "string") {
  footerAboutResponse = JSON.parse(footerAboutData);
}

const homeBrandsData = localStorage.getItem("DisplayMore");
let homeBrandsResponse;
if (homeBrandsData || typeof homeBrandsData === "string") {
  homeBrandsResponse = JSON.parse(homeBrandsData);
}

const homeTestimonialsData = sessionStorage.getItem("Testimonials");
let homeTestimonialResponse;
if (homeTestimonialsData || typeof homeTestimonialsData === "string") {
  homeTestimonialResponse = JSON.parse(homeTestimonialsData);
}
// Localrorage Get Item
const blogDetailData = sessionStorage.getItem("blogDetail");
let singlePostResponse;
if (blogDetailData) {
  singlePostResponse = JSON.parse(blogDetailData);
}

const blogPostData = sessionStorage.getItem("MainBlog");
let blogpostResponse;
if (blogPostData || typeof blogPostData === "string") {
  blogpostResponse = JSON.parse(blogPostData);
}

const initialState: sanityInitialState = {
  error: null,

  message: "",

  loading: false,

  homeHeader: homeHeaderResponse ? homeHeaderResponse : null,

  headerHome: null,

  displaymore: homeHeaderResponse ? homeHeaderResponse : null,

  homeBrand: homeBrandsResponse ? homeBrandsResponse : null,

  testimonials: homeTestimonialResponse ? homeTestimonialResponse : null,

  socialLinks: null,

  footerAbout: footerAboutResponse ? footerAboutResponse : null,

  productDisplays: displayMoreResponse ? displayMoreResponse : null,

  contactData: {
    username: "",
    email: "",
    message: "",
  },

  contactForm: null,

  contactInformation: null,

  blogDetailData: singlePostResponse ? singlePostResponse : null,

  blogPosts: blogpostResponse ? blogpostResponse : null,
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

export const getDisplayMore = createAsyncThunk<
  MyData,
  string,
  { extra: {}; rejectedValue: ValidationError }
>("sanityMain/getDisplayMore", async (query, thunkApi) => {
  try {
    await fetchDisplayMore(query);
  } catch (err: any | unknown) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) throw error;
    return thunkApi.rejectWithValue(error.response.data as ValidationError);
  }
});

export const getTestimonials = createAsyncThunk<
  MyData,
  string,
  { extra: { jwt: string }; rejectWithValue: ValidationError }
>("sanityMain/getTestimonials", async (query, thunkApi) => {
  try {
    return await fetchTestimonials(query);
  } catch (err: unknown | any) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) throw error;
    return thunkApi.rejectWithValue(error.response.data as ValidationError);
  }
});

export const getHomeBrands = createAsyncThunk<
  MyData,
  string,
  { extra: { localeErr: string }; rejectWithValue: ValidationError }
>("sanityMain/getHomeBrands", async (query, thunkApi) => {
  try {
    return await fetchHomeBrands(query);
  } catch (err: unknown | any) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) throw error;
    return thunkApi.rejectWithValue(error.response.data as ValidationError);
  }
});
export const getUserContact = createAsyncThunk<
  MyData,
  THomeContact,
  { extra: {}; rejectWithValue: ValidationError }
>("sanityMain/getUserContact", async (userQuery, thunkApi) => {
  try {
    return await fetchUserContact(userQuery);
  } catch (err: any | unknown) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) throw error;
    return thunkApi.rejectWithValue(error.response.data as ValidationError);
  }
});

export const getContactForm = createAsyncThunk<
  MyData,
  string,
  { extra: {}; rejectWithValue: ValidationError }
>("sanityMain/getContactForm", async (query, thunkApi) => {
  try {
    return await fetchContactForm(query);
  } catch (err: any) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) throw error;
    return thunkApi.rejectWithValue(error.response.data as ValidationError);
  }
});

export const getContactInfo = createAsyncThunk<
  MyData,
  string,
  { extra: {}; rejectWithValue: ValidationError }
>("sanityMain/getContactForm", async (query, thunkApi) => {
  try {
    return await fetchContactInformation(query);
  } catch (err: any) {
    let error: AxiosError<ValidationError> = err;
    if (!error.response) throw error;
    return thunkApi.rejectWithValue(error.response.data as ValidationError);
  }
});

export const getBlogDetails = createAsyncThunk<
  MyData,
  string,
  { extra: {}; rejectWithValue: ValidationError }
>("sanityMain/getBlogDetails", async (queryID, thunkApi) => {
  try {
    return await fetchBlogDetail(queryID);
  } catch (err: any | unknown) {
    let Error: AxiosError<ValidationError> = err;
    if (!Error.response) throw Error;
    return thunkApi.rejectWithValue(Error.response.data as ValidationError);
  }
});

export const getBlogPosts = createAsyncThunk<
  MyData,
  string,
  { extra: {}; rejectWithValue: ValidationError }
>("sanityMain/getBlogPosts", async (queryID, thunkApi) => {
  try {
    return await fetchBlogs(queryID);
  } catch (err: any | unknown) {
    let Error: AxiosError<ValidationError> = err;
    if (!Error.response) throw Error;
    return thunkApi.rejectWithValue(Error.response.data as ValidationError);
  }
});

export const textGet = createAsyncThunk<
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

/**
 * 
 Create SnaityToClient Slicce @type to
 */
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
      })
      .addCase(getTestimonials.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.productDisplay = action.payload;
      })
      .addCase(getTestimonials.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.loading = false;
        } else {
          state.error = action.error;
        }
      })
      .addCase(getUserContact.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(getUserContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(getUserContact.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.loading = false;
        } else {
          state.error = action.error;
        }
      })
      .addCase(getBlogDetails.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(getBlogDetails.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(getBlogDetails.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.loading = false;
        } else {
          state.error = action.error;
        }
      })
      .addCase(getBlogPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(getBlogPosts.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
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

export const ContactForm = (state: RootState) => state.sanityMain.contactForm;

export const ContactInformation = (state: RootState) =>
  state.sanityMain.contactInformation;

export const BlogDetails = (state: RootState) =>
  state.sanityMain.blogDetailData;

export const BlogPosts = (state: RootState) => state.sanityMain.blogPosts;
// body.map(({children}) => children[0].map(({text}) => text))
