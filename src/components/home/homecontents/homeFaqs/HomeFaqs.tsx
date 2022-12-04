import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { FaqsOptions } from "../../../../types/global.types";
import { USEContext } from "../../../../services/context/learncontext/LearnContext";
interface Props {
  faqs: FaqsOptions;
}
const HomeFaqs = () => {
  const { themeWrapper, XFull, boxFull, containerWrapper } = themes;
  const { largeMarX, marX, padY } = themeWrapper;
  const { flexCol, flexStart, flexRow, flexCenter, flexResponsive } =
    flexLayout;
  const { textCustom, mainLayout, mainText } = textStyles;
  const { state } = USEContext();
  const { homeFaqs } = state;
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
          <div
            className={cx(
              `${flexResponsive.flexRowColReverse}   ${XFull} gap-x-5`
            )}
          >
            {homeFaqs.map(({ _id, title, desc, image }: FaqsOptions) => (
              <div
                key={_id}
                className={`w-full md:w-full lg:w-five h-auto border border-appGreen rounded-md  p-4`}
              >
                <div className={cx(`${boxFull} ${flexCol} space-y-4`)}>
                  {Array(1)
                    .fill(0)
                    .map((i) => (
                      <div
                        key={i + 1}
                        className={cx(
                          `h-36 ${XFull} } p-2`,
                          `border border-orange rounded-lg `
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
                                  {title}
                                </h1>
                              </div>
                              <div className={cx(`max-w-full line-clamp-4`)}>
                                <p
                                  className={cx(
                                    `text-xs font-light text-gray-500 tracking-widest leading-relaxed`
                                  )}
                                >
                                  {desc}
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
