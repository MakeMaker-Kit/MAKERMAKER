import React from "react";
import cx from "classnames";
import { flexLayout, themes, textStyles } from "../../../styles/themes/theme";
import { generatedId } from "../../../hooks/localuuid/uuid";
import Input from "../../../hooks/Input";
import MainButton from "../../../hooks/button/mainBTN";

const MainFooter = () => {
  const { flexRow, flexRowCenter, flexCol, flexStart, flexCenter } = flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const {} = textStyles;
  return (
    <>
      <div className={cx(`${marX} py-10`)}>
        <div className={cx(`${boxFull}  `)}>
          <div className={cx(`${flexRow} space-x-10`)}>
            <div className={cx(`w-[48%] min-w-five h-auto`)}>
              <div className={` ${XFull} h-40 ${flexRow} space-x-5`}>
                {/*  */}

                <div className={cx(`w-five max-w-five`)}>
                  <div className={cx(`${boxFull} ${flexCol}`)}>
                    {/* MAKEMAKER ABOUT */}
                    <div className={`${flexStart} ${flexCol}`}>
                      {/* LOGO */}
                      <div
                        className={cx(
                          `w-28 h-10 border border-dotted border-gray-700 hover:border-appRed`
                        )}
                      >
                        <img
                          src="https://bunzo-react.pages.dev/static/3a02a06d11da91a4432f68ac04eda68d/e75ad/logo-white.webp"
                          alt=""
                          className={cx(
                            `max-w-full w-full h-full object-center object-contain`
                          )}
                        />
                      </div>
                      {/* LOGO DESCRIPTION */}
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quasi, esse.
                        </p>
                      </div>
                    </div>
                    <ul className={`${flexRowCenter} space-x-4`}>
                      {Array(4)
                        .fill(0)
                        .map((i) => (
                          <li
                            className={`w-12 h-12 ${flexCenter} border`}
                            key={generatedId(i)}
                          >
                            <p>djdj</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {/*  */}
                <div className={cx(`w-five max-w-five`)}>
                  <div
                    className={cx(
                      `${boxFull} ${flexCol} items-start  space-y-2 `
                    )}
                  >
                    <div className={`${flexStart}`}>
                      <h1 className={`text-start`}>Subscribe</h1>
                    </div>
                    <div className={`w-full max-w-full`}>
                      <Input placeholder="your name" isRounded={true} />
                    </div>
                    <div className={`w-full max-w-full`}>
                      <Input placeholder="your name" isRounded={true} />
                    </div>
                    <div className={`w-full max-w-nine ${flexCenter}`}>
                      <MainButton isRounded={true}>Subscibe</MainButton>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
            <div className={cx(`w-[48%] min-w-five h-auto`)}>
              <div className={` ${XFull}  ${flexRow}`}>
                {Array(3)
                  .fill(0)
                  .map((i) => (
                    <div
                      className={cx(`w-three max-w-five h-auto gap-x-10`)}
                      key={generatedId(i)}
                    >
                      <div className={cx(`boxFull  ${flexCol}`)}>
                        <span>Company</span>
                        <ul className={cx(`${flexCol}`)}>
                          {Array(4)
                            .fill(0)
                            .map((i) => (
                              <li key={generatedId(i)}>
                                <span>About Us</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
