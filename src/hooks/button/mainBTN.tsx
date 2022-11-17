import React from "react";
import classNames from "classnames";
import { textStyles } from "../../styles/themes/theme";
type ButtonProps = Omit<React.ComponentProps<"button">, "className"> & {};
interface MoreProps extends ButtonProps {
  isRounded: boolean;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
  // onSubmit?: (e?: FormEvent<HTMLFormElement> | undefined) => void
}

const MainButton = React.forwardRef<HTMLFormElement, MoreProps>(
  (
    {
      children,
      isRounded,
      bgColor,
      textColor,
      disabled,
      type,
      handleClick,
      ...props
    },
    ref
  ) => {
    const { mainLayout, textCustom } = textStyles;
    return (
      <button
        className={classNames(
          `w-full h-10 border border-solid  `,
          `${isRounded ? "rounded" : ""}
        `,
          `${bgColor ? bgColor : "bg-orange border-orange"}`,
          `${textColor ? textCustom : "text-gray-50"}`,
          `${textCustom} ${mainLayout}  text-sm font-playfair`
        )}
        type={type}
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

MainButton.displayName = "MainButton";
export default MainButton;
