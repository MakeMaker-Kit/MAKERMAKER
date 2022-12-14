import { NumberSchemaType } from "@sanity/types/dist/dts";
import { TypedObject } from "@sanity/types/dist/dts";
import { E164Number } from "libphonenumber-js/core";
// import {Value} from "@react-phone-number-input/index.d.ts"

import React from "react";
import { NonIndexRouteObject, OutletProps } from "react-router-dom";

export interface NavItemTypes {
  name: string;
  link: string;
  id: number | string;
  icon: React.ReactNode;
}

export interface LocationProps {
  text: String;
  lng: number;
  lat: number;
}
type CenterProp = {
  lat: number;
  lng: number;
};
export interface defaultProps {
  center: CenterProp;
  zoom: number;
}

export interface AuthContainerType {
  generatedPage: () => JSX.Element;
}
export interface AuthContentType {
  generateTitle?: undefined | Array<string> | any;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

type Value = E164Number;

export interface InputRef {
  focus?: () => void;
  blur?: () => void;
  select?: () => void;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  type?: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  id?: string;
  label?: string;
  handleChange?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  onCompositionUpdate?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  icon?: JSX.Element | React.ReactElement;
  // onChanged?: (value?: E164Number) => void;
  onChanged?(value?: Value | undefined): void;
  values?: Value;
}
export declare function Outlet(props: OutletProps): React.ReactElement | null;
export interface PathRouteProps {
  caseSensitive?: NonIndexRouteObject["caseSensitive"];
  path?: NonIndexRouteObject["path"];
  id?: NonIndexRouteObject["id"];
  loader?: NonIndexRouteObject["loader"];
  action?: NonIndexRouteObject["action"];
  hasErrorBoundary?: NonIndexRouteObject["hasErrorBoundary"];
  shouldRevalidate?: NonIndexRouteObject["shouldRevalidate"];
  handle?: NonIndexRouteObject["handle"];
  index?: false;
  children?: React.ReactNode;
  element?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
}
//
export interface THomeBrand {
  brandImage: string;
  title: string;
}
type ImgOption = {
  title: string;
};
export interface TTestimonials {
  _id: string | number;
  image: string;
  name: string;
  description: string;
  company: string;
  imageObject: ImgOption;
}

export interface TSocial {
  name: string;
}

export type TFooter = {
  logo: string;
  desc: string;
};

export interface RegiterType {
  fullName: string;
  email?: string;
  password?: string;
  comfirmPassword: string;
  phoneNumber?: string;
}

export interface LoginType {
  email?: string;
  password: string;
  comfirmPassword: string;
}

export interface THomeBrand {
  [key: string]: string | undefined | number | Number | Boolean;
  _id: number | string;
  brandImage: string;
  // title: string;
}

export interface TContact {
  username: string;
  email: string;
  phoneNumber: string | number;
  subject: string;
  message: string;
}

export interface TAS<S> {
  twitter: S;
  instagram: S;
  facebook: S;
  linkedin: S;
}
export type TAUTHOR = {
  name?: string;
  slug?: { _type?: string; current?: string };
  image?: string;
  readonly bio?: Object[];
  occupation?: string;
  social: string[];
  socials: TAS<string>;
  slugs: string;
};
export type TCategories = {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
};
export interface TBlogs {
  [key: string]:
    | string
    | undefined
    | Boolean
    | boolean
    | number
    | {}[]
    | {}
    | TAUTHOR
    | TAUTHOR[]
    | TypedObject
    | TypedObject[];
  _id: string;
  slug: { current: string; _type?: string };
  body: {}[] | TypedObject | TypedObject[];
  title?: string;
  publishedAt?: string;
  mainImage?: string;
  author: TAUTHOR;
  description?: string;
  posts: {
    title?: string;
    body?: TypedObject[];
    mainImage?: string;
    categories?: TCategories[] | TCategories;
    tags: {}[];
  }[];
  tags: { name?: string; _id: string }[];
  categories: TCategories;
  category: TCategories;
}

export interface TCategory {
  title?: string;
  description?: string;
  _type?: number;
  image?: string;
  _id?: string;
  slug?: string;
}

export interface TRelated {
  title?: string;
  description?: string;
  image?: string;
  _id?: string;
  slug?: string;
  body?: TypedObject | TypedObject;
  mainImage?: string;
  author: { name?: string; slug?: string };
  categories: TCategories;
  tags: { name?: string; _id: string; slug?: string };
  publishedAt?: string;
}

export interface TRelatedBlogs {
  [key: string]:
    | string
    | undefined
    | Boolean
    | boolean
    | TCategory
    | TRelated
    | TRelated[];
  title?: string;
  categories: TCategory;
  related: TRelated[];
}

export interface TReviews {
  _type?: string;
  fullname?: string;
  email?: string;
  phonenumber?: string;
  message?: string;
}

export type TVariant = {
  title: string;
  description?: string;
  grams?: string;
  sku?: string;
  taxable: boolean;
  images: string[];
};

export interface TProduct {
  [key: string]:
    | string
    | {}[]
    | {}
    | boolean
    | Boolean
    | undefined
    | null
    | unknown
    | number;
  _id?: string;
  title?: string;
  price: number;
  updatedPrice?: string;
  readonly defaultVariant?: TVariant;
  quantity?: number;
  variants?: TVariant[];
  stockItems?: number;
  tags?: string[];
  slug?: string;
  categories?: { _id?: string; slug?: string; name?: string; title?: string }[];
  discount?: string;
}

export interface TFooters {
  footermain?: {
    image: string;
    name: string;
    desc: string;
    socials: {
      twitter: string;
      linkedIn: string;
      instagram: string;
      facebook?: string;
    };
  };
  footerabout: { logo: string; desc: string };
}

export interface TFooters {
  [key: string]:
    | string
    | number
    | boolean
    | {
        image: string;
        name: string;
        desc: string;
        socials: {
          twitter: string;
          linkedIn: string;
          instagram: string;
          facebook?: string;
        };
      }
    | { logo: string; desc: string }
    | undefined;
}

export interface TGALLERY {
  sub: string;
  title: string;
  desc: string;
  image: string;
  _id: string;
}

export interface GalleryType {
  title: string;
  desc: string;
  images: string[];
  gallery: TGALLERY[];
}

// export interface GalleryType {
//   [key: string]: string | undefined | TGALLERY[];
// }

export interface HeadType<S> {
  _id: S;
  desc: S;
  image: S;
}

export interface HomeHeaderType extends HeadType<string> {}

export interface productDisplayType {
  _id?: string;
  title: string;
  desc: string;
  image: string;
}

export interface FaqsOptions {
  _id: string;
  title: string;
  desc: string;
  image: string;
}
