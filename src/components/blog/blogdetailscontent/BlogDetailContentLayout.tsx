import React from "react";
import cx from "classnames";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import BlogMore from "../blogcontents/blogmore/BlogMore";
import BlogMainLayout from "./blogmain/BlogMainLayout";
import { useParams } from "react-router-dom";

const BlogDetailContentLayout = () => {
  const { flexResponsive } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper, boxExtend } = themes;
  const { mainMarX } = themeWrapper;
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
                <BlogMainLayout />
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

export default BlogDetailContentLayout;
