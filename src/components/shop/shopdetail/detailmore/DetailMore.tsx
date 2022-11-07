import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";

const DetailMore = () => {
  const { containerWrapper, boxFull, themeWrapper } = themes;
  const { padY } = themeWrapper;
  const { flexCol, flexStart } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={`${padY}`}>
        <div
          className={`${boxFull} ${flexCol} gap-y-10 ${mainLayout} ${textCustom} `}
        >
          <h1 className={cx(`text-start`)}>Details</h1>
          <div>
            <p className={`text-start`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              at porro est, architecto, quos earum tempore praesentium molestias
              facere itaque eius exercitationem alias amet provident harum
              delectus omnis incidunt excepturi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMore;
