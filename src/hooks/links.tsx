import React from "react";
import { flexLayout, textStyles } from "../styles/themes/theme";
import { useIcon } from "./dispatchContext";
import classNames from "classnames";

type NavLinkProps = Omit<React.ComponentProps<"li">, "className"> & {};
interface MoreProps extends NavLinkProps {
  link: string;
}
const Links = React.forwardRef<HTMLLIElement, MoreProps>(
  ({ children, ...props }, ref) => {
    const { flexRowCenter } = flexLayout;
    const { mainLayout, mainText } = textStyles;
    const { MdOutlineKeyboardArrowDown } = useIcon();
    return (
      <li
        ref={ref}
        {...props}
        className={classNames(
          `${flexRowCenter}`,
          `${mainText} ${mainLayout} uppercase`
        )}
      >
        <span>{children}</span>
        <MdOutlineKeyboardArrowDown />
      </li>
    );
  }
);
Links.displayName = "Links";

export default Links;
//forwardRef<HTMLOListElement, NavLinkProps>
