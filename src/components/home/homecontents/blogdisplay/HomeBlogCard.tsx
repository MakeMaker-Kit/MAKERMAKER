import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";

const HomeBlogCard = () => {
  const { flexCol, flexRow, flexWrap } = flexLayout;
  const {} = textStyles;
  const { themeWrapper, containerWrapper, boxFull, XFull } = themes;
  const { largeMarX, marX, padY } = themeWrapper;
  return (
    <>
      <div className={cx(`${marX} ${padY}`)}>
        <div className={cx(`${boxFull}`)}></div>
      </div>
    </>
  );
};

export default HomeBlogCard;
