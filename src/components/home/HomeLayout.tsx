import React from "react";
import ProductDisplay from "./homecontents/display/ProductDisplay";
import Header from "./homecontents/header/Header";

const HomeLayout = () => {
  return (
    <>
      <div>
        {/* Header  */}

        <Header />
        {/* Border */}
        {/* Product Display */}
        <div className="bg-grayWhite z-10]">
          <ProductDisplay />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
