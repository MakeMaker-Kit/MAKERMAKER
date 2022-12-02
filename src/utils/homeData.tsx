import {
  navType,
  NavItemTypes,
  BrandTypes,
  DisplayContentTypes,
  ShopCategoryTypes,
} from "./utils.types";
import uuid from "react-uuid";
import { EnvelopeClosedIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { ShopCarouselTypes } from "./utils.types";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  bgBg,
  bgMain,
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
        link: "#",
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
        link: "/blog",
        id: uuid(),
        icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Science Stories ",
        link: "/blog",
        id: uuid(),
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Moon Light Stories",
        link: "/blog",
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
        name: "Shop",
        link: "/shop",
        id: uuid(),
        icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
      },
    ],
  },
  {
    name: "Gallery",
    link: "/gallery",
    id: uuid(),
    navContents: [
      {
        name: "Brand",
        link: "/gallery",
        id: uuid(),
        icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Works",
        link: "/gallery",
        id: uuid(),
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Testimonials",
        link: "/gallery",
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
        link: "/tutorial",
        id: uuid(),
        icon: <HomeIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Works",
        link: "/tutorial",
        id: uuid(),
        icon: <GearIcon className="mr-2 h-3.5 w-3.5" />,
      },
      {
        name: "Testimonials",
        link: "/tutorial",
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
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
    ],
    handleClick: () => {},
    id: uuid(),
    isReversed: true,
  },
  {
    title: "A Quote on what we believe  ",
    desc: "Education is the passport to the future for tomorrow belongs to those who prepare for it today",
    image: bgMain,
    coreTags: [
      "Innovation",
      "Designing",
      "Progammig",
      "Manufacturing",
      "Practicals",
    ],
    iconsValues: [
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
      {
        icon: <EnvelopeClosedIcon className=" h-3.5 w-3.5" />,
      },
    ],
    handleClick: () => {},
    id: uuid(),
    isReversed: false,
  },
];

export const FooterData = [{}];
export const shopCarouselData: ShopCarouselTypes[] = [
  {
    image: banner1,
    link: "",
    id: uuid(),
  },
  {
    image: banner2,
    link: "",
    id: uuid(),
  },
  {
    image: banner3,
    link: "",
    id: uuid(),
  },
  {
    image: banner4,
    link: "",
    id: uuid(),
  },
  {
    image: banner5,
    link: "",
    id: uuid(),
  },
];
export const ShopCategoryData: ShopCategoryTypes[] = [
  {
    name: "Stem Marvrl",
    link: "",
    id: uuid(),
    icon: <GearIcon className="h-3 w-3" />,
    subCategory: [
      {
        name: "Arduino",
        link: "",
        id: uuid(),
      },
      {
        name: "Battery",
        link: "",
        id: uuid(),
      },
      {
        name: "3d Models",
        link: "",
        id: uuid(),
      },
    ],
  },
  {
    name: "Stem Marvrl",
    link: "",
    id: uuid(),
    icon: <GearIcon className="h-3 w-3" />,
    subCategory: [
      {
        name: "Arduino",
        link: "",
        id: uuid(),
      },
      {
        name: "Battery",
        link: "",
        id: uuid(),
      },
      {
        name: "3d Models",
        link: "",
        id: uuid(),
      },
    ],
  },
  {
    name: "Stem Marvrl",
    link: "",
    id: uuid(),
    icon: <GearIcon className="h-3 w-3" />,
    subCategory: [
      {
        name: "Arduino",
        link: "",
        id: uuid(),
      },
      {
        name: "Battery",
        link: "",
        id: uuid(),
      },
      {
        name: "3d Models",
        link: "",
        id: uuid(),
      },
    ],
  },
];
