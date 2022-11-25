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
