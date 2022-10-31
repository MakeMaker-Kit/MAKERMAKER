import React from "react";
import cx from "classnames";
import { AuthContentType } from "../../../../types/global.types";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import Input from "../../../../hooks/Input";
import MainButton from "../../../../hooks/button/mainBTN";
import { useIcon } from "../../../../hooks/dispatchContext";

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
  const { AiOutlineGooglePlus } = useIcon();
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
          <div className={cx(`h-[90%] max-h-[90%] px-5 py-3 w-full`)}>
            <div
              className={`${boxFull} ${containerWrapper} ${flexCol} space-y-5 items-center`}
            >
              <div className={`max-w-full w-full`}>
                <Input isRounded={true} placeholder={`Ènter Your Email`} />
              </div>
              <div className={`w-full max-w-full`}>
                <Input isRounded={true} placeholder={`Enter your Password `} />
              </div>
              <div className={`w-full max-w-full`}>
                <Input
                  isRounded={true}
                  placeholder={`Confirm your Password `}
                />
              </div>
              {/* Login Button */}
              <div className={` w-full max-w-nine `}>
                <MainButton isRounded={true}>Login</MainButton>
              </div>
              {/*  */}
              <div
                className={`w-full ${flexRowCenter} space-x-1 justify-center cursor-pointer`}
              >
                <p
                  className={`${textCustom} ${mainLayout} text-xs italic font-playfair`}
                >
                  Sign in with Google
                </p>
                <div className="w-5 h-5 ">
                  <span
                    className={`${boxFull} ${flexCenter} bg-orange rounded-full`}
                  >
                    <AiOutlineGooglePlus className="text-gray-50" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-gray-700" />
          <div className={cx(`h-[10%] max-h-[10%] `)}>
            <div
              className={cx(
                `${boxFull} ${flexRowCenter} space-x-3 justify-center`,
                `${mainLayout} ${textCustom} text-xs font-playfair`
              )}
            >
              <p>Dont have an account</p>
              <span className={cx(`underline cursor-pointer text-black`)}>
                Register Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
