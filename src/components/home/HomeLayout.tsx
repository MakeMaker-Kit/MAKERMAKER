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
import { fetchHeader } from "../../services/redux/features/sanitytoclient/SanityToClient";
import {
  fetchHomeHeader,
  getHomeHeader,
  homeHeaderState,
} from "../../services/redux/features/sanitytoclient/SanityToClient";
const Border = () => {
  const { border } = themes;
  return <div className={border} />;
};

const HomeLayout = () => {
  const homeHeader = useSelector(homeHeaderState);
  const HomeQuery = '*[_type == "header"]';
  const dispatch = useDispatch();
  React.useEffect(() => {
    // dispatch(getHomeHeader(HomeQuery));
    dispatch(fetchHeader(HomeQuery));
    return console.log("HomeHeader DATA", homeHeader);
  }, [useSelector, homeHeader]);
  return (
    <>
      <div>
        {/* Header  */}
        <Header />
        {/* Border */}
        <Border />
        {/* Product Display */}
        <Border />
        {[...DisplayContentData]
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((display, index) => {
            return (
              <div className="bg-grayWhite z-10]" key={display.id}>
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
