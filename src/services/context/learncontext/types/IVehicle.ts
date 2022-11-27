import { IFeature } from "./IFeature";
import { ActionType, IAction } from "../LearnContext";
import { Dispatch } from "react";
import { TProduct } from "../../../../types/global.types";
export interface IVehicle {
  vehicleId: string;
  make: string;
  model: string;
  trimLevel: string;
  features?: IFeature[];
}

export const selectAll = (dispatch: Dispatch<IAction>) =>
  dispatch({ type: ActionType.SELECT_ALL });

export const selectNone = (dispatch: Dispatch<IAction>) => {
  dispatch({ type: ActionType.SELECT_NONE });
};

export const addVehicle = (dispatch: Dispatch<IAction>, vehicle: IVehicle) => {
  dispatch({ type: ActionType.ADD_VEHICLE, vehicle: vehicle });
};

export const fetchProducts = (
  dispatch: Dispatch<IAction>,
  products: TProduct[]
) => {
  dispatch({ type: ActionType.PRODUCT_SUCCESS, products: products });
};

export const fetchSingleProducts = (
  dispatch: Dispatch<IAction>,
  singleProduct: TProduct
) => {
  dispatch({
    type: ActionType.SINGLE_PRODUCT_SUCCESS,
    singleProduct: singleProduct,
  });
};

export const ChangeImageIndex = (
  dispatch: Dispatch<IAction>,
  imageIndex: number
) => {
  dispatch({ type: ActionType.CHANGE_IMAGE, imageIndex: imageIndex });
};

export const fetchRelatedProducts = (
  dispatch: Dispatch<IAction>,
  relatedProducts: { related: TProduct[] }
) => {
  dispatch({
    type: ActionType.SINGLE_PRODUCT_SUCCESS,
    relatedProducts: relatedProducts,
  });
};
