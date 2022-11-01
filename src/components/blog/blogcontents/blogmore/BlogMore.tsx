import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const BlogMore = () => {
  const { flexCol, flexRow, flexStart, flexRowCenter } = flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const {} = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const { ArchiveIcon } = useIcon();
  return (
    <>
      <div className={cx(`${boxFull} ${flexCol} gap-y-5`)}>
        <div className={` px-4 py-8 bg-gray-50 rounded-md shadow-md`}>
          <div className={cx(`${boxFull} ${flexCol} space-y-3`)}>
            <div className={cx(`${flexStart} ${mainLayout} ${textCustom}`)}>
              <h1 className={`text-lg  font-bold `}>Latest Post</h1>
            </div>
            {/*  */}
            <div className={cx(`${XFull} ${flexCol} space-y-4`)}>
              {Array(4)
                .fill(0)
                .map((i) => (
                  <div className={cx(`${XFull} h-20 max-h-20 `)} key={i}>
                    <div className={`${boxFull} ${flexRow} gap-x-4`}>
                      <div
                        className={cx(
                          `w-three max-w-three`,
                          `border border-dotted border-gray-500 rounded-lg cursor-pointer`
                        )}
                      >
                        <img
                          src="https://bunzo-react.pages.dev/static/3f2cc4611a3391c544d45cdab82093fc/97361/02_featured-video.webp"
                          alt=""
                          title=""
                          width={400}
                          height={400}
                          className={`max-w-full w-full h-full object-center  object-contain`}
                        />
                      </div>
                      <div className={cx(`w-seven max-w-seven`, ``)}>
                        <div
                          className={`${boxFull} ${flexCol} ${flexStart} space-y-2`}
                        >
                          {/*  */}
                          <div
                            className={`${textCustom} ${mainLayout} max-w-full`}
                          >
                            <h2
                              className={`text-sm font-playfair line-clamp-2 text-black font-black tracking-wider cursor-pointer`}
                            >
                              Customize your WooCommerce store with countless
                              Web
                            </h2>
                          </div>
                          {/*  */}
                          <div className={cx(`${flexRowCenter}`)}>
                            <span>
                              <ArchiveIcon />
                            </span>
                            <p
                              className={cx(
                                `${mainLayout} ${textCustom} text-xs font-playfair font-semibold`
                              )}
                            >
                              15<sub>th</sub> April 2022{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={` px-4 py-8`}>
          <div className={cx(`${boxFull}`)}></div>
        </div>
      </div>
    </>
  );
};

export default BlogMore;
