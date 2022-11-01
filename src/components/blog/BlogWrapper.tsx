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
        <div>
          <Navbar />
        </div>
        <div className={`${pageCenter}`}>{children}</div>
        <div>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default BlogWrapper;
