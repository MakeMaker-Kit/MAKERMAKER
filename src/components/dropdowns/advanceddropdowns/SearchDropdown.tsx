import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import cx from "classnames";
import { themes } from "../../../styles/themes/theme";
import { useIcon } from "../../../hooks/dispatchContext";
import { BiSearchAlt } from "react-icons/bi";
type Props = Omit<React.ComponentProps<"div">, "classNames"> & {};
interface MoreProps extends Props {}
const SearchDropdown = React.forwardRef<HTMLDivElement, MoreProps>(
  ({ children, ...props }, ref) => {
    const { themeWrapper } = themes;
    const { BiSearchAlt } = useIcon();
    return (
      <>
        <div className={cx(`${themeWrapper.dropdwonLayout}`)} ref={ref}>
          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              {/* Search Elements */}
              <BiSearchAlt size={25} />
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Content>
              {/*  */}
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </div>
      </>
    );
  }
);
export default SearchDropdown;
