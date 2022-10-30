import React from "react";
import MoreDisplay from "./homecontents/display/moredisplay/MoreDisplay";
import ProductDisplay from "./homecontents/display/ProductDisplay";
import Header from "./homecontents/header/Header";
import { themes } from "../../styles/themes/theme";
import Brand from "./homecontents/brands/Brand";
import Testimonial from "./homecontents/testimonials/Testimonial";
import HomeBlog from "./homecontents/blogdisplay/HomeBlogs";
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
        <div>
          <Brand />
        </div>
        <div>
          <Testimonial />
        </div>
        {/* Blog Home Display */}
        <div>
          <HomeBlog />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
