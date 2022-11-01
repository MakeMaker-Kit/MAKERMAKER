import React from "react";
import { BlogContentLayout, BlogWrapper } from "../components/blog";
import Wrapper from "../components/appwrapper/Wrapper";

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
