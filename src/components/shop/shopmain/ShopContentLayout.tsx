import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import BannerPageWrapper from "../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import ShopHeader from "./shopcontent/shopheader/ShopHeader";
import ShopCategory from "./shopcontent/shopcategory/ShopCategory";

const ShopContentLayout = () => {
  const { themeWrapper, boxExtend, boxFull, containerWrapper } = themes;
  const { mainMarX } = themeWrapper;
  const { flexResponsive } = flexLayout;
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
          <div
            className={cx(
              `border border-dotted border-slate-500 px-1 py-4 mb-4`
            )}
          >
            <div className={`${boxFull}`}>
              <ShopHeader />
            </div>
          </div>
          {/* Shop Layout Container  */}
          <div className={cx(`${flexResponsive.flexRowCol}`)}>
            {/* Filter Component */}
            <div
              className={cx(`w-full max-w-two ${containerWrapper} px-3 py-5`)}
            >
              <ShopCategory />
            </div>
            {/* Shop Items Component */}
            <div
              className={cx(`w-full max-w-eight ${containerWrapper} h-auto`)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopContentLayout;
