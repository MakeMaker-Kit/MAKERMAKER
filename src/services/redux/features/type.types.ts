import { TProduct } from "./../../../types/global.types";

export interface globalInitialState {
  message: string;
  page: number;
  onAuthModal: boolean;
  onShopModalOpen: boolean;
  onDropdownState: boolean;
  onCartModalOpen: boolean;
  cartBTNShow: boolean;
}
type TBLOGCATEGORY = {
  title?: string;
  descriptiom?: string;
};
export interface TBlogPost {
  [key: string]: string | undefined | Boolean | boolean | undefined | unknown;
  _id: string;
  slug?: string;
  body?: Array<{}>;
  publishedAt?: string;
  author: TBLOGCATEGORY[];
  mainImage?: string;
}
export interface TBlogCat {
  _id?: string | number;
  title?: string;
  description?: string;
  image?: string;
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
  blogPosts?: null | {} | TBlogPost[];
  blogCategories?: null | {} | TBlogCat;
  text?: null | {};
  testdetails?: null | {};
  isLoggedIn?: boolean;
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
  [key: string]: string | undefined | number | Boolean | boolean | TProduct[];
  productQuantity: number;
  totalQuantity: number;
  readonly totalPrice: number;
  productIndexQuantity: number;
  cart: TProduct[];
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
