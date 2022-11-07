import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import Links from "../../../../hooks/links";
import classNames from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { HomeIcon } from "@radix-ui/react-icons";
import { homeNavData } from "../../../../utils/homeData";
import { NavItemTypes } from "../../../../types/global.types";

interface Props {
  name: string;
  link: string;
  id: number | string;

  navContents: NavItemTypes[];
}
const NavbarBtnDropdown = (props: Props) => {
  const { containerWrapper } = themes;
  const { flexRowCenter, flexRowCenterBetween, flexRowBetween } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={`relative  inline-block text-center z-[999]`}>
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
          {/* DropDwonContents */}
          <DropdownMenuPrimitive.Content
            align="center"
            sideOffset={5}
            className={classNames(
              `radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down`,
              `w-48 rounded-md px-1.5 py-1 shadow-md md:w-56`,
              `bg-orange `
            )}
          >
            {props.navContents.map(({ icon, id, link, name }, i) => (
              <DropdownMenuPrimitive.Item
                key={id}
                className={classNames(
                  `${flexRowBetween} cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none `,
                  `text-gray-50 focus:bg-gray-900`
                )}
              >
                <div className={classNames(`${flexRowCenter}`)}>
                  {icon}
                  <span
                    className={classNames(
                      `${textCustom} ${mainLayout} text-xs italic`
                    )}
                  >
                    {name}
                  </span>
                </div>

                <span>⌘+N</span>
              </DropdownMenuPrimitive.Item>
            ))}
            {/* <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-100" /> */}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};
export default NavbarBtnDropdown;
