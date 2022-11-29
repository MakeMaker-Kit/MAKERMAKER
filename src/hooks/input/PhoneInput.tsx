import * as React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../styles/themes/theme";
import { InputRef } from "../../types/global.types";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
const PhoneInputs = ({
  placeholder,
  type,
  value,
  label,
  name,
  id,
  handleChange,
  onBlur,
  error,
  touched,
  onChanged,
}: InputRef) => {
  const { flexCol } = flexLayout;
  const {} = themes;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={cx(`${flexCol} relative mb-4`)}>
        <label
          className={`leading-7 text-xs  ${mainLayout} ${textCustom} capitalize ${
            !!error?.length && touched ? "text-appRed" : " text-gray-700"
          } `}
        >
          {label} *
        </label>
        <PhoneInput
          value={value}
          onChange={onChanged}
          international
          defaultCountry="RU"
          countryCallingCodeEditable={false}
          className={cx(
            "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-xs text-xs",
            `${textCustom} ${mainLayout}`,
            error && touched && "border-appRed"
          )}
          name={name}
          type={type}
          id={id}
          required
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default PhoneInputs;
