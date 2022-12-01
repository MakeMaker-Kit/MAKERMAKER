import React from "react";
import { Formik, FormikErrors } from "formik";
import cx from "classnames";
import { AuthContentType, RegiterType } from "../../../../types/global.types";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import Input from "../../../../hooks/Input";
import MainButton from "../../../../hooks/button/mainBTN";
import { useIcon } from "../../../../hooks/dispatchContext";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { supabase } from "../../../db/database/Database";
import { client } from "../../../../client";
import toast from "react-hot-toast";
import {
  EMAIL_ADDREESS_REGEX,
  USER_REGEX,
  phoneRegExp,
  PASSWORD_REGEX,
} from "../Regex";
import TextField from "../../../../components/home/homecontents/homecontact/textfield/TextField";

const Register: React.FC<AuthContentType> = ({
  generateTitle,
  page,
  setPage,
}) => {
  const { boxFull, XExtend } = themes;
  const { textCustom, mainLayout } = textStyles;
  const { flexCol, flexColBetween, flexRowCenter, flexRow, flexCenter } =
    flexLayout;
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
        {/*  */}
        <Formik
          initialValues={{
            comfirmPassword: "",
            fullName: "",
            email: "",
            password: "",
            phoneNumber: "",
          }}
          validate={(values: RegiterType) => {
            const errors: FormikErrors<RegiterType> = {};
            let { fullName, comfirmPassword, email, password, phoneNumber } =
              errors;
            if (!values.fullName) {
              errors.fullName = "Required";
            } else if (!USER_REGEX.test(values.fullName)) {
              errors.fullName =
                " FUllName must contain one word and maximum of 6 letters";
            }
            //
            if (!values.email) {
              errors.email = "Email Required";
            } else if (!EMAIL_ADDREESS_REGEX.test(values.email)) {
              errors.email = "Invalid Email Address";
            }
            //
            if (!values.phoneNumber) {
              errors.phoneNumber = "Phone Number Required";
            } else if (!phoneRegExp.test(values.phoneNumber)) {
              errors.phoneNumber = "Invalid Phone Number ";
            }
            //
            if (!values.password) {
              errors.password = "Your Password is Required";
            } else if (!PASSWORD_REGEX.test(values.password)) {
              errors.password = "Invalid Password ";
            }
            //
            if (!values.password) {
              errors.comfirmPassword = "Invalid";
            } else if (
              values.comfirmPassword !== values.password &&
              !PASSWORD_REGEX.test(values.comfirmPassword)
            ) {
              errors.comfirmPassword = "Your Password dosen't match";
            }
            return errors;
          }}
          onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
            const { email, fullName, password, phoneNumber } = values;
            setSubmitting(true);
            toast.success("Submitting Your Response");
            const AuthValues = { password, email, fullName, phoneNumber };
            try {
              const { error, data } = await supabase.auth.signUp(AuthValues);

              const DBDetails = {
                _type: "userData",
                ...AuthValues,
              };

              if (data && !error) {
                setSubmitting(false);
                setStatus(false);
                setPage((currentPage) => currentPage + 1);
              } else if (error) {
                throw error && toast.error(error.message) && resetForm();
              }
            } catch (error: unknown) {
              if (error instanceof Error) {
                return error.message && toast.error("Signup error");
              }
            }
          }}
        >
          {(formik) => {
            const {
              handleChange,
              values,
              handleBlur,
              handleReset,
              errors,
              touched,
              handleSubmit,
              isSubmitting,
            } = formik;
            const { comfirmPassword, email, fullName, password, phoneNumber } =
              values;
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
                      <div className={`${XExtend}`}>
                        <TextField
                          label=""
                          name="fullName"
                          placeholder="Enter Your fullName"
                          value={fullName}
                          error={errors.fullName}
                          touched={touched.fullName}
                          handleChange={handleChange}
                          type={"text"}
                          title={"fullName"}
                          onBlur={handleBlur}
                        />
                      </div>
                      {/*  */}
                      <div className={`${flexRowCenter} space-x-2`}>
                        <div className={`max-w-five w-five`}>
                          <TextField
                            label=""
                            name="email"
                            placeholder="Enter Your Email"
                            value={email}
                            error={errors.email}
                            touched={touched.email}
                            handleChange={handleChange}
                            type={"email"}
                            title={"email"}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div className={`max-w-five w-five`}>
                          <TextField
                            label=""
                            name="phoneNumber"
                            placeholder="Your phoneNumber"
                            value={phoneNumber}
                            error={errors.phoneNumber}
                            touched={touched.phoneNumber}
                            handleChange={handleChange}
                            type={"number"}
                            title={"phoneNumber"}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      {/*  */}
                      <div className={`${XExtend}`}>
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
                      <div className={`${XExtend}`}>
                        <TextField
                          label=""
                          name="comfirmPassword"
                          placeholder="Confirm your Password"
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
                          onError={() => toast.error("Error Detected")}
                          onErrorCapture={() => toast.error("Error Detected")}
                          disabled={isSubmitting}
                        >
                          Register
                        </MainButton>
                      </div>
                      {/*  */}
                      <div
                        className={`w-full ${flexRowCenter} space-x-1 justify-center cursor-pointer`}
                      >
                        <p
                          className={`${textCustom} ${mainLayout} text-xs italic font-playfair`}
                        >
                          Sign up with Google
                        </p>
                        <div className="w-5 h-5 ">
                          <span
                            className={`${boxFull} ${flexCenter} bg-orange rounded-full`}
                          >
                            <AiOutlineGooglePlus className="text-gray-50" />
                          </span>
                        </div>
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
                      <p> Have an account</p>
                      <span
                        className={cx(`underline cursor-pointer text-black`)}
                        onClick={() =>
                          setPage((currentPage) => currentPage - 1)
                        }
                      >
                        Login Here
                      </span>
                    </div>
                  </div>
                </form>
              </>
            );
          }}
        </Formik>

        {/*  */}
      </div>
    </>
  );
};

export default Register;
