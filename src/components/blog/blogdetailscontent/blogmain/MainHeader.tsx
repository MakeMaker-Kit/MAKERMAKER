import React from "react";
import classNames from "classnames";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";

const MainHeader = () => {
  const { themeWrapper, XFull, boxFull, containerWrapper } = themes;
  const {} = themeWrapper;
  const { flexCol, flexRow, flexRowCenter, flexRowCenterBetween } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={classNames(`${flexCol}`)}>
        <div className={`${XFull} h-[350px] ${containerWrapper} rounded-xl`}>
          <img
            src="https://bunzo-react.pages.dev/static/d48582260f8f1d3f931ed2db15f51b82/1d064/03.webp"
            alt=""
            className={classNames(`max-w-full w-full h-full object-cover  `)}
            title={""}
            data-loading="lazy"
            width={400}
            height={400}
          />
        </div>
        <div className={`${flexRowCenterBetween}`}>
          <div className={`${flexRowCenter}`}></div>
          <div className={`${flexRowCenter}`}></div>
          <div className={`${flexRowCenter}`}></div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
