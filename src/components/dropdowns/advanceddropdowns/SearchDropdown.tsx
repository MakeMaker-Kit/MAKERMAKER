import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import cx from "classnames";
import { themes } from "../../../styles/themes/theme";

const SearchDropdown = () => {
  const { themeWrapper } = themes;
  return (
    <>
      <div className={cx(`${themeWrapper.dropdwonLayout}`)}>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            {/* Search Elements */}
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content>
            {/*  */}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};

export default SearchDropdown;
