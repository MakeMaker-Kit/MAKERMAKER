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
            <div className={cx(`h-52 w-[500px]`, ` pt-16 relative`)}>
              <div
                className={`${boxFull} shadow-amber-800 shadow-lg border-t border-solid border-spacing-9 border-appPink rounded-lg px-5 pb-4`}
              >
                {/* Image VIewer */}
                <div
                  className={cx(
                    ` absolute  top-3 left-[45%] mx-auto`,
                    `w-20 h-20 rounded-full bg-gradient-to-r from-slate-900 via-appBlue to-red-100 z-[10]`,
                    `p-1 `
                  )}
                >
                  <div
                    className={cx(
                      `${boxFull} ${flexCenter} bg-white z-10 rounded-full`
                    )}
                  >
                    <h1>Hello</h1>
                  </div>
                </div>
                {/* content */}
                <div className={cx(`w-full pt-10 `)}>
                  <div className={cx(`h-full ${flexCol} space-y-6`)}>
                    <p
                      className={cx(
                        `line-clamp-5 ${textCustom} ${mainLayout} text-xs text-center font-cascadiacodePLItalic font-semibold`
                      )}
                    >
                      I have even had kids who would never speak up or engage in
                      much of anything ask to come in at lunch to experiment!
                      NOW that makes me happy!…
                    </p>
                    <div
                      className={cx(
                        `${flexCenter} ${flexRowCenter} space-x-2 ${mainLayout} ${textCustom} text-sm font-bold text-appBlue`
                      )}
                    >
                      <h1>Alexandar Ibekason</h1>
                      <div className="w-px h-5 bg-black" />
                      <h1>Wizardomw</h1>
                    </div>
                  </div>
                </div>
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
