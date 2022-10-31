import React from "react";
import cx from "classnames";
import { AuthContentType } from "../../../../types/global.types";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import Input from "../../../../hooks/Input";
import MainButton from "../../../../hooks/button/mainBTN";
import { useIcon } from "../../../../hooks/dispatchContext";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Register: React.FC<AuthContentType> = ({
  generateTitle,
  page,
  setPage,
}) => {
  const { boxFull, XExtend } = themes;
  const { textCustom, mainLayout } = textStyles;
  const { flexCol, flexColBetween, flexRowCenter, flexRow, flexCenter } =
    flexLayout;
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
        <div className={cx(`${boxFull} ${flexColBetween} `)}>
          <div className={cx(`h-[90%] max-h-[90%] px-5 py-3 w-full`)}>
            <div className={`${boxFull}  ${flexCol} space-y-5 items-center`}>
              <div className={`${XExtend}`}>
                <Input isRounded={true} placeholder={`Enter your FullName `} />
              </div>
              {/*  */}
              <div className={`${flexRowCenter} space-x-2`}>
                <div className={`max-w-five w-five`}>
                  <Input isRounded={true} placeholder={`Ènter Your Email`} />
                </div>
                <div className={`max-w-five w-five`}>
                  <Input
                    isRounded={true}
                    placeholder={`Ènter Your Phone Number`}
                  />
                </div>
              </div>

              {/*  */}
              <div className={`${XExtend}`}>
                <Input isRounded={true} placeholder={`Enter your Password `} />
              </div>
              <div className={`${XExtend}`}>
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
                  Sign up with Google
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
              <p> Have an account</p>
              <span
                className={cx(`underline cursor-pointer text-black`)}
                onClick={() => setPage((currentPage) => currentPage - 1)}
              >
                Login Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
