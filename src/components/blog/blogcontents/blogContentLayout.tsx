import React from "react";
import cx from "classnames";
import { flexLayout, themes } from "../../../styles/themes/theme";
const BlogContentLayout = () => {
  const { flexRow, flexResponsive } = flexLayout;
  const { themeWrapper, containerWrapper, boxFull, boxExtend, XExtend } =
    themes;
  const { mainMarX } = themeWrapper;
  return (
    <>
      <div className={`${mainMarX} h-[1000px]`}>
        <div className={`${boxExtend} ${containerWrapper}`}>
          <div className={cx(`${flexResponsive.flexRowCol}`)}>
            <div
              className={cx(
                `w-full md:w-full md:max-w-full lg:w-six lg:max-w-six h-40`,
                `${containerWrapper}`
              )}
            >
              <div className={`${XExtend} ${flexResponsive.flexRowCol}`}>
                <div
                  className={cx(
                    `w-full md:w-four md:max-w-four lg:w-four h-40`,
                    `${containerWrapper}`
                  )}
                ></div>
                <div
                  className={cx(
                    `w-full md:w-six md:max-w-six h-40`,
                    `${containerWrapper}`
                  )}
                ></div>
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-four lg:max-w-four h-40`,
                `${containerWrapper}`
              )}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContentLayout;
