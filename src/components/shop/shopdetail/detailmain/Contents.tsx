import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const Contents = () => {
  const {
    flexCol,
    flexStart,
    flexRowCenter,
    flexRowCenterBetween,
    flexCenter,
  } = flexLayout;
  const { boxFull } = themes;
  const { mainLayout, textCustom } = textStyles;
  const { HeartIcon } = useIcon();

  return (
    <>
      <div className={cx(`${flexCol} ${textCustom} ${mainLayout}`)}>
        {/*  */}
        <div className={`${flexCol}`}>
          <div className={`${flexRowCenterBetween}`}>
            <h1>Swordfish Fillet</h1>
            <div
              className={cx(
                `h-10 w-10 p-2 border border-orange outline-fuchsia-50 rounded-full`
              )}
            >
              <div className={`${boxFull} ${flexCenter}`}>
                <HeartIcon className={`w-4 h-4`} />
              </div>
            </div>
          </div>

          <div
          className={`${}`}
          
          >

          </div>
        </div>

        {/*  */}
        <div className={cx(`${flexStart} ${flexRowCenter} space-x-3`)}>
          <h1>$75.1 </h1>
          <p>$23</p>
        </div>
        {/*  */}
        <div></div>
      </div>
    </>
  );
};

export default Contents;
