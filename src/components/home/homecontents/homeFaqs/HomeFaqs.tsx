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
  const {} = textStyles;
  return (
    <>
      <div className={cx(`${marX} ${padY}  `)}>
        <div className={cx(`${XFull} ${flexCol}`)}>
          {/* FAQS Heading */}
          <div className={cx(`${flexCol} space-y-3`, `${flexStart}`)}>
            <h1>Moet Asked Questions</h1>
            <p>Here are some of the most Frequently asked Questions</p>
          </div>
          {/* FAQS Contents */}
          <div className={cx(`${flexRow} ${XFull}`)}>
            {Array(2)
              .fill(0)
              .map((i) => (
                <div
                  key={i}
                  className={`w-full md:w-full lg:w-five h-40 ${containerWrapper} p-4`}
                >
                  <div className={cx(`${boxFull} ${flexCol} space-y-4`)}>
                    <div
                      className={cx(`h-36 ${XFull} ${containerWrapper} p-2`)}
                    >
                      <div className={`${boxFull} ${flexRow} items-center`}>
                        <div className={`w-20 h-20 border rounded-full`}></div>
                        <div
                          className={cx(
                            `w-seven max-w-seven h-full rounded-md`
                          )}
                        >
                          <div
                            className={cx(
                              `${XFull} ${flexCol} flex  justify-center`
                            )}
                          >
                            <div>
                              <h1>Lorem ipsum dolor sit.</h1>
                            </div>
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consectetur, in!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
