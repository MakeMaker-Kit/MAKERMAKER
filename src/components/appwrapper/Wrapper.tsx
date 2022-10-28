import React from "react";
import { WrapperProps } from "./wrapper.types";

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <div>
        <div>{/* Header */}</div>
        <div>{children}</div>
        <div>{/* Footer */}</div>
      </div>
    </>
  );
};

export default Wrapper;
