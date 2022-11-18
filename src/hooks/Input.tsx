import React from "react";
import { themes, textStyles } from "../styles/themes/theme";
import classNames from "classnames";
import { InputRef } from "../types/global.types";
import TextDisplay from "./button/textDisplay";

type InputProps = Omit<React.ComponentProps<"input">, "className"> & {};
interface MoreProps extends InputProps {
  // className?: React.CSSProperties | string
  className?: string | undefined;
  more?: InputRef;
  isRounded: boolean;
  error?: string;
  touched?: boolean | Boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  value?: string | number;
  type?: "text" | "password" | "email" | "number";
  handleChange?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const Input = React.forwardRef<HTMLInputElement, MoreProps>(
  (
    {
      children,
      isRounded,
      more,
      error,
      touched,
      type,
      value,
      handleChange,
      placeholder,
      name,
      ...props
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { formLayout, themeWrapper } = themes;
    const { mainText, mainLayout, textCustom } = textStyles;
    return (
      <>
        <input
          // ref={ref}
          type={type}
          value={value}
          className={classNames(
            `${formLayout} ${mainLayout} ${textCustom} h-10 font-playfair`,
            `${isRounded && "rounded-md"}  ${themeWrapper.formPadL}`
          )}
          placeholder={placeholder}
          onClick={handleChange}
          name={name}
          // {...more}
        />
        {error && touched && <TextDisplay>{error}</TextDisplay>}
      </>
    );
  }
);
Input.displayName = "Input";
export default Input;
