import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";

const Contact = () => {
  const { flexCenter, flexRow, flexCol } = flexLayout;
  const { textCustom, mainLayout, mainText } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const {} = themeWrapper;
  return (
    <>
      <div className={cx(`${flexCenter}`)}>
        <h1 className={cx(`${textCustom} ${mainLayout} text-4xl text-gray-50`)}>
          Contact Us
        </h1>
      </div>
      {/* Contsact */}
      <div className={cx(`${XFull} h-40`, `${containerWrapper}`)}></div>
    </>
  );
};

export default Contact;
