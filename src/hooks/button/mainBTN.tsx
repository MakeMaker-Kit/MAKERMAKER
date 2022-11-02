import React from "react";
import classNames from "classnames";
import { textStyles } from "../../styles/themes/theme";
type ButtonProps = Omit<React.ComponentProps<"button">, "className"> & {};
interface MoreProps extends ButtonProps {
  isRounded: boolean;
  bgColor?: string;
}
const MainButton = React.forwardRef<HTMLButtonElement, MoreProps>(
  ({ children, isRounded, bgColor, ...props }, ref) => {
    const { mainLayout, textCustom } = textStyles;
    return (
      <button
        className={classNames(
          `w-full h-10 border border-solid border-orange `,
          `${isRounded ? "rounded" : ""}
        `,
          `${bgColor ? bgColor : "bg-orange"}`,
          `${textCustom} ${mainLayout} text-gray-50 text-sm font-playfair`
        )}
      >
        {children}
      </button>
    );
  }
);

MainButton.displayName = "MainButton";
export default MainButton;
