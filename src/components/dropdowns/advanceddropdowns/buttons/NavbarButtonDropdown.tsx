import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import Links from "../../../../hooks/links";

interface Props {
  name: string;
  title: string;
  id: number | string;
}
const NavbarBtnDropdown = (props: Props) => {
  return (
    <>
      <div className={`relative  inline-block text-left`}>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <Links key={props.id}>{props.name}</Links>
          </DropdownMenuPrimitive.Trigger>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};
export default NavbarBtnDropdown;
