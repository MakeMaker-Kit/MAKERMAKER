import React from 'react';

export interface NavItemTypes {
  name: string;
  link: string;
  id: number | string;
  icon: React.ReactNode;
}

export interface LocationProps {
  text:String;
  lng:number;
  lat: number
}
type CenterProp = {
  lat: number,
lng: number

}
export interface defaultProps{
center: CenterProp;
zoom: number;

}