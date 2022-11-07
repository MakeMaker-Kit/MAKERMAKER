import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { globalInitialState } from "../type.types";
import { RootState } from "../../app/rootReducer";

const initialState: globalInitialState = {
  message: "",
  page: 1,
  onAuthModal: false,
  onShopModalOpen: false,
  onDropdownState: true,
  onCartModalOpen: false,
};
const globalState = createSlice({
  name: "globalstate",
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.onAuthModal = true;
    },
    closeAuthModal: (state) => {
      state.onAuthModal = false;
    },
    openShopComponent: (state) => {
      state.onShopModalOpen = true;
    },
    closeShopComponent: (state) => {
      state.onShopModalOpen = false;
    },
    toggleDropdownState: (state) => {
      state.onDropdownState = !state.onDropdownState;
    },
    unToggleDropdownState: (state) => {
      state.onDropdownState = !state.onDropdownState;
    },
    toggleCartModal: (state) => {
      state.onCartModalOpen = !state.onCartModalOpen;
    },
    unToggleCartModal: (state) => {
      state.onCartModalOpen = !state.onCartModalOpen;
    }
  },
  extraReducers: {},
});

const { actions, reducer } = globalState;
export default reducer;
export const {
  openAuthModal,
  closeAuthModal,
  closeShopComponent,
  openShopComponent,
  toggleDropdownState,
  unToggleDropdownState,
  toggleCartModal,
  unToggleCartModal
} = actions;
export const onModalState = (state: RootState) => state.globalstate.onAuthModal;
export const openShopModal = (state: RootState) =>
  state.globalstate.onShopModalOpen;
export const dropdownState = (state: RootState) =>
  state.globalstate.onDropdownState;
export const cartModalState = (state: RootState) => state.globalstate.onCartModalOpen;