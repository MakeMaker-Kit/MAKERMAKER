import React from "react";
import { WrapperProps } from "./wrapper.types";
import { Navbar, Footer } from "../applayout";
import { wrapperStypes, themes } from "../../styles/themes/theme";
import AuthLayout from "../modals/authmodal/AuthLayout";

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
      </div>
    </>
  );
};

export default Wrapper;
