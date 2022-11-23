import * as React from "react";
import { GlobalStateActions, ShopGlobalStateReducer } from "./reducers";

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  toggleModal: boolean;
};

const initialState = {
  toggleModal: false,
};

const ProductContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<GlobalStateActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const mainReducer = (
  { toggleModal }: InitialStateType,
  actions: GlobalStateActions
) => {
  toggleModal: ShopGlobalStateReducer(
    toggleModal,
    actions as GlobalStateActions
  );
};
export const ShopContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useShopContext = () => {
  if (!ProductContext) {
    throw new Error("Plaease add a valid useContext populator");
  } else {
    return React.useContext(ProductContext);
  }
};
