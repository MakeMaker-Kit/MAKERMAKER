import React from "react";
import cx from "classnames";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import BlogMore from "../blogcontents/blogmore/BlogMore";
import BlogMainLayout from "./blogmain/BlogMainLayout";
import { useParams } from "react-router-dom";
// import { getBlogDetail } from "../../../utils/GROC";
import { useDispatch, useSelector } from "react-redux";
import { TBlogs } from "../../../types/global.types";
import {
  BlogDetails,
  getBlogDetails,
} from "../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";

const BlogDetailContentLayout = () => {
  let ID: string | undefined;
  const blogId = useParams();
  ID = blogId.id;
  const dispatch = useDispatch();
  const blogDetail = useSelector(BlogDetails);
  const { flexResponsive } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  // gerneate Query

  const { themeWrapper, boxFull, XFull, containerWrapper, boxExtend } = themes;
  const { mainMarX } = themeWrapper;
  console.log("Params Id Respone", ID);
  React.useEffect(() => {
    // @ts-ignore
    dispatch(getBlogDetails(ID));
  }, [dispatch, blogDetail]);
  console.log("Blog Detail Response", blogDetail);
  return (
    <>
      <div className={`${mainMarX}`}>
        <div className={cx(`${boxExtend}`)}>
          <div
            className={cx(`${flexResponsive.flexRowCol} gap-y-4 md:gap-x-4`)}
          >
            <div
              className={cx(
                `w-full md:w-full md:max-w-full lg:w-seven lg:max-w-seven px-10`
              )}
            >
              <div className={cx(`${boxFull} `)}>
                {blogDetail &&
                  blogDetail?.map((detail: TBlogs) => (
                    <BlogMainLayout {...detail} />
                  ))}
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-three lg:max-w-three h-auto`
              )}
            >
              {/* <BlogMore /> */}
              {/* New / popular Blogs Display  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailContentLayout;
