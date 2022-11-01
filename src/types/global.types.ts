import React from "react";

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
