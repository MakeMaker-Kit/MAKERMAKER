import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";

const Testimonial = () => {
  const { flexCol, flexWrap, flexRowCenter, flexRow, flexCenter } = flexLayout;
  const { mainText, mainLayout, textCustom } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  return (
    <>
      <div className={cx(`${marX} ${padY}`)}>
        <div className={cx(`${boxFull} ${flexCol} space-y-10`)}>
          <div className={cx(`${flexCenter}`)}>
            <h2
              className={cx(
                `${textCustom} ${mainLayout} text-4xl text-gray-500 tracking-wide `
              )}
            >
              From people who have tried our products
            </h2>
          </div>
          <div className={cx(`overflow-visible ${XFull} ${flexCenter}`)}>
            <div className={cx(`h-52 w-[500px]`, `${containerWrapper} `)}>
              <div className={`${boxFull} relative `}>
                <div
                  className={cx(
                    ` absolute  top-1 left-[45%] mx-auto`,
                    `w-20 h-20 rounded-full border border-gray-500`
                  )}
                ></div>
                <div
                  className={cx(`pt-16 w-full`, `${containerWrapper} `)}
                ></div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
