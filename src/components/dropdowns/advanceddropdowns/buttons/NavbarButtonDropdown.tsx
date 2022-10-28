import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import Links from "../../../../hooks/links";
import classNames from "classnames";
import { themes } from "../../../../styles/themes/theme";
import { HomeIcon } from "@radix-ui/react-icons";

interface Props {
  name: string;
  link: string;
  id: number | string;
}
const NavbarBtnDropdown = (props: Props) => {
  const { containerWrapper } = themes;
  return (
    <>
      <div className={`relative  inline-block text-center`}>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <Links key={props.id} link={props.link}>
              {props.name}
            </Links>
          </DropdownMenuPrimitive.Trigger>
          {/* DropDwonContents */}
          <DropdownMenuPrimitive.Content
            align="center"
            sideOffset={5}
            className={classNames(
              `radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down`,
              `w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56 h-20`,
              `bg-gray-800 ${containerWrapper}`
            )}
          ></DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};
export default NavbarBtnDropdown;
