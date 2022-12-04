import { useEffect } from "react";

export const useMobileResize = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;

    // add the property identifier vh of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", handleResize);

    return () => {
      if (window) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

   const handleResize = () => {
    {
      let vh = window.innerHeight * 0.01;
      // @ts-ignore
      document.documentElement.size.setProperty("--vh", `${vh}px`);
    }
  };
};
