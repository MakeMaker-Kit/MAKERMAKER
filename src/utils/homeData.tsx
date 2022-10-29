import { navType, NavItemTypes, BrandTypes } from "./utils.types";
import uuid from "react-uuid";
import { EnvelopeClosedIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { brand1, brand2, brand3, brand4 } from "../assets/images";
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
        name: "What is Progammig",
        link: "",
        id: uuid(),
        icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Science Stories ",
        link: "",
        id: uuid(),
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Moon Light Stories",
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
export const BrandData: BrandTypes[] = [
  {
    img: brand1,
    link: "",
    id: uuid(),
  },
  {
    img: brand2,
    link: "",
    id: uuid(),
  },
  {
    img: brand3,
    link: "",
    id: uuid(),
  },
  {
    img: brand4,
    link: "",
    id: uuid(),
  },
];
