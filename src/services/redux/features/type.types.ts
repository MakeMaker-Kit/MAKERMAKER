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
  contactData: THomeContact | null | {};
  contactForn?: TContactForm | null | {};
  contactInformation?: null | {};
  blogDetailData?: null | {};
}
export interface TContactForm {
  [key: string]: string | undefined;
  readonly _type: string;
  email?: string;
  username?: string;
  phoneNumber?: string;
  subject?: string;
  message?: string;
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

export interface THomeContact {
  [key: string]: string | undefined | number;
  _type: string;
  username: string;
  email: string;
  phoneNumber: string | number;
  subject: string;
  message: string;
}

type Icon = "me" | "you" | "her";
type Size = "33" | "xl" | "lg";
type SixedIcon = `${Icon}-${Size}`;

const magic: SixedIcon = "her-xl";
