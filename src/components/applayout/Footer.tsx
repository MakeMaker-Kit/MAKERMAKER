import React from "react";
import cx from "classnames";
import { textStyles, themes, flexLayout } from "../../styles/themes/theme";

const Footer = () => {
  const {} = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const {} = flexLayout;
  return (
    <>
      <div className={cx(`${marX + " " + padY}`)}>
        <div className={`${boxFull} ${containerWrapper}`}></div>
      </div>
    </>
  );
};

export default Footer;
