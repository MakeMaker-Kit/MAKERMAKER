import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import tw from "twin.macro";

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
      <div className={`relative inline-block text-center `}></div>
    </>
  );
};

export default BlogDropdown;
