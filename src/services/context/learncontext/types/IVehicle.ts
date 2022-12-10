import { IFeature } from "./IFeature";
import { ActionType, IAction } from "../LearnContext";
import { Dispatch } from "react";
import {
  TProduct,
  TFooters,
  GalleryType,
  TTestimonials,
  HomeHeaderType,
  productDisplayType,
  FaqsOptions,
} from "../../../../types/global.types";
import { InitialValuesTypes } from "../../../../components/checkout/form/CheckoutForm";
import { TCategory } from "../../../../types/global.types";
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

export const fetchCheckout = (
  dispatch: Dispatch<IAction>,
  checkoutData: InitialValuesTypes
) => {
  dispatch({
    type: ActionType.CHECKOUT_DATA_SUCCESS,
    checkoutData: checkoutData,
  });
};

export const fetchFooterData = (
  dispatch: Dispatch<IAction>,
  footerData: TFooters
) => {
  dispatch({
    type: ActionType.FOOTER_DATA_SUCCESS,
    footerData: footerData,
  });
};

export const fetchGallery = (
  dispatch: Dispatch<IAction>,
  galleryData: GalleryType,
  loading: boolean
) => {
  dispatch({
    type: ActionType.GALLERY_DATA_SUCCESS,
    galleryData: galleryData,
    loading: loading,
  });
};

export const fetchTestimonial = (
  dispatch: React.Dispatch<IAction>,
  singleTestimonial: TTestimonials,
  loading: boolean
) => {
  dispatch({
    type: ActionType.TESTIMONIAL_SUCCESS,
    singleTestimonial: singleTestimonial,
    loading: loading,
  });
};

export const fetchHomeHeader = (
  dispatch: React.Dispatch<IAction>,
  homeHeader: HomeHeaderType[],
  loading: boolean
) => {
  dispatch({
    type: ActionType.HEADER_SUCCESS,
    homeHeader: homeHeader,
    loading: loading,
  });
};

export const fetchProductDisplay = (
  dispatch: React.Dispatch<IAction>,
  productDisplay: productDisplayType,
  loading: boolean
) => {
  dispatch({
    type: ActionType.DISPLAY_SUCCESS,
    productDisplay: productDisplay,
    loading: loading,
  });
};

export const fetchfaqs = (
  dispatch: React.Dispatch<IAction>,
  homeFaqs: FaqsOptions[],
  loading: boolean
) => {
  dispatch({
    type: ActionType.FAQS_SUCCESS,
    homeFaqs: homeFaqs,
    loading: loading,
  });
};

export const fetchCategory = (
  dispatch: React.Dispatch<IAction>,
  blogCategory: TCategory[],
  loading: boolean
) => {
  dispatch({
    type: ActionType.CATEGORY_SUCCESS,
    blogCategory: blogCategory,
    loading: loading,
  });
};
