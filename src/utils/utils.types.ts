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
type IconType = {
  icon: React.ReactNode;
};
export interface DisplayContentTypes {
  title: string;
  desc: string;
  image: string;
  coreTags: string[];
  iconsValues: IconType[];
  handleClick: () => void | any;
}
