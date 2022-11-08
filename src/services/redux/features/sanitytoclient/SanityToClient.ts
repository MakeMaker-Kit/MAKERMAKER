import { User } from "./../type.types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sanityInitialState } from "../type.types";
import { RootState } from "../../app/rootReducer";
import SanityToClientService from "./SanityToClientService";
// Descript services
const { genrateHomeHeader } = SanityToClientService;
const initialState: sanityInitialState = {
  error: "",
  message: "",
  loading: false,
  homeHeader: null,
};

// export const fetchHomeHeader = createAsyncThunk<User>(
//   "users/fetchByIdStatus",
//   async (user, thunkAPI) => {
//     return await genrateHomeHeader(user);
//   }
// );
export const fetchHomeHeader = createAsyncThunk(
  "users/fetchByIdStatus",
  async (user: string, { getState, requestId }: any) => {
    const { currentRequestId, loading } = getState().user;
    if (loading !== "pending" || requestId !== currentRequestId) {
      return;
    }
    const response = await genrateHomeHeader(user);
    return response;
  }
);

const SanityToClientSlice = createSlice({
  name: "sanity",
  initialState,
  reducers: {
    getHomeHeader: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeHeader.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeHeader.fulfilled, (state, action) => {
        state.loading = true;
        state.homeHeader = action.payload;
      })
      .addCase(fetchHomeHeader.rejected, (state, action) => {
        state.loading = false;
        state.homeHeader = null;
      });
  },
});

const { actions, reducer } = SanityToClientSlice;

export const {} = actions;
export default reducer;
export const homeHeaderState = (state: RootState) => state.sanity.homeHeader;
