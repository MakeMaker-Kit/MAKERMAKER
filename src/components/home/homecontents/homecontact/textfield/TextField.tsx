import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
type InputTypes = Omit<React.ComponentProps<"input">, "className"> & {};

interface FormTypes extends InputTypes {
  label: string;
  name: string;
  placeholder: string;
  hint?: string;
  onChange: () => void;
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
}
const TextField = React.forwardRef<HTMLInputElement, FormTypes>(
  ({ children, ...props }, ref) => {
    const { XFull, themeWrapper } = themes;
    const {} = flexLayout;
    const { textCustom, mainLayout, mainText } = textStyles;

    return (
      <>
        <input
          type="text"
          className={cx(
            `${XFull} h-12 border border-solid border-orange rounded-md ${themeWrapper.formPadL}`,
            `${textCustom} ${mainLayout} text-sm `
          )}
          placeholder="Full Name"
          enterKeyHint={"done"}
          name=""
          title=""
          value={""}
          onChange={(e) => {}}
        />
      </>
    );
  }
);
export default TextField;
