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

import { TDisplayContentTypes } from "../../utils/utils.types";
import {
  Delete,
  getHomeHeader,
} from "../../services/redux/features/sanitytoclient/SanityToClient";
import {
  getFetchProductsDisplay,
  homeHeaderState,
  ProductDisplays,
} from "../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { productDisplayQuery, homeheaderQuery } from "../../utils/querypaths";
const Border = () => {
  const { border } = themes;
  return <div className={border} />;
};

const HomeLayout = () => {
  const dispatch = useDispatch();
  const productDisplay = useSelector(ProductDisplays);
  const homeHeader = useSelector(homeHeaderState);
  React.useEffect(() => {
    // @ts-ignore
    dispatch(getFetchProductsDisplay(productDisplayQuery));
    dispatch(getHomeHeader(homeheaderQuery));
  }, [dispatch]);
  console.log("Product Display Response", productDisplay);
  console.log("Display more response data", homeHeader);
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
