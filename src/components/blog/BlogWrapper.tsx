import React from "react";
import { wrapperStypes } from "../../styles/themes/theme";
import { MainFooter, Navbar } from "../applayout";
import AuthLayout from "../modals/authmodal/AuthLayout";
import BlogHeader from "./blogcontents/blogheader/BlogHeader";
import BlogContact from "./blogcontents/blogcontact/BlogContact";
import BannerPageWrapper from "../appwrapper/bannerPageWrapper/BannerPageWrapper";
interface Props {
  children: React.ReactNode;
}
const BlogWrapper: React.FC<Props> = ({ children }) => {
  const { pageCenter } = wrapperStypes;
  return (
    <>
      <div>
        <div className={`relative`}>
          <Navbar />
        </div>
        <div className={`bg-white `}>
          <BlogHeader />
          <div className={`w-full h-px bg-gray-200 my-4`} />
          {/*  BnnaerPage Wrappers*/}
          <div>
            <BannerPageWrapper />
          </div>
        </div>
        <AuthLayout />
        <div className={`${pageCenter} bg-white`}>
          <div className={`h-auto  my-10`}>{children}</div>
          <div className="mb-10">
            <BlogContact />
          </div>
        </div>
        {/* Blog Contact */}

        <div className={`bg-gray-800 border-2 border-solid border-white`}>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default BlogWrapper;
