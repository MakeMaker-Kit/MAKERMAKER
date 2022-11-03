import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import BannerPageWrapper from "../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import ShopHeader from "./shopcontent/shopheader/ShopHeader";

const ShopContentLayout = () => {
  const { themeWrapper, boxExtend, boxFull, containerWrapper } = themes;
  const { mainMarX } = themeWrapper;
  const {} = flexLayout;
  const {} = textStyles;
  return (
    <>
      {/*   Shop Wrapper Layout  */}
      <div>
        <BannerPageWrapper home="home" routePath="Shop" />
      </div>
      <div className={`${mainMarX}`}>
        <div className={cx(`${boxExtend}`)}>
          {/* Shop Header Carousel */}
          <div className={cx(`p-4 ${containerWrapper}`)}>
            <div className={`${boxFull}`}>
              <ShopHeader />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopContentLayout;
