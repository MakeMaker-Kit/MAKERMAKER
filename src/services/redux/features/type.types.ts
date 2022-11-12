export interface globalInitialState {
  message: string;
  page: number;
  onAuthModal: boolean;
  onShopModalOpen: boolean;
  onDropdownState: boolean;
  onCartModalOpen: boolean;
  cartBTNShow: boolean;
}
// Create a minimalist adorn to the current  tate of the applicatiopn to  be repopulatex to the virtual dom of the modukr dom of tjhe appkiavction tim
export interface sanityInitialState {
  message: string;
  error: {} | null;
  loading: boolean | Boolean;
  homeHeader: null | {} | void;
  headerHome: null | {};
  displaymore: null | {} | void;
  homeBrand: null | {} | void;
  testimonials: null | {} | void;
  socialLinks: null | {} | void;
  footerAbout: null | {} | void;
  productDisplay: null | {} | void;
}

export interface User {
  user: string;
}

export interface TAuth {
  user: null | {};
}
export interface TCart {
  id: number | string;
  stockitems: number;
}
export interface ProductStateTypes {
  productQuantity: number;
  totalQuantity: number;
  readonly totalPrice: number;
  productIndexQuantity: number;
  cart?: TCart[];
  isItemsAdded: boolean | Boolean;
  ShouldCartBeCleared: Boolean | boolean;
  ShouldCartBeReset: Boolean | boolean;
}
