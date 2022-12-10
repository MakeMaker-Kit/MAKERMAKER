import * as React from "react";
import cx from "classnames";
import { InputRef } from "../../../types/global.types";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
const CheckoutTextField = ({
  id,
  type,
  placeholder,
  name,
  handleChange,
  touched,
  error,
  label,
  onBlur,
}: InputRef) => {
  const { themeWrapper } = themes;
  const {} = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className="relative mb-4">
        <label
          className={`leading-7 text-xs  ${mainLayout} ${textCustom} capitalize ${
            !!error?.length && touched ? "text-appRed" : " text-gray-700"
          } `}
        >
          {label} *
        </label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={handleChange}
          onBlur={onBlur}
          required
          placeholder={placeholder}
          className={cx(
            "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-xs text-xs",
            `${textCustom} ${mainLayout}`,
            touched && error && "border-appRed"
          )}
        />
      </div>
    </>
  );
};

export default CheckoutTextField;
