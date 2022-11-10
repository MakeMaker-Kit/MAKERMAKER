import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import Contents from "./Contents";
import ImageViewer from "./ImageViewer";
const DetailMoreWrapper = () => {
  const { XFull } = themes;
  const { flexCol, flexRow, flexRowCenter } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={cx(`${flexRow} ${XFull} flex-wrap basis-full gap-x-2`)}>
        {/* IMAGE LAYOUT  */}
        <div className={cx(`w-full max-w-five flex-[0_0_47%]`)}>
          <div className={cx(`${XFull}`)}>
            <ImageViewer />
          </div>
        </div>
        {/* CONTENT LAYOUT */}
        <div className={cx(`w-full max-w-five flex-[0_0_47%]`)}>
          <div className={cx(`${XFull}`)}>
            <Contents />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMoreWrapper;
