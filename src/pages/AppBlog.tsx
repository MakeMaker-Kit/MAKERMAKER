import React from "react";
import { BlogContentLayout, BlogWrapper } from "../components/blog";

const AppBlog = () => {
  return (
    <>
      <BlogWrapper>
        <div>
          <BlogContentLayout />
        </div>
      </BlogWrapper>
    </>
  );
};

export default AppBlog;
