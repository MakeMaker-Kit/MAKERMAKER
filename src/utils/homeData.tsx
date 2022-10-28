import { navType, NavItemTypes } from "./utils.types";
import uuid from "react-uuid";
import { HomeIcon } from "@radix-ui/react-icons";
export const NavbarData: Array<navType> = [
  {
    name: "Home",
    link: "",
    id: uuid(),
  },
  {
    name: "journals",
    link: "",
    id: uuid(),
  },
  {
    name: "Shop",
    link: "",
    id: uuid(),
  },
  {
    name: "Gallery",
    link: "",
    id: uuid(),
  },
  {
    name: "Tutorials",
    link: "",
    id: uuid(),
  },
];
//  Home Navbar DropdownMenu
export const homeNavData: NavItemTypes[] = [
  {
    name: "Brand",
    link: "",
    id: uuid(),
    icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    name: "Works",
    link: "",
    id: uuid(),
    icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    name: "Testimonials",
    link: "",
    id: uuid(),
    icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
  },
];
// 22695439587
// 04-06-2004
