import React from "react";
import MoreDisplay from "./homecontents/display/moredisplay/MoreDisplay";
import ProductDisplay from "./homecontents/display/ProductDisplay";
import Header from "./homecontents/header/Header";
import { themes } from "../../styles/themes/theme";
import Brand from "./homecontents/brands/Brand";
import Testimonial from "./homecontents/testimonials/Testimonial";
import HomeBlog from "./homecontents/blogdisplay/HomeBlogs";
import HomeFaqs from "./homecontents/homeFaqs/HomeFaqs";
import HomeContact from "./homecontents/homecontact/HomeContact";
import { DisplayContentData } from "../../utils/homeData";
import { useSelector, useDispatch } from "react-redux";
import { HeaderApi } from "../../types/api.types";
import {
  fetchProductDisplay,
  ProductDisplays,
} from "../../services/redux/features/sanitytoclient/SanityToClient";
import { homeHeaderState } from "../../services/redux/features/sanitytoclient/SanityToClient";
import { TDisplayContentTypes } from "../../utils/utils.types";
import { Delete } from "../../services/redux/features/sanitytoclient/SanityToClient";
const Border = () => {
  const { border } = themes;
  return <div className={border} />;
};

const HomeLayout = () => {
  const homeHeader = useSelector(homeHeaderState);
  const productDisplay = useSelector(ProductDisplays);

  return (
    <>
      <div>
        {/* Header  */}
        {homeHeader?.map((content: HeaderApi) => (
          <Header {...content} />
        ))}
        {/* Border */}
        <Border />
        {/* Product Display */}
        {/* <Border /> */}

        {productDisplay &&
          productDisplay.map((display: TDisplayContentTypes, index: number) => {
            return (
              <div className="bg-grayWhite z-[10]" key={index}>
                <ProductDisplay {...display} />
              </div>
            );
          })}
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
        <Border />
        {/* Blog Home Display */}
        <div>
          <HomeBlog />
        </div>
        <Border />
        {/* HOME FAQS */}
        <HomeFaqs />
      </div>
      {/* Border  */}
      <Border />
      {/* HomeContact */}
      <div>
        <HomeContact />
      </div>
      <div></div>
    </>
  );
};

export default HomeLayout;
