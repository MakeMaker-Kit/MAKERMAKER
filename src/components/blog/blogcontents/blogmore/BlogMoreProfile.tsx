import React from "react";
import cx from "classnames";
import {
  textStyles,
  themes,
  flexLayout,
} from "../../../../styles/themes/theme";

const BlogMoreProfile = () => {
  const {} = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper, imageLayout } =
    themes;
  const {} = themeWrapper;
  const {
    flexRowCenter,
    flexCol,
    flexRowCenterBetween,
    flexColCenter,
    flexCenter,
  } = flexLayout;
  return (
    <>
      <div
        className={`px-4 py-8 bg-white border border-dotted border-gray-300 rounded-lg shadow`}
      >
        <div className={`${boxFull} ${flexColCenter}`}>
          {/* image */}
          <div className={`h-24 w-24 border border-double rounded-full p-3`}>
            <div
              className={cx(
                `${boxFull} border border-dotted border-gray-300 rounded-full`
              )}
            >
              <img
                src="https://bunzo-react.pages.dev/static/e5e25dbd97017ad7fffd2049490b5ca1/1deab/team-2.webp"
                alt=""
                title=""
                data-loading="lazy"
                className={cx(`${imageLayout} object-center rounded-full`)}
              />
            </div>
          </div>
          {/*  */}
          <div className={`${flexColCenter}`}>
            <p>Wilson Ibekason</p>
            <p>Nigeria</p>
          </div>
          {/*  */}
          <div className={`${flexCenter} text-center`}>
            <p>
              Wilson been a front-end and UI designer for over 10 years. He
              helps develop HasThemes premium training products.
            </p>
          </div>
          {/*  */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default BlogMoreProfile;
