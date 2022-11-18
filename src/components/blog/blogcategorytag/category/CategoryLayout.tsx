import React from "react";
import cx from "classnames";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import BlogProfileMainLayout from "../../blogprofile/blogprofilemain/BlogProfileMainLayout";
import BlogMore from "../../blogcontents/blogmore/BlogMore";
import BannerPageWrapper from "../../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import { useAwesomwContext } from "../../../../services/context/stylediconcontext/OnStyledIconContext";
import { useParams } from "react-router-dom";
import { fetchBlogCategories } from "../../../../services/redux/features/sanitytoclientmain/SanityToClientServiceMain";
import { blogCategoryPosts } from "../../../../utils/GROC";
import { TBlogs } from "../../../../types/global.types";
import { ProfileWrapper } from "../../../appwrapper";

const CategoryLayout = () => {
  const { themeWrapper, boxExtend, boxFull } = themes;
  const { mainMarX } = themeWrapper;
  const {} = textStyles;
  const { flexResponsive, flexCol, flexRow } = flexLayout;
  const { singleBlog, fetchCategoryBlogs } = useAwesomwContext();
  let ID: string | undefined;
  const params = useParams();
  ID = params.categoryID;
  React.useEffect(() => {
    let cancelled = false;
    const query = blogCategoryPosts(ID);
    !cancelled && fetchCategoryBlogs(query);
  }, []);
  console.log("Category details", singleBlog, params);
  return (
    <>
      <div>
        <BannerPageWrapper
          home="home"
          routePath="category"
          routePathID={`${ID}`}
        />
      </div>
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
                {singleBlog &&
                  singleBlog?.map(({ posts }: TBlogs, index) =>
                    // @ts-ignore
                    posts?.map((post) => <BlogProfileMainLayout {...post} />)
                  )}
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-three lg:max-w-three h-auto`
              )}
            >
              {singleBlog &&
                singleBlog?.map(({ author }: TBlogs, index) => (
                  <ProfileWrapper {...author} />
                ))}
              {/* <BlogMore /> */}
              {/* New / popular Blogs Display  */}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default CategoryLayout;
