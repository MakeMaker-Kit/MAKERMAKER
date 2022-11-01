import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const BlogMain = () => {
  const { flexCol, flexRow, flexRowCenter, flexCenter, flexRowCenterBetween } =
    flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper, YFull } = themes;
  const {} = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const { HeartFilledIcon, HeartIcon, ReaderIcon, ArchiveIcon } = useIcon();
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        <div className={`p-3`}>
          <div className={cx(`${XFull} ${flexCol}`)}>
            <div className={`${XFull} h-[9rem] `}>
              <div className={`${boxFull} ${flexRow} gap-x-5`}>
                <div className={cx(`w-three max-w-three ${YFull} rounded-md`)}>
                  <img
                    src="https://bunzo-react.pages.dev/static/dcb17957c78e01b1c55a19531f8a2bb0/c6aca/06.webp"
                    alt=""
                    className={cx(
                      `w-full max-w-full h-full object-center object-cover rounded-md border border-dotted border-gray-600`
                    )}
                  />
                </div>
                <div className={cx(`w-seven max-w-seven ${YFull} `)}>
                  <div
                    className={cx(
                      `${boxFull} ${flexCol} space-y-5 ${textCustom} ${mainLayout}`
                    )}
                  >
                    <div className={`${flexRowCenter} gap-x-5`}>
                      <div className={`w-auto h-8 p-1 border rounded-md`}>
                        <div className={cx(`${boxFull} ${flexCenter}`)}>
                          <p className={`text-sm font-gordita`}>Business</p>
                        </div>
                      </div>
                      <p className={cx(`text-sm text-gray-500`)}>
                        By <span className="text-gray-900">Wilson</span>
                      </p>
                    </div>
                    <div>
                      <h2
                        className={cx(
                          `text-[16px] font-gordita tracking-wider font-semibold`
                        )}
                      >
                        Customize your WooCommerce store with countless Web
                      </h2>
                    </div>
                    <div className={`${flexRowCenterBetween}`}>
                      <div
                        className={`${flexRowCenter} space-x-2 font-gordita text-sm  font-light`}
                      >
                        <span>
                          <ArchiveIcon />
                        </span>
                        <p className="tracking-tight">03/05/2021.</p>
                        <p>10 min read</p>
                      </div>
                      <div className={`${flexRowCenter} space-x-1`}>
                        <HeartFilledIcon className={`w-4.5 h-4.5`} />
                        <ReaderIcon className={`w-4.5 h-4.5`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
