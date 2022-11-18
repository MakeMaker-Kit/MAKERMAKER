import React from "react";
import cx from "classnames";
import MainButton from "../../../../hooks/button/mainBTN";
import { useIcon } from "../../../../hooks/dispatchContext";
import { TypedObject } from "@sanity/types/dist/dts";

import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";
import { TAUTHOR } from "../../../../types/global.types";
import { urlFor } from "../../../../client";

const BlogProfileMainLayout = ({
  title,
  author,
  image,
  authorImage,
}: {
  title?: string;
  body?: TypedObject[];
  image?: string;
  authorImage?: string;
  categories?: {
    title?: string;
    description?: string;
    image?: string;
  }[];
  tags: {}[];
  author: TAUTHOR;
}) => {
  const {
    flexCol,
    flexRow,
    flexRowCenter,
    flexRowCenterBetween,
    flexStart,
    flexCenter,
  } = flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper, imageLayout } =
    themes;
  const {} = themeWrapper;
  const { textCustom, mainLayout } = textStyles;
  const { ArchiveIcon } = useIcon();
  return (
    <>
      <div className={cx(`${flexCol} space-y-6`)}>
        <div
          className={`${flexRowCenter} space-x-2 ${textCustom} ${mainLayout} text-lg font-black capitalize`}
        >
          <p>Author : </p>
          <p>{author.name}</p>
        </div>
        {/* Main Blog Profile Main Container */}
        <div className={cx(`${flexCol} gap-y-5`)}>
          <div
            className={cx(
              `max-w-full h-[350px] max-h-[350px] border border-dotted border-gray-500`
            )}
          >
            <img
              // src="https://bunzo-react.pages.dev/static/f67d1f2ca6e80a3cbde72499f0bf17c1/1d064/05.webp"
              src={authorImage}
              alt=""
              title=""
              data-loading="lazy"
              className={cx(`${imageLayout} object-center rounded-lg `)}
            />
          </div>
          <div className={cx(`${flexCol} gap-y-3`)}>
            <div className={`${XFull} ${flexRowCenterBetween}`}>
              <div className={cx(`${flexRowCenter} `)}>
                <div className={`w-40 p-3`}>
                  <MainButton
                    isRounded={true}
                    bgColor={`bg-blue-100`}
                    textColor={`text-gray-800`}
                  >
                    Progamming{" "}
                  </MainButton>
                </div>
                {/*  */}
                <p>
                  By <span>{author.name}</span>
                </p>
              </div>
              {/*  */}
              <div
                className={`${flexRowCenter} space-x-3 text-xs ${textCustom} ${mainLayout}`}
              >
                <ArchiveIcon />
                <p>6th june 2002</p>
                <p>.</p>
                <p>10 min Read</p>
              </div>
            </div>
            {/* Header */}
            <div
              className={`${XFull} ${flexStart} line-clamp-1 ${mainLayout} ${textCustom} text-lg `}
            >
              <h1 className={`font-cascadiacode font-bold`}>{title}</h1>
            </div>
            {/* Descition */}
            <div
              className={`${XFull} max-w-full line-clamp-2 ${mainLayout} ${textCustom}`}
            >
              <p className={`tracking-wider leading-relaxed text-xs`}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical literature from 459,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Virginia looked up one of the more obscure Latin
                wor…c
              </p>
            </div>
            {/*  */}
            <div className={`${XFull} border-y py-6 px-8 bg-transparent`}>
              <div
                className={`${boxFull} ${flexRowCenterBetween} ${textCustom} ${mainLayout} text-xs`}
              >
                <div className={cx(`${flexRowCenter} gap-x-2`)}>
                  <span className={`${flexRowCenter} gap-x-1`}>
                    <ArchiveIcon />
                    <p>100</p>
                  </span>
                  <span className={`${flexRowCenter} gap-x-1`}>
                    <ArchiveIcon />
                    <p>100</p>
                  </span>
                </div>
                <div className={`${flexRowCenter} gap-x-2`}>
                  <ArchiveIcon />
                  <ArchiveIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Blog Profile Main Container */}
      </div>
    </>
  );
};

export default BlogProfileMainLayout;
