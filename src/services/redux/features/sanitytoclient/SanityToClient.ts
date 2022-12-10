import { User } from "./../type.types";
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { sanityInitialState } from "../type.types";
import { RootState } from "../../app/rootReducer";
import SanityToClientService from "./SanityToClientService";
import { client } from "../../../../client";
// Descript services
const {
  genrateHomeHeader,
  generateHeader,
  generateQuery,
  generateFooterLinks,
  generateSocial,
  generateteTestimonials,
  generateProductDisplay,
} = SanityToClientService;
// const homeHeaderData2 = JSON.parse(localStorage.getItem("HomeHeader") || "");
{  /* @ts-ignore */}

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

export const fetchHeader = createAsyncThunk(
  "users/fetchHomeHeader",
  (user: string, thunkApi) => {
    let message: string;
    const response = generateHeader(user);
    return response;
  }
);
export const fetchQuery = createAsyncThunk(
  "sanity/fetchQuery",
  (user: string, thunkApi) => {
    let message: string;
    const response = generateQuery(user);
    return response;
  }
);
export const fetchTetimonial = createAsyncThunk(
  "sanity/fetchTestimonial",
  (user: string) => generateteTestimonials(user)
);
export const fetchFooterLinks = createAsyncThunk(
  "sanity/fetchFooterLinks",
  (user: string) => generateFooterLinks(user)
);
export const fetchSocial = createAsyncThunk(
  "sanity/fetchSocial",
  (user: string) => generateSocial(user)
);
export const fetchProductDisplay = createAsyncThunk(
  "sanity/fetchProductDisplay",
  (user: string) => generateProductDisplay(user)
);
const SanityToClientSlice = createSlice({
  name: "sanity",
  initialState,
  reducers: {
    getHomeHeader: (state, action) => {
      client.fetch(action.payload).then((data) => {
        state.headerHome = data;
        return state.headerHome;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuery.fulfilled, (state, action) => {
        state.loading = false;
        {  /* @ts-ignore */}

        state.displaymore = action.payload;
        state.error = null;
      })
      .addCase(fetchQuery.rejected, (state, action) => {
        state.loading = false;
        state.displaymore = null;
      });
  },
});

const { actions, reducer } = SanityToClientSlice;

export const { getHomeHeader } = actions;
export default reducer;
export const homeHeaderState = (state: RootState) => state.sanity.homeHeader;
export const headerHomeState = (state: RootState) => state.sanity.headerHome;
export const testimonials = (state: RootState) => state.sanity.testimonials;
export const socialLinks = (state: RootState) => state.sanity.socialLinks;
export const footerAbout = (state: RootState) => state.sanity.footerAbout;
export const homeBrand = (state: RootState) => state.sanity.homeBrand;
export const ProductDisplays = (state: RootState) =>
  state.sanity.productDisplay;
export const Delete = (state: RootState) => state.sanity.delete;
