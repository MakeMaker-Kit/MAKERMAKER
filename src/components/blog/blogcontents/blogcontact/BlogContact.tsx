import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import Input from "../../../../hooks/Input";
import Button from "../../../../hooks/button";
import MainButton from "../../../../hooks/button/mainBTN";

const BlogContact = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { mainMarX, largeMarX } = themeWrapper;
  const { flexRowCenterBetween, flexRow, flexCenter, flexRowCenter } =
    flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        <div className={`${mainMarX}`}>
          <div className={cx(`${boxFull}`)}>
            {/* BlogContact Layout  */}
            <div
              className={cx(
                `${XFull} h-28 py-10 px-20 rounded-lg shadow-md border bg-gray-50 `
              )}
            >
              <div
                className={cx(`${boxFull} ${flexRowCenterBetween} space-x-3 `)}
              >
                <div className={cx(`w-two max-w-two`)}>
                  <div
                    className={`${flexCenter} ${XFull} ${textCustom} ${mainLayout} text-lg font-gordita break-words `}
                  >
                    <h1 className={`max-w-nine`}>
                      Subscribe for our Blog Newsletter
                    </h1>
                  </div>
                </div>
                <div className={`w-six max-w-six`}>
                  <div className={`${flexCenter} ${XFull}`}>
                    <Input
                      isRounded={true}
                      placeholder={`Enter Your Email`}
                    ></Input>
                  </div>
                </div>
                <div className={`w-full max-w-two`}>
                  <MainButton isRounded={true}>Subscribe</MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContact;
