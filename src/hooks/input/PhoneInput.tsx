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
  Flags,
} from "react-phone-number-input";
import { CountryCode, E164Number } from "libphonenumber-js/core";

///
type Value = E164Number;

type Locale = string;

type LocaleProperty = Locale | Locale[];

interface FlagProps {
  country: Country;
  countryName: string;
  flagUrl?: string;
  flags?: Flags;
}

type Flag = (props: FlagProps) => JSX.Element;

type Country = CountryCode;

type CountryOption = "XX" | "🌐" | "|" | "..." | "…" | Country;
// `LabelKey` is imported in `/locale/{locale}.json.d.ts`.
export type LabelKey = Country | "ZZ" | "ext" | "country" | "phone";

// `Labels` are imported in `/core/index.d.ts`.
export type Labels = Partial<Record<LabelKey, string>>;

export type FeatureProps<InputComponentProps> = Omit<
  InputComponentProps,
  "value" | "onChange"
> & {
  onFocus?(event: React.FocusEvent<HTMLElement>): void;
  onBlur?(event: React.FocusEvent<HTMLElement>): void;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  initialValueFormat?: "national";
  defaultCountry?: Country;
  countries?: Country[];
  labels?: Labels;
  locales?: LocaleProperty;
  flagUrl?: string;
  flags?: Flags;
  flagComponent?: Flag;
  addInternationalOption?: boolean;
  internationalIcon?: React.ElementType;
  countryOptionsOrder?: CountryOption[];
  style?: object;
  className?: string;
  countrySelectComponent?: React.ElementType;
  countrySelectProps?: object;
  inputComponent?: React.ElementType;
  containerComponent?: React.ElementType;
  numberInputProps?: object;
  smartCaret?: boolean;
  international?: boolean;
  limitMaxLength?: boolean;
  countryCallingCodeEditable?: boolean;
  onCountryChange?(country?: Country): void;
  focusInputOnCountrySelection?: boolean;
};
export type Props<InputComponentProps> = FeatureProps<InputComponentProps> & {
  value?: Value;
  onChange(value?: Value): void;
  error?: string;
  touched?: string;
};
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
  values,
  onChange,
}: Props<any>) => {
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
          value={values}
          onChange={onChange}
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
