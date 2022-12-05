import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  BlogCategory,
  BlogPosts,
} from "../../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";
import { TBlogs } from "../../../../types/global.types";
import { urlFor } from "../../../../client";
import { useAwesomwContext } from "../../../../services/context/stylediconcontext/OnStyledIconContext";

const BlogMain = () => {
  const { flexCol, flexRow, flexRowCenter, flexCenter, flexRowCenterBetween } =
    flexLayout;
  const blogMainContent = useSelector(BlogPosts);
  const { blogPosts } = useAwesomwContext();
  const { themeWrapper, boxFull, XFull, containerWrapper, YFull } = themes;
  const {} = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const { HeartFilledIcon, HeartIcon, ReaderIcon, ArchiveIcon } = useIcon();
  console.log("Blogs ", blogPosts);
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        <div className={`p-3`}>
          <div className={cx(`${XFull} ${flexCol} space-y-5`)}>
            {blogPosts?.map(
              (
                {
                  _id,
                  slug,

                  author,
                  title,
                  category,
                  mainImage,
                  publishedAt,
                }: TBlogs,
                index: number
              ) => (
                <div className={`${XFull} h-[9rem] `} key={_id}>
                  <Link
                    to={`/blog/${slug.current}`}
                    className={`${boxFull} ${flexRow} gap-x-5`}
                  >
                    <div
                      className={cx(
                        `w-three max-w-three ${YFull} rounded-md cursor-pointer`
                      )}
                    >
                      <img
                        src={urlFor(mainImage).url()}
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
                              <Link
                                to={`/category/${category.slug}`}
                                className={`text-sm font-gordita ${textCustom} ${mainLayout} whitespace-nowrap`}
                              >
                                {/*TODO */}
                                {category &&
                                (category.title as string).length > 20
                                  ? (category.title as string).slice(0, 13) +
                                    "..."
                                  : category.title}
                              </Link>
                            </div>
                          </div>
                          <p className={cx(`text-sm text-gray-400`)}>
                            By{" "}
                            <Link
                              to={`/profile/${author.slugs}`}
                              className="text-gray-900"
                            >
                              {author.name}
                            </Link>
                          </p>
                        </div>
                        <div>
                          <h2
                            className={cx(
                              `text-[16px] font-gordita tracking-wider font-semibold`
                            )}
                          >
                            {title}
                          </h2>
                        </div>
                        <div className={`${flexRowCenterBetween}`}>
                          <div
                            className={`${flexRowCenter} space-x-2 font-gordita text-sm  font-light`}
                          >
                            <span>
                              <ArchiveIcon />
                            </span>
                            <p className="tracking-tight text-xs">
                              {moment(publishedAt).utc().format("YYYY-MMM-DD")}
                            </p>
                            <p>10 min read</p>
                          </div>
                          <div className={`${flexRowCenter} space-x-1`}>
                            <HeartFilledIcon className={`w-4.5 h-4.5`} />
                            <ReaderIcon className={`w-4.5 h-4.5`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
