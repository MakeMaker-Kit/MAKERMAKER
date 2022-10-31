import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";

const HomeFaqs = () => {
  const { themeWrapper, XFull, boxFull, containerWrapper } = themes;
  const { largeMarX, marX, padY } = themeWrapper;
  const { flexCol, flexStart, flexRow, flexCenter } = flexLayout;
  const { textCustom, mainLayout, mainText } = textStyles;
  return (
    <>
      <div className={cx(`${marX} ${padY}  `)}>
        <div className={cx(`${XFull} ${flexCol} space-y-6`)}>
          {/* FAQS Heading */}
          <div
            className={cx(
              `${flexCol} space-y-3`,
              `${flexCenter}`,
              `${textCustom} ${mainLayout}`
            )}
          >
            <h1 className={`text-4xl`}>Most Asked Questions</h1>
            <p className={`text-xl `}>
              Here are some of the most Frequently asked Questions
            </p>
          </div>
          {/* FAQS Contents */}
          <div className={cx(`${flexRow} ${XFull} gap-x-5`)}>
            {Array(2)
              .fill(0)
              .map((i) => (
                <div
                  key={i}
                  className={`w-full md:w-full lg:w-five h-auto border border-slate-800 rounded-md  p-4`}
                >
                  <div className={cx(`${boxFull} ${flexCol} space-y-4`)}>
                    {Array(4)
                      .fill(0)
                      .map((i) => (
                        <div
                          key={i + 1}
                          className={cx(
                            `h-36 ${XFull} } p-2`,
                            `border border-slate-500 rounded-lg `
                          )}
                        >
                          <div
                            className={`${boxFull} ${flexRow} items-center space-x-3`}
                          >
                            <div className={`w-20 h-20 border rounded-full`}>
                              <div className={cx(`${boxFull} ${flexCenter}`)}>
                                <p>Hello</p>
                              </div>
                            </div>
                            <div
                              className={cx(
                                `w-seven max-w-seven h-full rounded-md`
                              )}
                            >
                              <div
                                className={cx(
                                  `${XFull} ${flexCol} flex  justify-center ${mainLayout} ${textCustom} space-y-4`
                                )}
                              >
                                <div>
                                  <h1
                                    className={cx(
                                      `text-sm tracking-wider text-gray-800`
                                    )}
                                  >
                                    Lorem ipsum dolor sit.
                                  </h1>
                                </div>
                                <div className={cx(`max-w-full line-clamp-4`)}>
                                  <p
                                    className={cx(
                                      `text-xs font-light text-gray-500 tracking-widest leading-relaxed`
                                    )}
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consectetur, in!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFaqs;
