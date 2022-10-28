import { navType, NavItemTypes } from "./utils.types";
import uuid from "react-uuid";
import { EnvelopeClosedIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
export const NavbarData: Array<navType> = [
  {
    name: "Home",
    link: "",
    id: uuid(),
    navContents: [
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
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Testimonials",
        link: "",
        id: uuid(),
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
  },
  {
    name: "journals",
    link: "",
    id: uuid(),
    navContents: [
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
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Testimonials",
        link: "",
        id: uuid(),
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
  },
  {
    name: "Shop",
    link: "",
    id: uuid(),
    navContents: [
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
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Testimonials",
        link: "",
        id: uuid(),
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
  },
  {
    name: "Gallery",
    link: "",
    id: uuid(),
    navContents: [
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
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Testimonials",
        link: "",
        id: uuid(),
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
  },
  {
    name: "Tutorials",
    link: "",
    id: uuid(),
    navContents: [
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
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Testimonials",
        link: "",
        id: uuid(),
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
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
    icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    name: "Testimonials",
    link: "",
    id: uuid(),
    icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
  },
];
// 22695439587
// 04-06-2004
