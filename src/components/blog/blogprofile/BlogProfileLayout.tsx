import React from "react";
import cx from "classnames";
import { useParams } from "react-router-dom";
import { themes, flexLayout } from "../../../styles/themes/theme";
import BlogMore from "../blogcontents/blogmore/BlogMore";
import BlogProfileMainLayout from "./blogprofilemain/BlogProfileMainLayout";
import BannerPageWrapper from "../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import { TBlogs } from "../../../types/global.types";
import { blogsByAuthorSlugs } from "../../../utils/GROC";
import { useAwesomwContext } from "../../../services/context/stylediconcontext/OnStyledIconContext";
import { ProfileWrapper } from "../../appwrapper";
import { MainSpinner } from "../../spinner/Spinners";
import { ciEquals } from "../../../hooks/__mocks__/useInsencitiveComparison";
const BlogProfileLayout = () => {
  const { themeWrapper, boxExtend, boxFull } = themes;
  const { mainMarX } = themeWrapper;
  const { flexResponsive } = flexLayout;
  const { fetchBlogsByAuthorSlug, blogsByAuthorSlug } = useAwesomwContext();
  let tagId: string | undefined;
  const param = useParams();
  tagId = param.profileID;
  React.useEffect(() => {
    let cancelled = false;
    const query = blogsByAuthorSlugs(tagId);
    !cancelled && fetchBlogsByAuthorSlug(query);
    return () => {
      cancelled = true;
    };
  }, [tagId]);
  // const AuthorDetails = blogsByAuthorSlug?.map((slug: TBlogs)=> slug )
  return (
    <>
      <MainSpinner />
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
                {blogsByAuthorSlug &&
                  blogsByAuthorSlug?.map(({ posts }: TBlogs, index) =>
                    // @ts-ignore
                    posts?.map((post) => (
                      // @ts-ignore
                      <BlogProfileMainLayout {...post} id={tagId} />
                    ))
                  )}
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-three lg:max-w-three h-auto`
              )}
            >
              {/* <BlogMore /> */}
              {blogsByAuthorSlug.map((blogByAuthorSlug: TBlogs) => (
                //@ts-ignore
                <ProfileWrapper {...blogByAuthorSlug} id={tagId} />
              ))}
              {/* New / popular Blogs Display  */}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default React.memo(BlogProfileLayout);
