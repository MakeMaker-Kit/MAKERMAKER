import React from "react";
import { wrapperStypes } from "../../styles/themes/theme";
import { MainFooter, Navbar } from "../applayout";
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
        <div className={`${pageCenter} bg-white`}>
          <div className={`h-screen w-screen`}>{children}</div>
        </div>
        <div className={`bg-gray-800 border-2 border-solid border-white`}>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default BlogWrapper;
