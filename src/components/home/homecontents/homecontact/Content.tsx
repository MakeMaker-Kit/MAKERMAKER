import React from "react";
import cx from "classnames";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";

const Content = () => {
  const { flexCenter, flexStart, flexCol } = flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { themeWrapper } = themes;
  const {} = themeWrapper;
  return (
    <>
      <div className={cx(`${flexCenter}`)}>
        <h1 className={cx(`${mainLayout} ${textCustom} text-4xl text-gray-50`)}>
          Contact Infromation
        </h1>
      </div>
    </>
  );
};

export default Content;
