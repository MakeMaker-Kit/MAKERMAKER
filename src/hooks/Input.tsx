import React from "react";
import { themes, textStyles } from "../styles/themes/theme";
import classNames from "classnames";
import { InputRef } from "../types/global.types";

type InputProps = Omit<React.ComponentProps<"input">, "className"> & {};
interface MoreProps extends InputProps {
  // className?: React.CSSProperties | string
  className?: string | undefined;
  more?: InputRef;
  isRounded: boolean;
}

const Input = React.forwardRef<HTMLInputElement, MoreProps>(
  (
    { children, isRounded, more, placeholder, name, type, value, ...props },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { formLayout, themeWrapper } = themes;
    const { mainText, mainLayout, textCustom } = textStyles;
    return (
      <>
        <input
          ref={ref}
          type="text"
          className={classNames(
            `${formLayout} ${mainLayout} ${textCustom} h-10 font-playfair`,
            `${isRounded && "rounded-md"}  ${themeWrapper.formPadL}`
          )}
          placeholder={placeholder}
          {...more}
        />
      </>
    );
  }
);
Input.displayName = "Input";
export default Input;
