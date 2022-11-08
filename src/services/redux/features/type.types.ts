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
  error: string | null;
  loading: boolean | Boolean;
  homeHeader: null | {};
}
