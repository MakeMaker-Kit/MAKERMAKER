import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const BlogCategories = () => {
  const { flexCol, flexRow, flexRowCenterBetween, flexCenter } = flexLayout;
  const { themeWrapper, containerWrapper, boxFull, XFull, transition } = themes;
  const {} = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const { ArrowRightIcon } = useIcon();
  return (
    <>
      <div className={`${boxFull}`}>
        <div className="py-3 ">
          <div className={cx(`${boxFull} ${flexCol} gap-y-5`)}>
            {Array(5)
              .fill(0)
              .map((i) => (
                <div
                  key={i}
                  className={cx(
                    `h-24 ${XFull}`,
                    `rounded-lg shadow group ${transition} border border-dotted border-slate-300`
                  )}
                >
                  <div
                    className={cx(
                      `bg-center bg-cover bg-no-repeat bg-clip-border bg-origin-content max-w-full w-full h-full cursor-pointer rounded-lg group-hover:p-2`,
                      ` bg-[url('../assets/images/img2.webp')] bghover`
                    )}
                  >
                    <div className={cx(`relative ${boxFull}`)}>
                      <div
                        className={cx(
                          `absolute top-[40%] w-full invisible group-hover:visible`,
                          `${flexRowCenterBetween}`
                        )}
                      >
                        <div
                          className={cx(
                            `${mainLayout} ${textCustom} text-sm font-semibold text-white font-gordita`
                          )}
                        >
                          <h3 className={cx(`tracking-wide`)}>Designing</h3>
                        </div>
                        <div
                          className={`w-auto h-8 p-2 bg-orange text-white rounded-md`}
                        >
                          <div className={`${boxFull} ${flexCenter}`}>
                            <ArrowRightIcon />
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

export default BlogCategories;
