export interface navType {
  name: string;
  link: string;
  id: number | string;
  navContents: NavItemTypes[];
}

export interface NavItemTypes {
  name: string;
  link: string;
  id: number | string;
  icon: React.ReactNode;
}
export interface BrandTypes {
  img: string;
  link: string;
  id: number | string;
}
