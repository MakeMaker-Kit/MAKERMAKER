import React from "react";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../../styles/themes/theme";
import { useIcon } from "../../../../../../hooks/dispatchContext";
import { TextDisplay } from "../../../../../../hooks";
import { Formik, FormikErrors } from "formik";
import { InputRef, TReviews } from "../../../../../../types/global.types";
import { client } from "../../../../../../client";
import { toast } from "react-hot-toast";
import {
  EMAIL_ADDREESS_REGEX,
  PHONE_NUMBER_REGEX,
  USER_REGEX,
} from "../../../../../modals/authmodal/Regex";
const TextField = ({
  icon,
  placeholder,
  error,
  touched,
  value,
  onChange,
  type,
  onBlur,
  handleChange,
  name,
}: InputRef) => {
  const { XFull, containerWrapper, boxFull } = themes;
  const { flexCol, flexCenter } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { BsFillTelephoneOutboundFill } = useIcon();
  return (
    <>
      <div className={`${flexCol} ${textCustom} ${mainLayout} space-y-2`}>
        <div className={`relative max-w-full `}>
          {icon}
          <input
            className={`w-full h-full p-5 rounded-full capitalize shadow-md border border-gray-500 tracking-wider`}
            placeholder={placeholder}
            onClick={handleChange}
            value={value}
            name={name}
          />
        </div>

        {error && touched && <TextDisplay>{error}</TextDisplay>}
      </div>
    </>
  );
};
const CommentsDisplay = () => {
  const { XFull, containerWrapper, boxFull } = themes;
  const { flexCol, flexCenter } = flexLayout;
  const {} = textStyles;
  const {
    MdMarkEmailUnread,
    CiFaceMeh,
    BsFillTelephoneOutboundFill,
    HiChatAlt2,
  } = useIcon();
  return (
    <>
      <div
        className={`p-12 ${XFull} ${containerWrapper} bg-gray-100 rounded-2xl`}
      >
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            phonenumber: "",
            message: "",
          }}
          validate={(values: TReviews) => {
            const error: FormikErrors<TReviews> = {};
            if (!values.fullname) {
              error.fullname = "Your Name is Required";
            } else if (!USER_REGEX.test(values.fullname)) {
              error.fullname = "Invalid Full Name";
            }
            if (!values.message) {
              error.message = "Your Message is Required";
            } else if (values.message.length > 200) {
              error.message =
                "Your Message is too long and should be less than 200 characters";
            }
            if (!values.email) {
              error.email = "Your Email Address is Required";
            } else if (!EMAIL_ADDREESS_REGEX.test(values.email)) {
              error.email = "Your Email Address is invalid ";
            }
            if (!values.phonenumber) {
              error.phonenumber = "Your Phone Number is Required ";
            } else if (!PHONE_NUMBER_REGEX.test(values.phonenumber)) {
              error.phonenumber = "Your phone Number must be valid";
            }
            return error;
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const ReviewData = {
                _type: "blogreview",
                ...values,
              };
              client.create(ReviewData).then(() => {
                setSubmitting(false);
                toast.success(`Your Message was submitted successfully `);
              });
              resetForm();
            } catch (err) {
              if (err instanceof Error) return err.message;
            }
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
            isSubmitting,
          }) => {
            const { fullname, message, phonenumber, email } = values;
            return (
              <form
                className={`${boxFull} ${flexCol} space-y-6`}
                onSubmit={handleSubmit}
              >
                {/* TextArea */}

                <div className={`${flexCol}`}>
                  <textarea
                    placeholder="Enter your message"
                    className={`text-start resize-none pt-3 pl-3 rounded-2xl mb-2`}
                    rows={7}
                    cols={0}
                  ></textarea>
                  {errors.message && touched.message && (
                    <TextDisplay>{errors.message}</TextDisplay>
                  )}
                </div>
                {/* Name */}
                <TextField
                  icon={
                    <CiFaceMeh
                      className={`absolute right-0 top-1/3 mr-4`}
                      size={20}
                    />
                  }
                  error={errors.fullname}
                  value={fullname}
                  handleChange={handleChange}
                  touched={touched.fullname}
                  type={"text"}
                  name={"fullname"}
                  placeholder={"Enter Your FullName"}
                />

                {/* Email Address */}
                <TextField
                  icon={
                    <MdMarkEmailUnread
                      className={`absolute right-0 top-1/3 mr-4`}
                      size={20}
                    />
                  }
                  placeholder={"Enter Your Email Address"}
                />
                {/*  Phone Number*/}
                <TextField
                  placeholder={"Enter Your Phone Number"}
                  icon={
                    <BsFillTelephoneOutboundFill
                      className={`absolute right-0 top-1/3 mr-4`}
                      size={20}
                    />
                  }
                />
                {/* Button */}

                <button
                  className={` p-4 bg-gray-400 max-w-four  rounded-full`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  <p
                    className={`${boxFull} p-2 hover:bg-gray-700 relative rounded-full`}
                  >
                    <span>Post comment</span>
                    <HiChatAlt2
                      className={"absolute top-1/4 right-0 mr-4"}
                      size={20}
                    />
                  </p>
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default CommentsDisplay;
