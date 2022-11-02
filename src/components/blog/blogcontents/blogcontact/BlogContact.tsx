import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";

const BlogContact = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { mainMarX, largeMarX } = themeWrapper;
  const { flexRowCenterBetween, flexRow, flexCenter, flexRowCenter } =
    flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        <div className={`${mainMarX}`}>
          <div className={cx(`${boxFull}`)}>
            {/* BlogContact Layout  */}
            <div
              className={cx(
                `${XFull} h-48 py-10 px-20 rounded-lg shadow-md ${containerWrapper} `
              )}
            >
              <div
                className={cx(`${boxFull} ${flexRowCenterBetween} bg-black`)}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContact;
