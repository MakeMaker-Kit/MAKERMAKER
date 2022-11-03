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

const CategoryLayout = () => {
  const { themeWrapper, boxExtend, boxFull } = themes;
  const { mainMarX } = themeWrapper;
  const {} = textStyles;
  const { flexResponsive, flexCol, flexRow } = flexLayout;

  return (
    <>
      <div>
        <BannerPageWrapper
          home="home"
          routePath="category"
          routePathID="how to be a better programmer"
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

export default CategoryLayout;
