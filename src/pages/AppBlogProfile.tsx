import React from "react";
import { BlogWrapper } from "../components/blog";
import BlogProfileLayout from "../components/blog/blogprofile/BlogProfileLayout";

const AppBlogProfile = () => {
  return (
    <>
      <BlogWrapper>
        <div>
          <BlogProfileLayout />
        </div>
      </BlogWrapper>
    </>
  );
};

export default AppBlogProfile;
