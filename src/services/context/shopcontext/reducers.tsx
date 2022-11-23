import { Action_Types } from "./ACTIONS_TYPES";

/**
 *
 * @param key
 * @export exported_global_actions_types
 */

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
