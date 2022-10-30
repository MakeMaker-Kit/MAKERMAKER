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
  const { flexCol, flexStart, flexRow } = flexLayout;
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
                  className={`w-full md:w-full lg:w-five h-20 ${containerWrapper}`}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFaqs;
