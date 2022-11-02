import React from "react";
import cx from "classnames";
import { flexLayout, themes } from "../../../styles/themes/theme";
import BlogMore from "./blogmore/BlogMore";
import BlogMain from "./blogmain/BlogMain";
import BlogCategories from "./blogcategories/BlogCategories";
const BlogContentLayout = () => {
  const { flexRow, flexResponsive } = flexLayout;
  const { themeWrapper, containerWrapper, boxFull, boxExtend, XExtend } =
    themes;
  const { mainMarX } = themeWrapper;
  return (
    <>
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
              <BlogMore />
              {/* New / popular Blogs Display  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContentLayout;
