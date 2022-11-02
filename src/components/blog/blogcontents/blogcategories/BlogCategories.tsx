import React from "react";
import cx from "classnames";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const BlogCategories = () => {
  const { flexCol, flexRow, flexRowCenterBetween } = flexLayout;
  const { themeWrapper, containerWrapper, boxFull, XFull, transition } = themes;
  const {} = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={`${boxFull}`}>
        <div className="py-3 ">
          <div className={cx(`${boxFull} ${flexCol}`)}>
            <div
              className={cx(
                `h-24 ${XFull} `,
                `rounded-md shadow-md group ${transition}`
              )}
            >
              <div
                className={cx(
                  `bg-center bg-cover bg-no-repeat bg-clip-border bg-origin-content max-w-full w-full h-full cursor-pointer `,
                  `group-hover:opacity-60 group-hover:bg-gradient-to-r from-slate-500  to-slate-600`
                )}
                style={{
                  backgroundImage: `url(https://bunzo-react.pages.dev/static/41a5d712368abaf4d9bbf437c64ebe73/05bbd/01.webp)`,
                }}
              >
                <div className={cx(`relative ${boxFull}`)}>
                  <div
                    className={cx(
                      `absolute top-[40%] w-full invisible group-hover:visible`,
                      `${flexRowCenterBetween}`
                    )}
                  >
                    <div>
                      <h3>Designing</h3>
                    </div>
                    <div>
                      <p>ss</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCategories;
