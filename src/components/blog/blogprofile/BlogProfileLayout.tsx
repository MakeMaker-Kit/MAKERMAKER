import React from "react";
import cx from "classnames";
import { useParams } from "react-router-dom";
import { themes, flexLayout } from "../../../styles/themes/theme";
import BlogMore from "../blogcontents/blogmore/BlogMore";
import BlogProfileMainLayout from "./blogprofilemain/BlogProfileMainLayout";
import BannerPageWrapper from "../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import { blogsByAuthorSlugs } from "../../../utils/GROC";
import { useAwesomwContext } from "../../../services/context/stylediconcontext/OnStyledIconContext";
const BlogProfileLayout = () => {
  const { themeWrapper, boxExtend, boxFull } = themes;
  const { mainMarX } = themeWrapper;
  const { flexResponsive } = flexLayout;
  const { fetchBlogsByAuthorSlug, blogsByAuthorSlug } = useAwesomwContext();
  let tagId;
  const param = useParams();
  tagId = param.profileID;

  React.useEffect(() => {
    fetchBlogsByAuthorSlug(blogsByAuthorSlugs);
  }, [blogsByAuthorSlug]);
  console.log("BlogByAuthorSlug", blogsByAuthorSlug);
  return (
    <>
      <div>
        <BannerPageWrapper
          home="home"
          routePath="profile"
          routePathID={`${tagId}`}
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
                <BlogProfileMainLayout />
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-three lg:max-w-three h-auto`
              )}
            >
              <BlogMore />
              {/* New / popular Blogs Display  */}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default BlogProfileLayout;
