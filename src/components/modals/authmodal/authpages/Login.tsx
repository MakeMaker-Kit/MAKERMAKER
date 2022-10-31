import React from "react";
import cx from "classnames";
import { AuthContentType } from "../../../../types/global.types";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";

const Login: React.FC<AuthContentType> = ({ generateTitle, page }) => {
  const {
    flexCol,
    flexRow,
    flexRowCenter,
    flexAround,
    flexColBetween,
    flexCenter,
  } = flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { boxFull, XFull, containerWrapper } = themes;
  return (
    <>
      <div className={cx(`${boxFull} ${flexCol}`)}>
        <div>
          <h2
            className={cx(
              `${textCustom} ${mainLayout} text-lg font-playfair capitalize `
            )}
          >
            {generateTitle[page]}
          </h2>
        </div>
        {/*  */}
        <div className={cx(`${boxFull} ${flexColBetween} ${containerWrapper}`)}>
          <div className={cx(`h-[90%] max-h-[90%] px-5 py-3`)}>
            <div className={`${boxFull} ${containerWrapper}`}></div>
          </div>
          <div className="w-full h-px bg-gray-700" />
          <div className={cx(`h-[10%] max-h-[10%] `)}>
            <div
              className={cx(
                `${boxFull} ${flexRowCenter} space-x-3 justify-center`,
                `${mainLayout} ${textCustom} text-xs `
              )}
            >
              <p>Dont have an account</p>
              <span className={cx(`underline`)}>Register Here</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
