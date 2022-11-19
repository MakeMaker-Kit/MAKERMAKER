import React from "react";
import cx from "classnames";
import { client } from "../../../../client";
import { AuthContentType, LoginType } from "../../../../types/global.types";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import Input from "../../../../hooks/Input";
import MainButton from "../../../../hooks/button/mainBTN";
import { useIcon } from "../../../../hooks/dispatchContext";
import { PASSWORD_REGEX, EMAIL_ADDREESS_REGEX } from "../Regex";
import { supabase } from "../../../db/database/Database";
import TextField from "../../../home/homecontents/homecontact/textfield/TextField";
import toast from "react-hot-toast";
import {
  Formik,
  FormikErrors,
  FormikConsumer,
  FormikProps,
  FormikRegistration,
} from "formik";

const Login: React.FC<AuthContentType> = ({ generateTitle, page, setPage }) => {
  const {
    flexCol,
    flexRow,
    flexRowCenter,
    flexAround,
    flexColBetween,
    flexCenter,
  } = flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { boxFull, XFull, containerWrapper } = themes;
  const { AiOutlineGooglePlus } = useIcon();
  return (
    <>
      <div className={cx(`${boxFull} ${flexCol}`)}>
        <div>
          <h2
            className={cx(
              `${textCustom} ${mainLayout} text-lg font-playfair capitalize `
            )}
          >
            {generateTitle[page]}
          </h2>
        </div>
        {/* Foem Layout*/}
        <Formik
          initialValues={{
            comfirmPassword: "",
            password: "",
            email: "",
          }}
          validate={(values: LoginType) => {
            const errors: FormikErrors<LoginType> = {};
            //
            if (!values.email) {
              errors.email = "Email Required";
            } else if (!EMAIL_ADDREESS_REGEX.test(values.email)) {
              errors.email = "Invalid Email Address";
            }
            //
            if (!values.password) {
              errors.password = "Your Password is Required";
            } else if (!PASSWORD_REGEX.test(values.password)) {
              errors.password = "Invalid Password ";
            }
            //
            if (!values.password) {
              errors.comfirmPassword = "Cannot be empty";
            } else if (
              values.comfirmPassword !== values.password &&
              !PASSWORD_REGEX.test(values.comfirmPassword)
            ) {
              errors.comfirmPassword = "Your Password dosen't match";
            }
            return errors;
          }}
          onSubmit={async (
            values,
            { setSubmitting, setFieldTouched, resetForm }
          ) => {
            const { comfirmPassword, email, password } = values;
            setSubmitting(true);
            try {
              const { error, data } = await supabase.auth.signInWithPassword(
                values
              );
              const UserLogin = {
                _type: "userData",
                email,
                password,
              };
              if (data) {
                client.create(UserLogin).then(() => {
                  toast.success(`Your Login was successful`);
                  resetForm();
                  setSubmitting(false);
                });
              } else if (error) {
                throw new Error("User Login UnSuccessful, parameters inflated");
              }
            } catch (error: unknown) {
              if (error instanceof Error) {
                return error.message;
              }
            }
          }}
        >
          {(formik) => {
            const {
              initialErrors,
              initialValues,
              handleBlur,
              handleChange,
              isSubmitting,
              values,
              handleSubmit,
              touched,
              errors,
            } = formik;
            const { comfirmPassword, password, email } = values;
            return (
              <>
                <form
                  className={cx(`${boxFull} ${flexColBetween} `)}
                  onSubmit={handleSubmit}
                >
                  <div className={cx(`h-[90%] max-h-[90%] px-5 py-3 w-full`)}>
                    <div
                      className={`${boxFull}  ${flexCol} space-y-5 items-center`}
                    >
                      <div className={`max-w-full w-full`}>
                        <TextField
                          label=""
                          name="email"
                          placeholder="Your Email Address"
                          value={email}
                          error={errors.email}
                          touched={touched.email}
                          handleChange={handleChange}
                          type={"email"}
                          title={"Emal"}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className={`w-full max-w-full`}>
                        <TextField
                          label=""
                          name="password"
                          placeholder="Your Password"
                          value={password}
                          error={errors.password}
                          touched={touched.password}
                          handleChange={handleChange}
                          type={"password"}
                          title={"password"}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className={`w-full max-w-full`}>
                        <TextField
                          label=""
                          name="comfirmPassword"
                          placeholder="Comfirm Password"
                          value={comfirmPassword}
                          error={errors.comfirmPassword}
                          touched={touched.comfirmPassword}
                          handleChange={handleChange}
                          type={"password"}
                          title={"comfirmPassword"}
                          onBlur={handleBlur}
                        />
                      </div>
                      {/* Login Button */}
                      <div className={` w-full max-w-nine `}>
                        <MainButton
                          isRounded={true}
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Login
                        </MainButton>
                      </div>
                      {/*  */}
                      <div
                        className={`w-full ${flexRowCenter} space-x-1 justify-center cursor-pointer`}
                      >
                        <p
                          className={`${textCustom} ${mainLayout} text-xs italic font-playfair`}
                        >
                          Sign in with Google
                        </p>
                        <div className="w-5 h-5 ">
                          <span
                            className={`${boxFull} ${flexCenter} bg-orange rounded-full`}
                          >
                            <AiOutlineGooglePlus className="text-gray-50" />
                          </span>
                        </div>
                      </div>
                      {/*   Forgot PassWord */}
                      <div className={`${mainLayout} max-w-nine`}>
                        <p
                          className={`whitespace-nowrap ${textCustom} text-sm font-playfair`}
                        >
                          Forgot Password?.{" "}
                          <span
                            className="italic cursor-pointer underline"
                            onClick={() =>
                              setPage((currentPage) => currentPage + 2)
                            }
                          >
                            Reset Password{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-700" />
                  <div className={cx(`h-[10%] max-h-[10%] `)}>
                    <div
                      className={cx(
                        `${boxFull} ${flexRowCenter} space-x-3 justify-center`,
                        `${mainLayout} ${textCustom} text-xs font-playfair`
                      )}
                    >
                      <p>Dont have an account</p>
                      <span
                        className={cx(`underline cursor-pointer text-black`)}
                        onClick={() =>
                          setPage((currentPage) => currentPage + 1)
                        }
                      >
                        Register Here
                      </span>
                    </div>
                  </div>
                </form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Login;
