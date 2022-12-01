import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import Links from "../../../../hooks/links";
import { NavItemTypes, TBlogs } from "../../../../types/global.types";

import tw from "twin.macro";
import cx from "classnames";

type BlogType = {
  name: string;
  link: string;
  id: number | string;
  navContents: NavItemTypes[];
};
const BlogDropdown = (props: BlogType) => {
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
            <Links
              key={props.id}
              link={props.link}
              onClick={() => alert("How ae you")}
            >
              {props.name}
            </Links>
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content
            align={"center"}
            sideOffset={5}
            className={cx(
              `radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down`,
              ` rounded  shadow-sm  `,

              `border-2 border-solid border-gray-300`
            )}
          >
            <DropdownMenuPrimitive.Item>
              <div className={`p-5  bg-gray-50 -z-[10] border shadow-2xl`}>
                <ul className={`${boxFull} ${flexCol} `}>
                  {props.navContents.map(({ name }: { name: string }) => (
                    <li
                      className={`${mainLayout} ${textCustom} text-start tracking-widest  leading-9 text-[12px] whitespace-nowrap`}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};

export default BlogDropdown;
