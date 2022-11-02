import React from "react";
import { BlogWrapper } from "../components/blog";
import BlogProfileLayour from "../components/blog/blogprofile/BlogProfileLayout";

const AppBlogProfile = () => {
  return (
    <>
      <BlogWrapper>
        <div>
          <BlogProfileLayour />
        </div>
      </BlogWrapper>
    </>
  );
};

export default AppBlogProfile;
