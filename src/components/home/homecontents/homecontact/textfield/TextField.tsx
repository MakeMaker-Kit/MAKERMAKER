import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
type InputTypes = Omit<React.ComponentProps<"input">, "classNames"> & {};

interface FormTypes extends InputTypes {
  label: string;
  name: string;
  placeholder: string;
  hint?: string;
  onChange?: () => void;
  className?: string;
  style?: React.CSSProperties;
  value?: string | number;
  id?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: string;
  type?: "text" | "password" | "email" | "number";
  idPrefix?: string;
  idSuffix?: string;
  maxLength?: number;
  minLength?: number;
  maxLengthMax?: number;
  title?: string;
  touched?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}
const TextField = React.forwardRef<HTMLInputElement, FormTypes>(
  (
    {
      children,
      name,
      label,
      placeholder,
      hint,
      value,
      id,
      title,
      onChange,
      handleChange,
      error,
      touched,
      onBlur,
      ...props
    },
    ref
  ) => {
    const { XFull, themeWrapper } = themes;
    const {} = flexLayout;
    const { textCustom, mainLayout, mainText } = textStyles;

    return (
      <>
        <input
          ref={ref}
          // {...props}
          className={cx(
            `${XFull} h-12 border border-solid border-orange rounded-md ${themeWrapper.formPadL}`,
            `${textCustom} ${mainLayout} text-sm `
          )}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          enterKeyHint={"done"}
          name={name}
          title={title}
          onBlur={onBlur}
        />
        {error && touched && error}
      </>
    );
  }
);
export default TextField;
