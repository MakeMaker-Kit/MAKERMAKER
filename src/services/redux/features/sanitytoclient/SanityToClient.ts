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
const { genrateHomeHeader, generateHeader, generateQuery } =
  SanityToClientService;
const homeHeaderData2 = JSON.parse(localStorage.getItem("HomeHeader") || "");
const data = localStorage.getItem("HomeHeader");
let homeHeaderData;
if (data || typeof data === "string") {
  homeHeaderData = JSON.parse(data);
}
// QueryResponseData
const Data = localStorage.getItem("QueryResponse");
let QueryResponseData;
if (Data || typeof Data === "string") {
  QueryResponseData = JSON.parse(Data);
}

const initialState: sanityInitialState = {
  error: "",
  message: "",
  loading: false,
  homeHeader: homeHeaderData ? homeHeaderData : null,
  headerHome: null,
  displaymore: null,
  homeBrand: QueryResponseData ? QueryResponseData : null,
  testimonials: QueryResponseData ? QueryResponseData : null,
  socialLinks: QueryResponseData ? QueryResponseData : null,
  footerAbout: QueryResponseData ? QueryResponseData : null,
};

export const fetchHomeHeader = createAsyncThunk(
  "users/fetchHomeHeader",
  async (user: string, { getState, requestId }: any) => {
    const { currentRequestId, loading } = getState().user;
    if (loading !== "pending" || requestId !== currentRequestId) {
      return;
    }
    const response = await genrateHomeHeader(user);
    return response;
  }
);
export const fetchHeader = createAsyncThunk(
  "users/fetchHomeHeader",
  (user: string, thunkApi) => {
    let message: string;
    const response = generateHeader(user);
    return response;
    // try {
    //   const response = generateHeader(user);
    //   return response;
    // } catch (error: unknown) {
    //   if (error instanceof Error) {
    //     message = error.message;
    //     return thunkApi.rejectWithValue(message);
    //   }
    // }
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
const SanityToClientSlice = createSlice({
  name: "sanity",
  initialState,
  reducers: {
    getHomeHeader: (state, action) => {
      client.fetch(action.payload).then((data) => {
        state.headerHome = data;
        // return state.headerHome;
        return state.headerHome;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeader.fulfilled, (state, action) => {
        state.loading = false;
        // state.homeHeader = action.payload;
        state.error = null;
      })
      .addCase(fetchHeader.rejected, (state, action) => {
        state.loading = false;
        state.homeHeader = null;
      })
      .addCase(fetchQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuery.fulfilled, (state, action) => {
        state.loading = false;
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
