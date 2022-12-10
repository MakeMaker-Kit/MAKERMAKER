import React from "react";
import cx from "classnames";
import { AuthContentType } from "../../../../types/global.types";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import Input from "../../../../hooks/Input";
import MainButton from "../../../../hooks/button/mainBTN";

const ConfirmedForgotPassword: React.FC<AuthContentType> = ({
  generateTitle,
  setPage,
  page,
}) => {
  const { boxFull } = themes;
  const { flexColBetween, flexRowCenter, flexCol } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
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
        <div className={cx(`${boxFull} ${flexColBetween} `)}>
          <div className={cx(`h-[90%] max-h-[90%] px-5 py-3 w-full`)}>
            <div className={`${boxFull}  ${flexCol} space-y-5 items-center`}>
              <div className={`max-w-full w-full`}>
              {  /* @ts-ignore */}

                <Input isRounded={true} placeholder={`New Password `} />
              </div>
              <div className={`max-w-full w-full`}>
              {  /* @ts-ignore */}

                <Input isRounded={true} placeholder={`Confirm New Password `} />
              </div>
              {/* Login Button */}
              <div className={` w-full max-w-nine `}>
                <MainButton isRounded={true}>
                  Click to Send Email Link
                </MainButton>
              </div>
              {/* Comformation Link */}
              <div className="w-full max-w-nine whitespace-nowrap">
                <p
                  className={`${textCustom} ${mainLayout} text-xs font-playfair whitespace-nowrap flex`}
                >
                  We an email to <em>wilsonibason@gmail.com</em>{" "}
                  {/* <blockquote>comfirm it</blockquote>+ */}
                </p>
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
              <span
                className={cx(`underline cursor-pointer text-black`)}
                onClick={() => setPage((currentPage) => currentPage + 1)}
              >
                Register Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmedForgotPassword;
