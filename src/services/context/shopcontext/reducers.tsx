import { Action_Types } from "./ACTIONS_TYPES";
import { TProduct } from "../../../types/global.types";
import { client } from "../../../client";
/**
 *
 * @param key
 * @export exported_global_actions_types
 */

const {
  ToggleModal,
  productFailure,
  productPending,
  productSuccess,
  singleProductFailure,
} = Action_Types;

export type ActionsMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export type GlobalStatePayload = {
  [Action_Types.ToggleModal]: boolean;
};

export type GlobalStateActions =
  ActionsMap<GlobalStatePayload>[keyof ActionsMap<GlobalStatePayload>];

export type ShopStateType = {
  loading: boolean;
  product: TProduct;
  error: { message: string };
};

export type ShopStatePayload = {
  [productPending]: {
    loading: boolean;
  };
  [productSuccess]: {
    product: TProduct;
    loading: boolean;
  };
  [productFailure]: {
    product: null;
    error: { message: string };
    loading: boolean;
  };
};

export type ShopStateActions =
  ActionsMap<ShopStatePayload>[keyof ActionsMap<ShopStatePayload>];

export const ShopStateReducer = (
  state: ShopStateType[],
  action: ShopStateActions
) => {
  switch (action.type) {
    case productPending:
      return [
        ...state,
        {
          loading: !action.payload.loading,
        },
      ];
    case productSuccess:
      return [
        ...state,
        {
          product: action.payload.product,
        },
      ];
    case productFailure:
      return [
        ...state,
        {
          loading: action.payload.loading,
          product: action.payload.product,
          error: action.payload.error.message,
        },
      ];
  }
};

export const ShopGlobalStateReducer = (
  state: boolean,
  actions: GlobalStateActions
) => {
  switch (actions.type) {
    case Action_Types.ToggleModal:
      return (state = false);
    default:
      return state;
  }
};
