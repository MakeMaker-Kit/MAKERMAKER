import React from "react";
import MoreDisplay from "./homecontents/display/moredisplay/MoreDisplay";
import ProductDisplay from "./homecontents/display/ProductDisplay";
import Header from "./homecontents/header/Header";
import { themes } from "../../styles/themes/theme";
const Border = () => {
  const { border } = themes;
  return <div className={border} />;
};
const HomeLayout = () => {
  return (
    <>
      <div>
        {/* Header  */}

        <Header />
        {/* Border */}
        <Border />
        {/* Product Display */}
        <div className="bg-grayWhite z-10]">
          <ProductDisplay />
        </div>
        <Border />
        <div className="bg-grayWhite z-10]">
          <ProductDisplay />
        </div>
        <Border />
        <div>
          <MoreDisplay />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
