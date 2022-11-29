import * as React from "react";
import cx from "classnames";
import toast from "react-hot-toast";
import { Formik, FormikErrors } from "formik";
import { AxiosError } from "axios";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import PhoneInput from "../../../hooks/input/PhoneInput";

import {
  USER_REGEX,
  PASSWORD_REGEX,
  EMAIL_ADDREESS_REGEX,
  CITY_REGEX,
  PHONE_NUMBER_REGEX,
} from "../../../components/modals/authmodal/Regex";
import CheckoutTextField from "./CheckoutTextfield";
import { ValidationError } from "../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { client } from "../../../client";
import { USEContext } from "../../../services/context/learncontext/LearnContext";
// import tw, { theme, globalStyles, GlobalStyles } from "twin.macro";
/**
 * <PhoneInput
  placeholder="Enter phone number"
  value={value}
  onChange={setValue}
  error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}/>

Is possible: {value && isPossiblePhoneNumber(value) ? 'true' : 'false'}
Is valid: {value && isValidPhoneNumber(value) ? 'true' : 'false'}
National: {value && formatPhoneNumber(value)}
International: {value && formatPhoneNumberIntl(value)}
 */
export type InitialValuesTypes = {
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  streetaddress: string;
  suite: string;
  city: string;
  state: string;
  zipcode: string;
};
const CheckoutForm = () => {
  const {
    XFull,
    boxFull,
    YFull,
    containerWrapper,
    themeWrapper,
    border,
    imageLayout,
  } = themes;
  const { marX } = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const {
    flexRow,
    flexCol,
    flexRowCenter,
    flexColCenter,
    flexRowCenterBetween,
    flexCenter,
    flexColBetween,
    flexResponsive,
  } = flexLayout;

  interface TCheckout extends InitialValuesTypes {
    _type: string;
  }
  const initialValues: InitialValuesTypes = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    streetaddress: "",
    suite: "",
    city: "",
    state: "",
    zipcode: "",
  };
  const { state } = USEContext();
  console.log("checkout daat", state.checkoutData);
  // const FORMLAYOUT = tw.div` text-2xl`;
  return (
    <>
      <section className={cx(`relative w-full`)}>
        <div
          className={cx(
            `container py-24 mx-auto flex sm:flex-nowrap flex-wrap`
          )}
        >
          {/* FORM LAYOUT  */}

          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors: FormikErrors<InitialValuesTypes> = {};
              // firstname
              if (!values.firstname) {
                errors.firstname = "Field is required";
              } else if (!USER_REGEX.test(values.firstname)) {
                errors.firstname = "Please enter a valid name";
              }
              // lastname
              if (!values.lastname) {
                errors.lastname = "Field is Required";
              } else if (!USER_REGEX.test(values.lastname)) {
                errors.lastname = "Please enter a valid name";
              }
              // phonenumber
              if (!values.phonenumber) {
                errors.phonenumber = "Enter your phonenumber";
              } else if (!PHONE_NUMBER_REGEX.test(values.phonenumber)) {
                errors.phonenumber =
                  "Field must be a valid 10-digit phone number";
              }
              // email address
              if (!values.email) {
                errors.email = "Enter your Email Address";
              } else if (!EMAIL_ADDREESS_REGEX.test(values.email)) {
                errors.email = "Enter  a  valid email address";
              }
              // streetaddress
              if (!values.streetaddress) {
                errors.streetaddress = "Enter a Street Name";
              } else if (!CITY_REGEX.test(values.city)) {
                errors.streetaddress = "Enter a valid Address";
              }
              // suite
              if (!values.suite) {
                errors.suite = "Field cannot be empty";
              } else if (!USER_REGEX.test(values.suite)) {
                errors.suite = "Suite must be entered";
              }
              // city
              if (!values.city) {
                errors.city = "Field cannot be empty";
              } else if (!CITY_REGEX.test(values.city)) {
                errors.city = "Enter a valid city ";
              }
              // state
              if (!values.state) {
                errors.state = "State Field cannot be empty";
              } else if (!CITY_REGEX.test(values.state)) {
                errors.state = "Enter  a valid state";
              }
              // zipcode
              if (!values.zipcode) {
                errors.zipcode = "Field cannot be empty";
              } else if (
                !PHONE_NUMBER_REGEX.test(values.zipcode) &&
                values.lastname.length > 11
              ) {
                errors.zipcode = "Enter a valid zip code";
              }
              return errors;
            }}
            onSubmit={(
              values,
              { resetForm, validateField, setStatus, setSubmitting, setValues }
            ) => {
              setSubmitting(true);
              try {
                let CheckoutRequest: TCheckout = {
                  _type: "checkoutdata",
                  ...values,
                };
                if (values) {
                  client.create(CheckoutRequest).then(() => {
                    resetForm();
                    toast.success(`Successfully Submitted`);

                    setSubmitting(false);
                  });
                }
              } catch (err: any | unknown) {
                let error: AxiosError<ValidationError> = err;
                if (!error.response) throw error;
                toast.error(`Bad Request`);
                resetForm();
                validateField(error.message);
                setValues(values, false);
                setStatus("400");
                setSubmitting(false);
                return error.request;
              }
            }}
          >
            {({
              errors,
              touched,
              dirty,
              handleBlur,
              handleReset,
              handleSubmit,
              handleChange,
              values,
              isSubmitting,
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  className={cx(
                    `lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative gap-x-10 `
                  )}
                >
                  {/* Flex 1 */}
                  <div className={`flex flex-col`}>
                    {/*  */}
                    <CheckoutTextField
                      type={"firstname"}
                      label={
                        errors.firstname && touched.firstname
                          ? errors.firstname
                          : `first name`
                      }
                      placeholder={`Enter your First Name `}
                      name={`firstname`}
                      id={`firstname`}
                      touched={touched.firstname}
                      handleChange={handleChange}
                      value={values.firstname}
                      onBlur={handleBlur}
                      error={errors.firstname}
                    />
                    <CheckoutTextField
                      type={"lastname"}
                      label={
                        errors.lastname && touched.lastname
                          ? errors.lastname
                          : `last name`
                      }
                      placeholder={`Enter your Last Name`}
                      name={`lastname`}
                      id={`lastname`}
                      touched={touched.lastname}
                      handleChange={handleChange}
                      value={values.lastname}
                      onBlur={handleBlur}
                      error={errors.lastname}
                    />
                    {/* <CheckoutTextField
                      type={"phonenumber"}
                      label={
                        errors.phonenumber && touched.phonenumber
                          ? errors.phonenumber
                          : `phone number`
                      }
                      placeholder={`Enter your phone number`}
                      name={`phonenumber`}
                      id={`phonenumber`}
                      touched={touched.phonenumber}
                      handleChange={handleChange}
                      value={values.phonenumber}
                      onBlur={handleBlur}
                      error={errors.phonenumber}
                    /> */}
                    <PhoneInput
                      label={
                        errors.phonenumber && touched.phonenumber
                          ? errors.phonenumber
                          : `phone number`
                      }
                      value={values.phonenumber}
                      onChange={handleChange}
                      name={`phonenumber`}
                      type={`phonenumber`}
                      onBlur={handleBlur}
                      error={errors.phonenumber}
                      placeholder={"+234 0813914403"}
                    />
                    <CheckoutTextField
                      type={"email"}
                      label={
                        errors.email && touched.email
                          ? errors.email
                          : `Email Address for order notifications`
                      }
                      placeholder={`Enter your Email Address`}
                      name={`email`}
                      id={`email`}
                      touched={false}
                      handleChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                      error={errors.email}
                    />

                    {/*  */}
                    {/* <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xs">
                      Button
                    </button> */}
                    <div className={`${flexRowCenter} gap-x-2 py-2`}>
                      <input type="checkbox" defaultChecked={true} />
                      <p className={`text-xs`}>
                        Email about hot items, great products and more
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 mt-3">
                      Chicharrones blog helvetica normcore iceland tousled brook
                      viral artisan.
                    </p>
                  </div>
                  {/* Flex 2 */}
                  <div className={`flex flex-col`}>
                    {/*  */}
                    <CheckoutTextField
                      type={"streetaddress"}
                      label={
                        errors.streetaddress && touched.streetaddress
                          ? errors.streetaddress
                          : `street address`
                      }
                      placeholder={`Enter your Street Address`}
                      name={`streetaddress`}
                      id={`streetaddress`}
                      touched={touched.streetaddress}
                      handleChange={handleChange}
                      value={values.streetaddress}
                      onBlur={handleBlur}
                      error={errors.streetaddress}
                    />
                    <CheckoutTextField
                      type={"suite"}
                      label={
                        errors.suite && touched.suite
                          ? errors.suite
                          : `Apt, suite, etc (optional)`
                      }
                      placeholder={`Enter your Suite`}
                      name={`suite`}
                      id={`suite`}
                      touched={touched.suite}
                      handleChange={handleChange}
                      value={values.suite}
                      onBlur={handleBlur}
                      error={errors.suite}
                    />
                    <CheckoutTextField
                      type={"city"}
                      label={errors.city && touched.city ? errors.city : `city`}
                      placeholder={`Enter your city`}
                      name={`city`}
                      id={`city`}
                      touched={touched.city}
                      handleChange={handleChange}
                      value={values.city}
                      onBlur={handleBlur}
                      error={errors.city}
                    />
                    <div className={`${flexResponsive.flexRowCol} space-x-2`}>
                      {/*  */}
                      <CheckoutTextField
                        type={"state"}
                        label={
                          errors.state && touched.state ? errors.state : `state`
                        }
                        placeholder={`Enter your current State`}
                        name={`state`}
                        id={`state`}
                        touched={touched.state}
                        handleChange={handleChange}
                        value={values.state}
                        onBlur={handleBlur}
                        error={errors.state}
                      />
                      {/*  */}
                      <CheckoutTextField
                        type={"zipcode"}
                        label={
                          errors.zipcode && touched.zipcode
                            ? errors.zipcode
                            : `zip code`
                        }
                        placeholder={`Enter your Zip Code`}
                        name={`zipcode`}
                        id={`zipcode`}
                        touched={touched.zipcode}
                        handleChange={handleChange}
                        value={values.zipcode}
                        onBlur={handleBlur}
                        error={errors.zipcode}
                      />
                    </div>

                    {/*  */}
                    <button
                      className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  ${textCustom} ${mainLayout} text-xs`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      continue
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                      Chicharrones blog helvetica normcore iceland tousled brook
                      viral artisan.
                    </p>
                  </div>
                </form>
              );
            }}
          </Formik>
          {/* END OF FORM WRAPPER */}
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
