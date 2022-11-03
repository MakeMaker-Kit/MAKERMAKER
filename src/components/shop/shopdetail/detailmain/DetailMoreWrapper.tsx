import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import Contents from "./contents";

const DetailMoreWrapper = () => {
  const { XFull } = themes;
  const { flexCol, flexRow, flexRowCenter } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={cx(`${flexRow} ${XFull} flex-wrap basis-full`)}>
        {/* IMAGE LAYOUT  */}
        <div className={cx(`w-full max-w-five flex-[0_0_48%]`)}>
          <div className={cx(`${XFull}`)}></div>
        </div>
        {/* CONTENT LAYOUT */}
        <div className={cx(`w-full max-w-five flex-[0_0_48%]`)}>
          <div className={cx(`${XFull}`)}>
            <Contents />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMoreWrapper;
