import React from "react";
import cx from "classnames";

import BannerPageWrapper from "../../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import BlogProfileMainLayout from "../../blogprofile/blogprofilemain/BlogProfileMainLayout";
import BlogMore from "../../blogcontents/blogmore/BlogMore";
import { ProfileWrapper } from "../../../appwrapper";
import { useAwesomwContext } from "../../../../services/context/stylediconcontext/OnStyledIconContext";
import { blogTagPosts } from "../../../../utils/GROC";
import { useParams } from "react-router-dom";
import { TBlogs } from "../../../../types/global.types";
import { MainSpinner } from "../../../spinner/Spinners";

import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";

const TagLayout = () => {
  let ID: string | undefined;
  let params = useParams();
  ID = params.tagID;
  const { themeWrapper, boxExtend, boxFull } = themes;
  const { mainMarX } = themeWrapper;
  const {} = textStyles;
  const { flexResponsive } = flexLayout;
  const { blogTagPost, fetchTagPosts } = useAwesomwContext();
  React.useEffect(() => {
    let cancelled = false;
    const query = blogTagPosts(ID);
    !cancelled && fetchTagPosts(query);
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <>
      <MainSpinner />
      <div>
        <BannerPageWrapper home="home" routePath="tag" routePathID={`${ID}`} />
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
                {blogTagPost &&
                  // @ts-ignore
                  blogTagPost?.posts?.map((post: TBlogs) => (
                    // @ts-ignore
                    <BlogProfileMainLayout {...post} />
                  ))}
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-three lg:max-w-three h-auto`
              )}
            >
              {/* @ts-ignore */}
              {blogTagPost && <ProfileWrapper {...blogTagPost.author} />}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default TagLayout;
