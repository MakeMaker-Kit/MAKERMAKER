import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";

const HomeBlog = () => {
  const { flexCol, flexRow, flexWrap, flexStart } = flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { themeWrapper, containerWrapper, boxFull, XFull } = themes;
  const { largeMarX, marX, padY } = themeWrapper;
  return (
    <>
      <div className={cx(`${marX} ${padY}`)}>
        <div className={cx(`${boxFull} ${flexCol} space-y-2`)}>
          {/* BlogCardTitlw */}
          <div className={`${flexStart}`}>
            <h1
              className={cx(
                `${mainLayout} ${textCustom} text-2xl font-medium text-gray-600`
              )}
            >
              Our Blogs{" "}
            </h1>
          </div>
          <div
            className={cx(
              `${flexRow}`,
              `w-full h-full ${containerWrapper} gap-x-4 flex-nowrap overflow-x-scroll py-10`
            )}
          >
            {Array(6)
              .fill(0)
              .map((i) => (
                <div
                  key={i}
                  className={cx(
                    `w-three max-w-three h-40 ${containerWrapper} flex-shrink-0`
                  )}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
