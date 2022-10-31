import {
  navType,
  NavItemTypes,
  BrandTypes,
  DisplayContentTypes,
} from "./utils.types";
import uuid from "react-uuid";
import { EnvelopeClosedIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  displayProduct,
} from "../assets/images";
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

export const DisplayContentData: DisplayContentTypes[] = [
  {
    title: "Make Maker Displayed",
    desc: "Reasonably priced. Compact. The science set max, provides an unparalleled personalized learning experience and is the most effective way to introduce students to innovation, technology and pro",
    image: displayProduct,
    coreTags: [
      "Innovation",
      "Designing",
      "Progammig",
      "Manufacturing",
      "Practicals",
    ],
    iconsValues: [
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
    handleClick: () => {},
  },
  {
    title: "A Quote on what we believe  ",
    desc: "Education is the passport to the future for tomorrow belongs to those who prepare for it today",
    image: displayProduct,
    coreTags: [
      "Innovation",
      "Designing",
      "Progammig",
      "Manufacturing",
      "Practicals",
    ],
    iconsValues: [
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
    handleClick: () => {},
  },
];
