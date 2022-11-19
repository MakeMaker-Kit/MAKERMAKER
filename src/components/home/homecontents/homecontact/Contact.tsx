import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import TextField from "./textfield/TextField";
import ContactTextField from "./textfield/ContactTextField";
import Button from "../../../../hooks/button";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  Formik,
} from "formik";
import { TContact } from "../../../../types/global.types";
import { useDispatch } from "react-redux";
import { getUserContact } from "../../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { THomeContact } from "../../../../services/redux/features/type.types";
import { toast } from "react-hot-toast";
import {
  EMAIL_ADDREESS_REGEX,
  PHONE_NUMBER_REGEX,
  USER_REGEX,
} from "../../../modals/authmodal/Regex";
import MainButton from "../../../../hooks/button/mainBTN";
import { TextDisplay } from "../../../../hooks";

const Contact = () => {
  const { flexCenter, flexRow, flexCol, flexRowCenter } = flexLayout;
  const { textCustom, mainLayout, mainText } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { formPadL } = themeWrapper;
  const dispatch = useDispatch();
  return (
    <>
      <div className={cx(`${flexCenter} ${flexCol} space-y-3`)}>
        <h1 className={cx(`${textCustom} ${mainLayout} text-4xl text-gray-50`)}>
          Contact Us
        </h1>
        <p
          className={cx(
            `${textCustom} ${mainLayout} text-sm break-words text-gray-50 text-center`
          )}
        >
          Send Us A Message Or A Question and we would respond immediately, also
          make sure you go to our FAQs for answers on similar questions you may
          have
        </p>
      </div>

      {/* Contsact */}
      <Formik
        initialValues={{
          username: "",
          email: "",
          message: "",
          phoneNumber: "",
          subject: "",
        }}
        validate={(values: TContact) => {
          const error: FormikErrors<TContact> = {};
          // let { email, message, username, phoneNumber, subject } = error;
          if (!values.email) {
            error.email = "Email Address is Required";
          } else if (!EMAIL_ADDREESS_REGEX.test(values.email)) {
            error.email = "Invalid email address";
          }
          if (!values.username) {
            error.username = "Username is inVALID";
          } else if (!USER_REGEX.test(values.username)) {
            error.username = "Username is Should Not be greater than 10";
          }
          if (!values.message) {
            error.message = "Message is Invalid";
          } else if (values.message.length > 100) {
            error.username =
              "Your message is too long and should be less than 100 characters ";
          }
          if (!values.phoneNumber) {
            error.phoneNumber = "PHONE NUMBER IS INVALID";
          } else if (values.phoneNumber >= 10) {
            error.phoneNumber = "Phone Number is Required";
          }
          // !PHONE_NUMBER_REGEX.test(values.phoneNumber as string)
          if (!values.subject) {
            error.subject = "Subject is Invalid";
          } else if (values.subject.length > 50) {
            error.subject =
              "Subject is too long and should be less than 50 characters";
          }
          return error;
        }}
        onSubmit={async (
          values,
          { setSubmitting, validateField, setTouched, resetForm }
        ) => {
          try {
            // event.preventDefault()
            setSubmitting(true);
            // const { email, message, username, phoneNumber, subject } = values;
            const UserRequest: THomeContact = {
              _type: "homeContact",
              ...values,
            };
            // @ts-ignore
            dispatch(getUserContact(UserRequest));
            alert(JSON.stringify(UserRequest, null));
            setSubmitting(false);
            resetForm();
            // if (values) return dispatch(getUserContact(UserRequest));
          } catch (error) {
            setSubmitting(false);
            resetForm();
            if (error instanceof Error) return console.error(error.message);
          }
        }}
      >
        {({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          errors,
        }) => {
          const { email, message, username, phoneNumber, subject } = values;
          console.log("Contct Information", errors);

          return (
            <form className={cx(`${XFull} h-auto`, ``)} onSubmit={handleSubmit}>
              <div className={`${boxFull} ${flexCol} gap-y-5`}>
                <div className={cx(`${XFull}`)}>
                  <TextField
                    label=""
                    name="username"
                    handleChange={handleChange}
                    placeholder="Your Full Names"
                    value={username}
                    type={"text"}
                    error={errors.username}
                    touched={touched.username}
                    onBlur={handleBlur}
                  />
                </div>
                <div className={cx(`${flexRowCenter} gap-x-4`)}>
                  {/*  */}
                  <div className="w-five max-w-six">
                    <TextField
                      label=""
                      name="email"
                      // onChange={() => handleChange}
                      placeholder="Your Email Address"
                      value={email}
                      error={errors.email}
                      touched={touched.email}
                      handleChange={handleChange}
                      type={"email"}
                      title={"Emal"}
                      onBlur={handleBlur}
                    />
                    {/* {errors.email} */}
                  </div>
                  <div className="w-five max-w-five">
                    <TextField
                      label=""
                      name="phoneNumber"
                      handleChange={handleChange}
                      placeholder="Your Mobile Number"
                      value={phoneNumber}
                      error={errors.phoneNumber}
                      touched={touched.phoneNumber}
                      type={"number"}
                      onBlur={handleBlur}
                    />
                  </div>
                  {/*  */}
                </div>
                <div className={cx(`${XFull}`)}>
                  <TextField
                    label=""
                    name="subject"
                    handleChange={handleChange}
                    error={errors.subject}
                    touched={touched.subject}
                    placeholder="Subject "
                    value={subject}
                    type={"text"}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="w-full">
                  <textarea
                    name="message"
                    id=""
                    className={cx(
                      `${XFull} h-40 ${formPadL} rounded-md border border-orange`,
                      `${mainLayout} ${textCustom} text-sm`
                    )}
                    placeholder="Type Your Message"
                    value={message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>

                  {errors.message && touched.message && (
                    <TextDisplay>{errors.message}</TextDisplay>
                  )}
                </div>
              </div>
              <div>
                <MainButton
                  isRounded={true}
                  disabled={isSubmitting}
                  type={"submit"}
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </MainButton>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default Contact;
