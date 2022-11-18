import React from "react";
import cx from "classnames";
import { Formik, FormikErrors } from "formik";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import Input from "../../../../hooks/Input";
import Button from "../../../../hooks/button";
import MainButton from "../../../../hooks/button/mainBTN";
import { EMAIL_ADDREESS_REGEX } from "../../../modals/authmodal/Regex";
import { client } from "../../../../client";
import toast from "react-hot-toast";
import TextField from "../../../home/homecontents/homecontact/textfield/TextField";

const BlogContact = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { mainMarX, largeMarX } = themeWrapper;
  const { flexRowCenterBetween, flexRow, flexCenter, flexRowCenter } =
    flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        <div className={`${mainMarX}`}>
          <div className={cx(`${boxFull}`)}>
            {/* BlogContact Layout  */}
            <div
              className={cx(
                `${XFull} h-28 py-10 px-20 rounded-lg shadow-md border bg-gray-50 `
              )}
            >
              <Formik
                initialValues={{
                  blogemailcontact: " ",
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true);
                  const Response: { _type: string; blogemailcontact: string } =
                    {
                      _type: "blogdetail",
                      ...values,
                    };
                  await client
                    .create(Response)
                    .then(() => {
                      toast.success(`Email Submitted`);
                    })
                    .catch((err) => {
                      if (err instanceof Error) {
                        return toast.error(`${err.message}`);
                      }
                    });
                  setSubmitting(false);
                }}
                validate={(values: { blogemailcontact: string }) => {
                  const errors: FormikErrors<{ blogemailcontact: string }> = {};
                  if (!values.blogemailcontact) {
                    errors.blogemailcontact = " Email Address Required";
                  } else if (
                    !EMAIL_ADDREESS_REGEX.test(values.blogemailcontact)
                  ) {
                    errors.blogemailcontact = "Invalid Email Address";
                  }
                  return errors;
                }}
              >
                {({
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  isSubmitting,
                }) => {
                  return (
                    <form
                      className={cx(
                        `${boxFull} ${flexRowCenterBetween} space-x-3 `
                      )}
                      onSubmit={handleSubmit}
                    >
                      <div className={cx(`w-two max-w-two`)}>
                        <div
                          className={`${flexCenter} ${XFull} ${textCustom} ${mainLayout} text-lg font-gordita whitespace-nowrap md:whitespace-nowrap lg:whitespace-normal lg:break-words `}
                        >
                          <h1 className={`max-w-nine`}>
                            Subscribe for our Blog Newsletter
                          </h1>
                        </div>
                      </div>
                      <div className={`w-six max-w-six`}>
                        <div className={`${flexCenter} ${XFull} flex-col`}>
                          <TextField
                            // isRounded={true}
                            label=""
                            placeholder={`Enter Your Email Address`}
                            type={"email"}
                            value={values.blogemailcontact}
                            handleChange={handleChange}
                            onBlur={handleBlur}
                            name={"blogemailcontact"}
                            touched={touched.blogemailcontact}
                            error={errors.blogemailcontact}
                          />
                        </div>
                      </div>
                      <div className={`w-full max-w-two`}>
                        <MainButton
                          isRounded={true}
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {" "}
                          {isSubmitting ? "Submitting" : "Submit"}
                        </MainButton>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContact;
