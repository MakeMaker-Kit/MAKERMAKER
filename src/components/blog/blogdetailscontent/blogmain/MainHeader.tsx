import React from "react";
import classNames from "classnames";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import moment from "moment";
import ButtonText from "../../../../hooks/text/buttonText";
import { useIcon } from "../../../../hooks/dispatchContext";
import { TBlogs, TAUTHOR } from "../../../../types/global.types";
import { urlFor } from "../../../../client";

const MainHeader = ({
  mainImage,
  categories,
  publishedAt,
  author,
}: {
  mainImage?: string;
  categories: Array<{ title?: string; description?: string; image?: string }>;
  publishedAt?: string;
  author?: TAUTHOR;
}) => {
  const { themeWrapper, XFull, boxFull, containerWrapper } = themes;
  const {} = themeWrapper;
  const { flexCol, flexRow, flexRowCenter, flexRowCenterBetween, flexCenter } =
    flexLayout;
  const { textCustom, mainLayout } = textStyles;
  const { ArchiveIcon, HeartFilledIcon, ReaderIcon } = useIcon();
  console.log("bLOG cATEGORIES iTEM", categories);
  return (
    <>
      <div className={classNames(`${flexCol} gap-y-10`)}>
        <div className={`${XFull} h-[350px]  rounded-xl`}>
          <img
            src={urlFor(mainImage).url()}
            alt=""
            className={classNames(
              `max-w-full w-full h-full object-cover rounded-xl `
            )}
            title={""}
            data-loading="lazy"
            width={400}
            height={400}
          />
        </div>
        <div className={`${flexRowCenterBetween} ${textCustom} ${mainLayout} `}>
          <div className={`${flexRowCenter} gap-x-5`}>
            <ButtonText
              clasNames={`${boxFull}  ${flexCenter}`}
              isRounded={true}
            >
              {categories.map(({ title }, index) => (
                <span className={`hover:underline text-xs`}>{title}</span>
              ))}
            </ButtonText>
            <p>
              By <span>{author?.name}</span>
            </p>
          </div>
          <div
            className={`${flexRowCenter} space-x-2 font-gordita text-sm  font-light`}
          >
            <span>
              <ArchiveIcon />
            </span>
            <p className="tracking-tight">
              {moment(publishedAt).utc().format("YYYY-MMM-DD")}.
            </p>
            <p>10 min read</p>
          </div>
          <div className={`${flexRowCenter} space-x-1`}>
            <HeartFilledIcon className={`w-5 h-5`} />
            <ReaderIcon className={`w-5 h-5`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
