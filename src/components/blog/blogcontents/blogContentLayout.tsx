import React from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { flexLayout, themes } from "../../../styles/themes/theme";
import { client } from "../../../client";
import BlogMore from "./blogmore/BlogMore";
import BlogMain from "./blogmain/BlogMain";
import BlogCategories from "./blogcategories/BlogCategories";
import BannerPageWrapper from "../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import {
  getBlogPosts,
  BlogPosts,
  getBlogCategories,
  BlogCategory,
  fetchBlog,
  Text,
} from "../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { useAwesomwContext } from "../../../services/context/stylediconcontext/OnStyledIconContext";
import { BlogQuery } from "../../../utils/querypaths";
import { blogCategoryQuery } from "../../../utils/GROC";
import { MainSpinner } from "../../spinner/Spinners";
const BlogContentLayout = () => {
  const { flexRow, flexResponsive } = flexLayout;
  const { themeWrapper, containerWrapper, boxFull, boxExtend, XExtend } =
    themes;

  const { mainMarX } = themeWrapper;
  const dispatch = useDispatch();
  // const blogPosts = useSelector(BlogPosts);
  const { blogPosts, fetchBlogPosts } = useAwesomwContext();
  const text = useSelector(Text);
  const blogCategories = useSelector(BlogCategory);
  React.useEffect(() => {
    // @ts-ignore
    // dispatch(getBlogPosts(BlogQuery));
    // @ts-ignore
    dispatch(getBlogCategories(blogCategoryQuery));
    // dispatch(fetchBlog(BlogQuery));
  }, [dispatch, blogCategories]);
  React.useEffect(() => {
    fetchBlogPosts(BlogQuery);
  }, [BlogQuery]);

  return (
    <>
      <MainSpinner />
      <div>
        <BannerPageWrapper home="Home " routePath="Blog" />
      </div>
      <div className={`${mainMarX}  `}>
        <div className={`${boxExtend} `}>
          <div
            className={cx(`${flexResponsive.flexRowCol} gap-y-4 md:gap-x-4`)}
          >
            <div
              className={cx(
                `w-full md:w-full md:max-w-full lg:w-seven lg:max-w-seven `
              )}
            >
              <div
                className={`${XExtend} ${flexResponsive.flexRowCol} gap-y-4 md:gap-x-4`}
              >
                <div
                  className={cx(`w-full md:w-three md:max-w-three lg:w-three `)}
                >
                  <BlogCategories />
                  {/* Categories or Sidebar Section */}
                </div>
                <div
                  className={cx(
                    `w-full md:w-seven md:max-w-seven h-auto`,
                    `overflow-y-scroll scrollbar-hide`
                  )}
                >
                  {/* Main Blog Display  */}
                  <BlogMain />
                </div>
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

export default BlogContentLayout;
