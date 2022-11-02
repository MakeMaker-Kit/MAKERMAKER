import React from "react";
import { IconType } from "react-icons/lib";
type IconProps = Omit<React.ComponentProps<"div">, "classNames"> & {};
interface MoreProps extends IconProps {
  iconMaterial?: React.ReactNode | IconType;
  classNames?: string | undefined;
}
const Icon = React.forwardRef<HTMLLIElement, MoreProps>(
  ({ children, ...props }, ref) => {
    return <li ref={ref}></li>;
  }
);
Icon.displayName = "Icon";
export default Icon;
