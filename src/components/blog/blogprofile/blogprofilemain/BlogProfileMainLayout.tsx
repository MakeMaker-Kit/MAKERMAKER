import React from "react";
import cx from "classnames";
import MainButton from "../../../../hooks/button/mainBTN";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const BlogProfileMainLayout = () => {
  const { flexCol, flexRow, flexRowCenter, flexRowCenterBetween } = flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper, imageLayout } =
    themes;
  const {} = themeWrapper;
  const { textCustom, mainLayout } = textStyles;
  return (
    <>
      <div className={cx(`${flexCol} space-y-6`)}>
        <div
          className={`${flexRowCenter} space-x-2 ${textCustom} ${mainLayout} text-lg font-black`}
        >
          <p>Author : </p>
          <p>Wilson</p>
        </div>
        {/* Main Blog Profile Main Container */}
        <div className={cx(`${flexCol} `)}>
          <div
            className={cx(
              `max-w-full h-[350px] max-h-[350px] border border-dotted border-gray-500`
            )}
          >
            <img
              src="https://bunzo-react.pages.dev/static/f67d1f2ca6e80a3cbde72499f0bf17c1/1d064/05.webp"
              alt=""
              title=""
              data-loading="lazy"
              className={cx(`${imageLayout} object-center rounded-lg `)}
            />
          </div>
          <div className={cx(`${flexCol}`)}>
            <div className={`${XFull} ${flexRowCenterBetween}`}>
              <div className={cx(`${flexRowCenter}`)}>
                <div>
                  <MainButton isRounded={true}>Progamming </MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Blog Profile Main Container */}
      </div>
    </>
  );
};

export default BlogProfileMainLayout;
