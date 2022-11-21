import React from "react";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
import cx from "classnames";
import { useIcon } from "../../../../../hooks/dispatchContext";
import { useAwesomwContext } from "../../../../../services/context/stylediconcontext/OnStyledIconContext";
import { TRelatedBlogs, TRelated } from "../../../../../types/global.types";
import { urlFor } from "../../../../../client";
import moment from "moment";
import { Link } from "react-router-dom";
const RelatedCard = ({
  _id,
  body,
  description,
  slug,
  title,
  mainImage,
  author,
  categories,
  publishedAt,
}: TRelated) => {
  const { imageLayout, boxFull } = themes;
  const {
    flexCol,
    flexRow,
    flexWrap,
    flexRowCenterBetween,
    flexRowCenter,
    flexCenter,
  } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { AiFillCalendar } = useIcon();
  const { fetchRelatedBlog, relatedBlog } = useAwesomwContext();
  React.useEffect(() => {
    // fetchRelatedBlog()
  }, []);
  return (
    <>
      <div className={`w-full ${flexCol} h-auto`}>
        <Link to={`/blog/${slug}`} className={cx(`h-[300px] relative`)}>
          <img
            src={urlFor(mainImage).url()}
            alt=""
            className={`${imageLayout} max-h-full`}
          />
          {/*  */}
          <div
            className={`absolute p-2 -bottom-5 right-5 bg-appBlue shadow-md rounded-full`}
          >
            <p
              className={`${boxFull} ${flexCenter} ${mainLayout} ${textCustom}`}
            >
              <Link to={`/category/${categories.slug}`}>
                {categories.title}
              </Link>
            </p>
          </div>
        </Link>
        <div className={cx(`p-5`)}>
          <div
            className={`${boxFull} ${flexCol} space-y-5 ${textCustom} ${mainLayout}`}
          >
            {/*  */}
            <div className={cx(`${flexRowCenterBetween}`)}>
              <div className={`${flexRowCenter} space-x-1`}>
                <AiFillCalendar />
                <p>{moment(publishedAt).utc().format("YYYY-MMM-DD")}</p>
              </div>
              <Link
                to={`/profile/${author.slug}`}
                className={`hover:underline`}
              >
                {author.name}
              </Link>
            </div>
            {/*  */}
            <div className={`line-clamp-3`}>
              <h4>{title}</h4>
            </div>
            {/*  */}
            <div className={`line-clamp-3 `}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const BlogMainRelated = ({ categories, related, title }: TRelatedBlogs) => {
  const { boxFull, XFull, containerWrapper } = themes;
  const { flexCol, flexRow, flexWrap, flexColBetween } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={`${XFull} ${flexCol} space-y-5 my-10`}>
        <h1
          className={`${mainLayout} ${textCustom} text-lg font-bold tracking-wider `}
        >
          Related Posts
        </h1>
        {/*  */}
        <div className={cx(`w-full ${flexRow} ${flexWrap} gap-4`)}>
          {related?.map((post) => (
            <div
              key={post._id}
              className={cx(`w-full max-w-four flex-[0_0_40%] border`)}
            >
              <RelatedCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogMainRelated;
