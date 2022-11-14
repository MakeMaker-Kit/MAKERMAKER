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
  [key: string]: boolean | Boolean | null | {}[] | void | string | {};
  message: string;
  error: {} | null;
  loading: boolean | Boolean;
  homeHeader: null | {};
  headerHome: null | {};
  displaymore: null | {};
  homeBrand: null | {};
  testimonials: null | {};
  socialLinks: null | {};
  productDisplays: null | {};
  footerAbout: null | {};
  delete?: null | {};
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
