import React from "react";
import { WrapperProps } from "./wrapper.types";
import { Navbar, Footer } from "../applayout";
import { wrapperStypes, themes } from "../../styles/themes/theme";
import AuthLayout from "../modals/authmodal/AuthLayout";
import ScrollToTop from "react-scroll-to-top";

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { pageCenter } = wrapperStypes;
  const { boxFull } = themes;

  return (
    <>
      <div className={` bg-transparent`}>
        <div className={`relative`}>
          {/* Header */}
          <Navbar />
        </div>
        <AuthLayout />
        <div className={`${pageCenter}`}>{children}</div>
        <div className="bg-grayWhite border-2 border-solid border-orange">
          {/* Footer */}
          <Footer />
        </div>
        {/* ScrollTotop */}
        <ScrollToTop
          smooth
          viewBox="0 0 24 24"
          svgPath="M18 15l-6-6-6 6"
          className={`flex items-center justify-center`}
        />
      </div>
    </>
  );
};

export default Wrapper;
