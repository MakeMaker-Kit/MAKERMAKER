import React from "react";
import classNames from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { TBlogs } from "../../../../types/global.types";
import MainHeader from "./MainHeader";
import MainDesc from "./MainDesc";
import MainFooter from "./MainFooter";

const BlogMainLayout: React.FC<TBlogs> = ({
  _id,
  slug,
  body,
  title,
  mainImage,
  author,
  categories,
}: TBlogs) => {
  console.log("fjfjfjfjf", body);
  const { themeWrapper } = themes;
  const {} = themeWrapper;
  const { flexCol } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={classNames(`${flexCol} space-y-5`)}>
        <div>
          <MainHeader />
        </div>
        <div>
          <MainDesc body={body} />
        </div>
        <div>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default BlogMainLayout;
