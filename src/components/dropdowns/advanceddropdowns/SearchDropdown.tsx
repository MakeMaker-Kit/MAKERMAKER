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
            <DropdownMenuPrimitive.Content
              align="center"
              sideOffset={5}
              className={cx(
                `radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down`,
                `w-48 rounded px-1.5 py-1 shadow-md md:w-screen h-auto`,
                `bg-orange `,
                `border-2 border-dotted border-white`
              )}
            >
              <input className={``} />
              {/*  */}
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        </div>
      </>
    );
  }
);
export default SearchDropdown;
