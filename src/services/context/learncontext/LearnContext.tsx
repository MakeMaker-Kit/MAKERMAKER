import * as React from "react";
import { IVehicle, fetchProducts } from "./types/IVehicle";
import { IFeature } from "./types/IFeature";
import { TProduct } from "../../../types/global.types";
import { client } from "../../../client";
import { ProductsQuery } from "../../../utils/GROC";
export type TFunction = (payloadResponse: string) => Promise<string>;

export interface IAppState {
  vehicles: IVehicle[];
  selectedVehicles: IVehicle[];
  features: IFeature[];
  products: TProduct[];
}

export const initialState: IAppState = {
  vehicles: [
    {
      vehicleId: "44",
      make: "ab",
      model: "dk",
      trimLevel: "jjjd",
    },
    {
      vehicleId: "44",
      make: "ab",
      model: "dk",
      trimLevel: "jjjd",
    },
    {
      vehicleId: "44",
      make: "ab",
      model: "dk",
      trimLevel: "jjjd",
    },
    {
      vehicleId: "44",
      make: "ab",
      model: "dk",
      trimLevel: "jjjd",
    },
  ],
  selectedVehicles: [],
  features: [],
  products: [],
};

export interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
}

const AppContext = React.createContext<IAppContext>({
  state: {
    vehicles: [],
    selectedVehicles: [],
    features: [],
    products: [],
  },
  dispatch: () => {},
});

export enum ActionType {
  FETCH_VEHICLES = "FETCH_VEHICLES",
  SELECT_ALL = "SELECT_ALL",
  SELECT_NONE = "SELECT_NONE",
  ADD_VEHICLE = "ADD_VEHICLE",
  REMOVE_VEHICLE = "REMOVE_VEHICLE",
  SELECT_LAST_VEHICLE = "SELECT_LAST_VEHICLE",
  PRODUCT_PENDING = "PRODUCT_PENDING",
  PRODUCT_SUCCESS = "PRODUCT_SUCCESS",
  PRODUCT_REJECTED = "PRODUCT_REJECTED",
}

export type IAction = {
  type: ActionType;
  vehicle?: IVehicle;
  feature?: IFeature;
  products?: TProduct[];
};

const vehicleReducer = (
  state: IAppState,
  action: IAction
): typeof initialState => {
  const selectedVehicle = action.vehicle;
  switch (action.type) {
    case "FETCH_VEHICLES":
      return {
        ...state,
        vehicles: [...initialState.vehicles],
      };
    case "ADD_VEHICLE":
      if (selectedVehicle) {
        return {
          ...state,
          selectedVehicles: [
            ...state.selectedVehicles.filter(
              (v) => v.vehicleId !== selectedVehicle.vehicleId
            ),
            selectedVehicle,
          ],
        };
      }
      return {
        ...state,
      };
    case "SELECT_ALL":
      return {
        ...state,
        selectedVehicles: [...state.vehicles],
      };
    case "SELECT_NONE":
      return {
        ...state,
        selectedVehicles: [],
      };
    case "SELECT_LAST_VEHICLE":
      return {
        ...state,
        selectedVehicles: [state.vehicles.pop() as IVehicle],
      };
    case "PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.products as TProduct[],
      };
    default:
      throw new Error();
  }
};

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = React.useReducer(
    vehicleReducer,
    initialState as IAppState
  );
  const fetchProduct: TFunction = async (payloadResponse) => {
    return await client
      .fetch(payloadResponse)
      .then((res) => {
        if (res) {
          return res && fetchProducts(dispatch, res);
        }
        return res && console.log("response  ", res);
      })
      .catch((err) => err instanceof Error && err.message);
  };
  React.useEffect(() => {
    let cancelled = false;
    !cancelled && fetchProduct(ProductsQuery);

    return () => {
      cancelled = true;
    };
  }, []);
  const memiosedValues = React.useMemo(() => [state, dispatch], [state]);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const USEContext = () => React.useContext(AppContext);

export { AppContext, AppContextProvider };
