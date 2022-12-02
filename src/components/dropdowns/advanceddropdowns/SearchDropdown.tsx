import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import { useIcon } from "../../../hooks/dispatchContext";
import { BiSearchAlt } from "react-icons/bi";
type Props = Omit<React.ComponentProps<"div">, "classNames"> & {};
interface MoreProps extends Props {}
const SearchDropdown = () => {
  const { themeWrapper, boxFull, containerWrapper } = themes;
  const { flexCenter } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { BiSearchAlt } = useIcon();
  return (
    <>
      <div className={cx(`${themeWrapper.dropdownLayout} `)}>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            {/* Search Elements */}
            <span>
              <BiSearchAlt size={25} />
            </span>
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content
            align={"end"}
            sideOffset={5}
            className={cx(
              `radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down`,
              ` rounded-md w-[400px] h-56 p-4 z-[9999]`,
              `border border-solid border-gray-900 bg-gray-500`
            )}
          >
            <div
              className={`${boxFull} ${flexCenter} ${textCustom} ${mainLayout} rounded-sm relative z-50`}
            >
              <DropdownMenuPrimitive.Item>
                <div className={cx(`h-full w-full`)}>
                  <input
                    className={`w-full h-12 border outline-none shadow-md p-2 rounded-full focus:border-linkedin border-facebook`}
                    placeholder={"Search our Platform "}
                  />
                </div>
              </DropdownMenuPrimitive.Item>
            </div>
            {/*  */}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};

export default SearchDropdown;
