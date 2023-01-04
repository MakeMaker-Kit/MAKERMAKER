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
import { MainSpinner } from "../../../spinner/Spinners";

const BlogMainLayout: React.FC<TBlogs> = ({
  _id,
  slug,
  body,
  title,
  mainImage,
  author,
  publishedAt,
  categories,
  detail,
  tags,
}: TBlogs) => {
  const { themeWrapper } = themes;
  const {} = themeWrapper;
  const { flexCol } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <MainSpinner />
      <div className={classNames(`${flexCol} space-y-5`)}>
        <div>
          <MainHeader
            mainImage={mainImage}
            author={author}
            publishedAt={publishedAt}
            //@ts-ignore
            categories={categories}
          />
        </div>
        <div>
          {/* @ts-ignore */}
          <MainDesc body={body} />
        </div>
        <div>
          {/* @ts-ignore */}
          <MainFooter author={author} tags={tags} />
        </div>
      </div>
    </>
  );
};

export default BlogMainLayout;
