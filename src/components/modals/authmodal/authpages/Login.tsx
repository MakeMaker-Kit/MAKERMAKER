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
            let { comfirmPassword, email, password } = errors;
            //
            if (!values.email) {
              email = "Email Required";
            } else if (!EMAIL_ADDREESS_REGEX.test(values.email)) {
              email = "Invalid Email Address";
            }
            //
            if (!values.password) {
              password = "Your Password is Required";
            } else if (!PASSWORD_REGEX.test(values.password)) {
              password = "Invalid Password ";
            }
            //
            if (!values.password) {
              comfirmPassword = "Invalid";
            } else if (
              values.comfirmPassword !== values.password &&
              !PASSWORD_REGEX.test(values.comfirmPassword)
            ) {
              comfirmPassword = "Your Password dosen't match";
            }
          }}
          onSubmit={async (values, { setSubmitting, setFieldTouched }) => {
            try {
              const { error, data } = await supabase.auth.signInWithPassword(
                values
              );
              const UserLogin = {
                _type: "userdata",
                ...data,
              };
              if (data) {
                client.create(UserLogin).then(() => {
                  setSubmitting(true);
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
            } = formik;
            const { comfirmPassword, password, email } = values;
            return (
              <>
                <form className={cx(`${boxFull} ${flexColBetween} `)}>
                  <div className={cx(`h-[90%] max-h-[90%] px-5 py-3 w-full`)}>
                    <div
                      className={`${boxFull}  ${flexCol} space-y-5 items-center`}
                    >
                      <div className={`max-w-full w-full`}>
                        <Input
                          isRounded={true}
                          placeholder={`Ènter Your Email`}
                          name={email}
                        />
                      </div>
                      <div className={`w-full max-w-full`}>
                        <Input
                          isRounded={true}
                          placeholder={`Enter your Password `}
                          name={password}
                        />
                      </div>
                      <div className={`w-full max-w-full`}>
                        <Input
                          isRounded={true}
                          placeholder={`Confirm your Password `}
                          name={comfirmPassword}
                        />
                      </div>
                      {/* Login Button */}
                      <div className={` w-full max-w-nine `}>
                        <MainButton
                          isRounded={true}
                          onSubmit={() => handleSubmit}
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
