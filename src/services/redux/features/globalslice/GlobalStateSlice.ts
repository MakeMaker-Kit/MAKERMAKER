import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInitialState } from "../type.types";
import { RootState } from '../../app/rootReducer';

const initialState: globalInitialState = {
  message: "",
  page: 1,
  onAuthModal: false
};
const globalState = createSlice({
  name: "globalstate",
  initialState,
  reducers: {
    openAuthModal: ((state) => {
      state.onAuthModal = true;
    }),
    closeAuthModal: ((state) => {
      state.onAuthModal = false;
    })
  },
  extraReducers: {},
});

const { actions, reducer } = globalState;
export default reducer;
export const {openAuthModal, closeAuthModal} = actions;
export const onModalState = ((state: RootState) => state.globalstate.onAuthModal) 

