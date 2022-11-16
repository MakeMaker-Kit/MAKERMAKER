import { NumberSchemaType } from "@sanity/types/dist/dts";
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

export interface InputRef {
  focus?: () => void;
  blur?: () => void;
  select?: () => void;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  type?: string;
  placeholder?: string;
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

type TAUTHOR = {
  name?: string;
  slug?: string;
  image?: string;
  readonly bio?: {}[];
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
    | TAUTHOR;
  _id: string;
  slug: string;
  body?: {}[];
  title?: string;
  publishedAt?: string;
  mainImage?: string;
  author: {} | TAUTHOR;
  categories: {
    title?: string;
    description?: string;
    image?: string;
  }[];
}
