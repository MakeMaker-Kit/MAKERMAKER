import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import { NavItemTypes, TBlogs } from "../../../../types/global.types";

import tw from "twin.macro";
import cx from "classnames";

type BlogType = {
  name: string;
  link: string;
  id: number | string;
  navContents: NavItemTypes[];
};
const BlogDropdown = () => {
  const { containerWrapper, boxFull, XFull } = themes;
  const {
    flexRowCenter,
    flexRowCenterBetween,
    flexRowBetween,
    flexRow,
    flexCol,
    flexStart,
    flexColBetween,
    flexColCenter,
    flexCenter,
  } = flexLayout;

  const { mainLayout, textCustom } = textStyles;

  return (
    <>
      <div className={`relative inline-block text-center `}>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            NavContent Name
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content
            align={"center"}
            sideOffset={5}
            className={cx(
              `radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down`,
              `w-48 rounded px-1.5 py-1 shadow-md md:w-screen h-auto`,
              `bg-orange `,
              `border-2 border-dotted border-white`
            )}
          >
            <DropdownMenuPrimitive.Item>
              <div className={`h-56 bg-gray-400 border shadow-2xl`}></div>
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};

export default BlogDropdown;
