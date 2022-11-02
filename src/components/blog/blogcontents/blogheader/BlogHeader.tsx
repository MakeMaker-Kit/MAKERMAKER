import React from "react";
import cx from "classnames";
import MainButton from "../../../../hooks/button/mainBTN";
import {
  textStyles,
  flexLayout,
  themes,
} from "../../../../styles/themes/theme";

const BlogHeader = () => {
  const {} = textStyles;
  const { flexRowCenterBetween, flexCenter } = flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { mainMarX } = themeWrapper;
  return (
    <>
      <div className={`${boxFull}  `}>
        <div className={`${mainMarX}`}>
          <div className={cx(`${XFull}`)}>
            {/* Heade Layout  */}
            <div className={cx(`h-28 ${XFull} ${containerWrapper}`)}>
              <div className={`${boxFull} ${flexRowCenterBetween}`}>
                <div></div>
                <div
                  className={`h-20 w-[500px] active:border focus-within:border border-dotted border-gray-700 bg-gray-100 rounded-lg`}
                >
                  <div className={`${boxFull} `}>
                    <div
                      className={cx(
                        `bg-cover bg-[100%_100%] bg-no-repeat  max-w-full w-full h-full relative`
                      )}
                      style={{
                        backgroundImage: `url(https://bunzo-react.pages.dev/static/7cecf1790616a9c34d415663739278e4/c47a1/header-add-banner.webp)`,
                      }}
                    >
                      <div
                        className={`absolute top-1/4 left-3 w-32
                      `}
                      >
                        <MainButton isRounded={true}>Shop Now</MainButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
