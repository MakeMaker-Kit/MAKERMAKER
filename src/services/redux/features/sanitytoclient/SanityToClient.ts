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

// const value = localStorage.getItem("teeMeasuresAverages")

// if (typeof value === 'string') {
//     const parse = JSON.parse(value) // ok

// }

const { genrateHomeHeader, generateHeader } = SanityToClientService;
// const homeHeaderData = JSON.parse(localStorage.getItem("HomeHeader") || "");
const data = localStorage.getItem("HomeHeader");
let homeHeaderData;
if (data && typeof data === "string") {
  homeHeaderData = JSON.parse(data);
}

const initialState: sanityInitialState = {
  error: "",
  message: "",
  loading: false,
  homeHeader: homeHeaderData ? homeHeaderData : null,
  headerHome: null,
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
    try {
      const response = generateHeader(user);
      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        message = error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
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
        state.homeHeader = action.payload;
      })
      .addCase(fetchHeader.rejected, (state, action) => {
        state.loading = false;
        state.homeHeader = null;
      });
  },
});

const { actions, reducer } = SanityToClientSlice;

export const { getHomeHeader } = actions;
export default reducer;
export const homeHeaderState = (state: RootState) => state.sanity.homeHeader;
export const headerHomeState = (state: RootState) => state.sanity.headerHome;
