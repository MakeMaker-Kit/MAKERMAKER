import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../../hooks/dispatchContext";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";

const ShopCategory = () => {
  const { boxFull } = themes;
  const { flexRowCenter, flexRowCenterBetween, flexCol } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { ChevronDownIcon, ChevronUpIcon, CameraIcon } = useIcon();
  return (
    <>
      <div className={`${boxFull} ${flexCol}`}>
        <div className={cx(`${flexRowCenterBetween}`)}>
          <div
            className={cx(
              `${flexRowCenter} ${mainLayout} ${textCustom} space-x-2 text-xs`
            )}
          >
            <CameraIcon />
            <p>Arduino </p>

            {/*  */}
          </div>

          {/*  */}
          <ChevronDownIcon />
        </div>
        <div
          className={cx(`${flexCol} pl-6 ${textCustom} ${mainLayout} text-xs`)}
        >
          {Array(3)
            .fill(0)
            .map((i) => (
              <p key={i + 1}>Battery</p>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
