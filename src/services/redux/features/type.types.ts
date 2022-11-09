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
}

export interface User {
  user: string;
}
