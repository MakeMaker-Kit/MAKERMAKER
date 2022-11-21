import React from "react";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../../styles/themes/theme";
import { useIcon } from "../../../../../../hooks/dispatchContext";
import { TextDisplay } from "../../../../../../hooks";
import { Formik, FormikErrors } from "formik";
import { InputRef } from "../../../../../../types/global.types";
const TextField = ({ icon, placeholder }: InputRef) => {
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
          />
        </div>

        <TextDisplay>Enter your name</TextDisplay>
      </div>
    </>
  );
};
const CommentsDisplay = () => {
  const { XFull, containerWrapper, boxFull } = themes;
  const { flexCol, flexCenter } = flexLayout;
  const {} = textStyles;
  const { MdMarkEmailUnread, CiFaceMeh, BsFillTelephoneOutboundFill } =
    useIcon();
  return (
    <>
      <div
        className={`p-12 ${XFull} ${containerWrapper} bg-gray-100 rounded-2xl`}
      >
        <Formik initialValues={{}} validate={() => {}} onSubmit={() => {}}>
          {({ handleSubmit, handleChange, values, errors, touched }) => {
            const {} = values;
            return (
              <form className={`${boxFull} ${flexCol} space-y-6`}>
                {/* TextArea */}

                <div className={`${flexCol}`}>
                  <textarea
                    placeholder="Enter your message"
                    className={`text-start resize-none pt-3 pl-3 rounded-2xl mb-2`}
                    rows={7}
                    cols={0}
                  ></textarea>
                  <TextDisplay>Enter your Message</TextDisplay>
                </div>
                {/* Name */}
                <TextField
                  icon={
                    <CiFaceMeh
                      className={`absolute right-0 top-1/3 mr-4`}
                      size={20}
                    />
                  }
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
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default CommentsDisplay;
