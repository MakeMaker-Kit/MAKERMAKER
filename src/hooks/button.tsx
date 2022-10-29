import React from "react";
import classNames from "classnames";
import { themes, flexLayout, textStyles } from "../styles/themes/theme";
type Props = Omit<React.ComponentProps<"button">, "className"> & {};
interface OtherProps extends Props {
  handleClick: () => void;
}
const Button = React.forwardRef<HTMLButtonElement, OtherProps>(
  ({ children, ...props }, ref) => {
    const {} = themes;
    const {} = flexLayout;
    const { mainLayout, mainText } = textStyles;
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(
          `w-auto h-10 bg-appRed ${mainText} ${mainLayout} text-gray-50 whitespace-nowrap relative px-3 rounded-md`
        )}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
