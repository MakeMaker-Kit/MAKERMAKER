import * as React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import CheckoutTextField from "./CheckoutTextfield";
import { Formik, FormikErrors } from "formik";

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
  type InitialValuesTypes = {
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
    streetaddress: string;
    suite?: string;
    city: string;
    state: string;
    zipcode: string;
  };
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
  return (
    <>
      <section className={cx(`relative w-full`)}>
        <div
          className={cx(
            `container py-24 mx-auto flex sm:flex-nowrap flex-wrap `
          )}
        >
          {/* FORM LAYOUT  */}

          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors: FormikErrors<InitialValuesTypes> = {};
            }}
            onSubmit={() => {}}
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
            }) => {
              return (
                <form
                  onSubmit={() => {}}
                  className={`lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative gap-x-10`}
                >
                  {/* Flex 1 */}
                  <div className={`flex flex-col`}>
                    {/*  */}
                    <CheckoutTextField
                      type={"firstname"}
                      label={`first name`}
                      placeholder={`Enter your First Name`}
                      name={`firstname`}
                      id={`firstname`}
                      touched={false}
                      handleChange={handleChange}
                      value={values.firstname}
                      onBlur={handleBlur}
                    />
                    <CheckoutTextField
                      type={""}
                      label={`last name`}
                      placeholder={``}
                      name={``}
                      id={``}
                      touched={false}
                      handleChange={() => {}}
                      value={``}
                      onBlur={() => {}}
                    />
                    <CheckoutTextField
                      type={""}
                      label={`phone number`}
                      placeholder={``}
                      name={``}
                      id={``}
                      touched={false}
                      handleChange={() => {}}
                      value={``}
                      onBlur={() => {}}
                    />
                    <CheckoutTextField
                      type={""}
                      label={`Email Address for order notifications`}
                      placeholder={``}
                      name={``}
                      id={``}
                      touched={false}
                      handleChange={() => {}}
                      value={``}
                      onBlur={() => {}}
                    />

                    {/*  */}
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Button
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                      Chicharrones blog helvetica normcore iceland tousled brook
                      viral artisan.
                    </p>
                  </div>
                  {/* Flex 2 */}
                  <div className={`flex flex-col`}>
                    {/*  */}
                    <CheckoutTextField
                      type={""}
                      label={`street address`}
                      placeholder={``}
                      name={``}
                      id={``}
                      touched={false}
                      handleChange={() => {}}
                      value={``}
                      onBlur={() => {}}
                    />
                    <CheckoutTextField
                      type={""}
                      label={`Apt, suite, etc (optional)`}
                      placeholder={``}
                      name={``}
                      id={``}
                      touched={false}
                      handleChange={() => {}}
                      value={``}
                      onBlur={() => {}}
                    />
                    <CheckoutTextField
                      type={""}
                      label={`city`}
                      placeholder={``}
                      name={``}
                      id={``}
                      touched={false}
                      handleChange={() => {}}
                      value={``}
                      onBlur={() => {}}
                    />
                    <div className={`${flexResponsive.flexRowCol} space-x-2`}>
                      {/*  */}
                      <CheckoutTextField
                        type={""}
                        label={`state`}
                        placeholder={``}
                        name={``}
                        id={``}
                        touched={false}
                        handleChange={() => {}}
                        value={``}
                        onBlur={() => {}}
                      />
                      {/*  */}
                      <CheckoutTextField
                        type={""}
                        label={`zip code`}
                        placeholder={``}
                        name={``}
                        id={``}
                        touched={false}
                        handleChange={() => {}}
                        value={``}
                        onBlur={() => {}}
                      />
                    </div>

                    {/*  */}
                    <button
                      className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  ${textCustom} ${mainLayout} text-xs`}
                      type="submit"
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
