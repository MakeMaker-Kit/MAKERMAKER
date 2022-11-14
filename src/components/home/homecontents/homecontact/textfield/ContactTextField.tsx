import * as React from "react";
import cx from "classnames";
import { themes, textStyles } from "../../../../../styles/themes/theme";
export interface TInput {
  placeholder?: string;
  value?: string;
  name?: string;
  type?: string;
  disabled?: boolean;
  blur?: () => void;
  focus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  OnFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const ContactTextField: React.FC<TInput> = ({
  placeholder,
  value,
  name,
  type,
  disabled,
}) => {
  const { XFull, themeWrapper } = themes;
  const { textCustom, mainLayout } = textStyles;

  return (
    <input
      className={cx(
        `${XFull} h-12 border border-solid border-orange rounded-md ${themeWrapper.formPadL}`,
        `${textCustom} ${mainLayout} text-sm `
      )}
      value={value}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
};

export default ContactTextField;
