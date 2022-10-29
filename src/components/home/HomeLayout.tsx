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
        <ProductDisplay />
      </div>
    </>
  );
};

export default HomeLayout;
