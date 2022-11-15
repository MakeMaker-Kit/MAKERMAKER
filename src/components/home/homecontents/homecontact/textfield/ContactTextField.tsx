import * as React from "react";
import cx from "classnames";
import { themes, textStyles } from "../../../../../styles/themes/theme";
export interface TInput {
  placeholder?: string;
  value?: string;
  name?: string;
  type?: string;
  label?: string;
  disabled?: boolean;
  blur?: () => void;
  focus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  OnFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange?: {
    /** Classic React change handler, keyed by input name */
    (e: React.ChangeEvent<any>): void;
    /** Preact-like linkState. Will return a handleChange function.  */
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}
const ContactTextField: React.FC<TInput> = ({
  placeholder,
  value,
  name,
  type,
  disabled,
  label,
  onChange,
  handleChange,
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
      onChange={handleChange}
      required
    />
  );
};

export default ContactTextField;
