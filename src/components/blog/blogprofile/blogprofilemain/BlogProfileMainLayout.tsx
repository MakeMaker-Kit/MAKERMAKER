import React from "react";
import cx from "classnames";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
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
  mainImage,
  category,
  date,
  slug,
  description,
  id,
}: {
  title?: string;
  body?: TypedObject[];
  image?: string;
  mainImage?: string;
  slug?: string;
  date?: string;
  description?: string;
  category: {
    title?: string;
    description?: string;
    image?: string;
    slug: string;
  };
  tags: {}[];
  author: TAUTHOR;
} & { id?: string }) => {
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
  const navigate = useNavigate();
  const { ArchiveIcon } = useIcon();
  return (
    <>
      <div className={cx(`${flexCol} space-y-6 border-y`)}>
        <div
          className={`${flexRowCenter} space-x-2 ${textCustom} ${mainLayout} text-lg font-black capitalize`}
        >
          <p>Author : </p>
          <p>{author.name}</p>
        </div>
        {/* Main Blog Profile Main Container */}
        <div className={cx(`${flexCol} gap-y-5`)}>
          <Link
            to={`/blog/${slug}`}
            className={cx(
              `max-w-full h-[350px] max-h-[350px] border border-dotted border-gray-500`
            )}
          >
            <img
              src={urlFor(mainImage).url()}
              alt=""
              title=""
              data-loading="lazy"
              className={cx(`${imageLayout} object-center rounded-lg `)}
            />
          </Link>
          <div className={cx(`${flexCol} gap-y-3`)}>
            <div className={`${XFull} ${flexRowCenterBetween}`}>
              <div className={cx(`${flexRowCenter} `)}>
                <div className={`w-40 p-3`}>
                  <MainButton
                    isRounded={true}
                    bgColor={`bg-blue-100`}
                    textColor={`text-gray-800`}
                    handleClick={() => navigate(`/category/${category.slug}`)}
                  >
                    {category.title}
                  </MainButton>
                </div>
                {/*  */}
                <p>
                  By{" "}
                  <Link to={`/profile/${author.name}`} className={`underline`}>
                    {author.name}
                  </Link>
                </p>
              </div>
              {/*  */}
              <div
                className={`${flexRowCenter} space-x-3 text-xs ${textCustom} ${mainLayout}`}
              >
                <ArchiveIcon />
                <p>{moment(date).utc().format("YYYY/MMM/DD")}</p>
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
                {description}
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
