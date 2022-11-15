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
import {
  EMAIL_ADDREESS_REGEX,
  PHONE_NUMBER_REGEX,
  USER_REGEX,
} from "../../../modals/authmodal/Regex";

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
          let { email, message, username, phoneNumber, subject } = error;
          if (!values.email) {
            email = "Email Address is Required";
          } else if (!EMAIL_ADDREESS_REGEX.test(values.email)) {
            email = "Invalid email address";
          }
          if (!values.username) {
            username = "Username is Required";
          } else if (!USER_REGEX.test(values.username)) {
            username = "Username is Required";
          }
          if (!values.message) {
            message = "Message is Required";
          } else if (values.message.length > 100) {
            username =
              "Your message is too long and should be less than 100 characters ";
          }
          if (!values.phoneNumber) {
            phoneNumber = "PHONE NUMBER IS INVALID";
          } else if (!PHONE_NUMBER_REGEX.test(values.phoneNumber as string)) {
            phoneNumber = "Phone Number is Required";
          }
          if (!values.subject) {
            subject = "Subject is Invalid";
          } else if (values.subject.length > 50) {
            subject =
              "Subject is too long and should be less than 50 characters";
          }
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // event.preventDefault()
            setSubmitting(true);
            const { email, message, username, phoneNumber, subject } = values;
            const UserRequest: THomeContact = {
              _type: "homeContact",
              ...values,
            };
            // @ts-ignore
            if (values) return await dispatch(getUserContact(UserRequest));
          } catch (error) {
            setSubmitting(false);
            if (error instanceof Error) return console.error(error.message);
          }
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => {
          const { email, message, username, phoneNumber, subject } = values;

          return (
            <form className={cx(`${XFull} h-96`, ``)} onSubmit={handleSubmit}>
              <div className={`${boxFull} ${flexCol} gap-y-5`}>
                <div className={cx(`${XFull}`)}>
                  <ContactTextField
                    label=""
                    name="username"
                    onChange={() => handleChange}
                    placeholder="Enter Your Full Name"
                    value={username}
                    type={"text"}
                  />
                  {/* <TextField
                    label=""
                    name="fullname"
                    onChange={() => handleChange}
                    placeholder="Your Full Name"
                    value={username}
                    type={"text"}
                  /> */}
                </div>
                <div className={cx(`${flexRowCenter} gap-x-4`)}>
                  {/*  */}
                  <div className="w-five max-w-six">
                    <TextField
                      label=""
                      name="email"
                      onChange={() => handleChange}
                      placeholder="Your Email Address"
                      value={email}
                      type={"email"}
                    />
                  </div>
                  <div className="w-five max-w-five">
                    {/* <TextField
                      label=""
                      name=" "
                      onChange={() => {}}
                      placeholder="Your Mobile Number"
                      value={phoneNumber}
                      type={"number"}
                    /> */}
                  </div>

                  {/*  */}
                </div>
                <div className={cx(`${XFull}`)}>
                  {/* <TextField
                    label=""
                    name=" "
                    onChange={() => handleChange}
                    placeholder="Subject "
                    value={subject}
                    type={"text"}
                  /> */}
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
                  ></textarea>
                </div>
              </div>
              <div>
                {/* <Button handleClick={() => {}}>Submit </Button> */}
                <button disabled={isSubmitting} type={"submit"}>
                  Submit
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default Contact;
