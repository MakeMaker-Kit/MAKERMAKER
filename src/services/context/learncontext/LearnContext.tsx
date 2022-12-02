import * as React from "react";
import {
  IVehicle,
  fetchProducts,
  fetchSingleProducts,
  fetchCheckout,
  fetchFooterData,
  fetchGallery,
} from "./types/IVehicle";
import { IFeature } from "./types/IFeature";
import { TProduct, TFooters, GalleryType } from "../../../types/global.types";
import { client } from "../../../client";
import {
  CheckoutDataQuery,
  ProductsQuery,
  SingleProduct,
  footerQueries,
  GalleryQuery,
} from "../../../utils/GROC";
import { InitialValuesTypes } from "../../../components/checkout/form/CheckoutForm";
import toast from "react-hot-toast";
export type TFunction = (
  payloadResponse: string
) => Promise<string | false | void>;

export interface IAppState {
  vehicles: IVehicle[];
  selectedVehicles: IVehicle[];
  features: IFeature[];
  products: TProduct[];
  singleProduct: TProduct | {};
  loading: boolean;
  imageIndex: number;
  relatedProducts: { related: TProduct[] } | {};
  checkoutData: InitialValuesTypes | {};
  footerData: {} | TFooters;
  galleryData: {} | GalleryType;
}

export const initialState: IAppState = {
  vehicles: [
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
  singleProduct: {},
  loading: false,
  imageIndex: 1,
  relatedProducts: {},
  checkoutData: {},
  footerData: {},
  galleryData: {},
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
    singleProduct: {},
    loading: false,
    imageIndex: 1,
    relatedProducts: {},
    checkoutData: {},
    footerData: {},
    galleryData: {},
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
  SINGLE_PRODUCT_SUCCESS = "SINGLE_PRODUCT_SUCCESS",
  CHANGE_IMAGE = "CHANGE_IMAGE",
  RELATED_PRODUCTS_SUCCESS = "RELATED_PRODUCTS_SUCCESS",
  CHECKOUT_DATA_SUCCESS = "CHECKOUT_DATA_SUCCESS",
  FOOTER_DATA_SUCCESS = "FOOTER_DATA_SUCCESS",
  GALLERY_DATA_SUCCESS = "GALLERY_DATA_SUCCESS",
}

export type IAction = {
  type: ActionType;
  vehicle?: IVehicle;
  feature?: IFeature;
  products?: TProduct[];
  singleProduct?: TProduct | {};
  loading?: boolean;
  imageIndex?: number;
  relatedProducts?: { related: TProduct[] };
  checkoutData?: InitialValuesTypes;
  footerData?: {} | TFooters;
  galleryData?: {} | GalleryType;
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
    case "PRODUCT_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "PRODUCT_SUCCESS":
      return {
        ...state,
        products: action.products as TProduct[],
        loading: false,
      };
    case "SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        singleProduct: action.singleProduct as TProduct | {},
      };
    case "CHANGE_IMAGE":
      return {
        ...state,
        imageIndex: action.imageIndex as number,
      };
    case "RELATED_PRODUCTS_SUCCESS":
      return {
        ...state,
        relatedProducts: action.singleProduct as { related: TProduct[] },
      };
    case "CHECKOUT_DATA_SUCCESS":
      return {
        ...state,
        checkoutData: action.checkoutData as InitialValuesTypes,
      };

    case "FOOTER_DATA_SUCCESS":
      return {
        ...state,
        footerData: action.footerData as TFooters,
      };
    case "GALLERY_DATA_SUCCESS":
      return {
        ...state,
        galleryData: action.galleryData as GalleryType,
      };
    // return (state.singleProduct = action.singleProduct as TProduct | {});
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

  const fetchSingleProduct: TFunction = async (payloadResponse) => {
    return await client
      .fetch(payloadResponse)
      .then((res) => {
        if (res) {
          return res && fetchSingleProducts(dispatch, res);
        }
        return res && console.log("response  ", res);
      })
      .catch((err) => err instanceof Error && err.message);
  };

  const imageIndex = (index: number): number => {
    if (index < 0) {
      return 0;
    } else return index;
  };

  const fetchCheckoutData: TFunction = async (payloadResponse) => {
    return await client
      .fetch(payloadResponse)
      .then((res) => {
        res && fetchCheckout(dispatch, res);
        return fetchCheckout(dispatch, res);
      })
      .catch((err) => err instanceof Error && err.message);
  };

  const fetchFooterDatas: TFunction = React.useCallback(
    async (payloadResponse) => {
      return await client
        .fetch(payloadResponse)
        .then((res) => {
          res && fetchFooterData(dispatch, res);
          return res && fetchFooterData(dispatch, res);
        })
        .catch((err) => err instanceof Error && err.message);
    },
    [state.footerData]
  );

  const fetchGalleries: TFunction = React.useCallback(
    async (payloadResponse) => {
      return await client.fetch(payloadResponse).then((response) => {
        response && fetchFooterData(dispatch, response);
        return response && fetchGallery(dispatch, response);
      });
    },
    []
  );

  const configureReactStore = () => {};
  React.useEffect(() => {
    let cancelled = false;
    !cancelled && fetchProduct(ProductsQuery);
    !cancelled && fetchCheckoutData(CheckoutDataQuery);
    !cancelled && fetchFooterDatas(footerQueries);
    !cancelled && fetchGalleries(GalleryQuery);
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
