import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import TextField from "./textfield/TextField";
import Button from "../../../../hooks/button";

const Contact = () => {
  const { flexCenter, flexRow, flexCol, flexRowCenter } = flexLayout;
  const { textCustom, mainLayout, mainText } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { formPadL } = themeWrapper;
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
      <div className={cx(`${XFull} h-96`, ``)}>
        <div className={`${boxFull} ${flexCol} gap-y-5`}>
          <div className={cx(`${XFull}`)}>
            <TextField />
          </div>
          <div className={cx(`${flexRowCenter} gap-x-4`)}>
            {/*  */}
            <div className="w-five max-w-six">
              <TextField />
            </div>
            <div className="w-five max-w-five">
              <TextField />
            </div>

            {/*  */}
          </div>
          <div className={cx(`${XFull}`)}>
            <TextField />
          </div>
          <div className="w-full">
            <textarea
              name=""
              id=""
              className={cx(
                `${XFull} h-40 ${formPadL} rounded-md border border-orange`,
                `${mainLayout} ${textCustom} text-sm`
              )}
              placeholder="Type Your Message"
            ></textarea>
          </div>
        </div>
        <div>
          <Button handleClick={() => {}}>Submit </Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
