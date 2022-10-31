import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";

const HomeContact = () => {
  const { themeWrapper, XFull, boxFull, transitions } = themes;
  const { largeMarX, marX, padY } = themeWrapper;
  const { flexRow, flexCol, flexCenter, flexStart } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={cx(`${marX} ${padY}`)}>
        <div className={cx(`${boxFull}`)}></div>
      </div>
    </>
  );
};

export default HomeContact;
