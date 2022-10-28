import React from "react";
import { WrapperProps } from "./wrapper.types";
import { Navbar, Footer } from "../applayout";

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <div>
        <div>
          {/* Header */}
          <Navbar />
        </div>
        <div>{children}</div>
        <div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
