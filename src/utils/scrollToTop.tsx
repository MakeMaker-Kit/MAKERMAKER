import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollProps } from "./utils.type";

const ScrollToTop = ({ children }: ScrollProps) => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return children || null;
};

export default ScrollToTop;
