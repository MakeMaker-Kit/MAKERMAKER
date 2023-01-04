import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import BannerPageWrapper from "../../appwrapper/bannerPageWrapper/BannerPageWrapper";
import ShopHeader from "./shopcontent/shopheader/ShopHeader";
import ShopCategory from "./shopcontent/shopcategory/ShopCategory";
import ProductCard from "./shopcontent/shopproducts/ProductCard";
import CartButtonModal from "../../modals/cartbtnmodal/CartButtonModal";
import { openShopModal } from "../../../services/redux/features/globalslice/GlobalStateSlice";
import { useSelector } from "react-redux";
import { CartModalLayout } from "../../modals";
import {
  addVehicle,
  fetchProducts,
} from "../../../services/context/learncontext/types/IVehicle";
import {
  TFunction,
  USEContext,
} from "../../../services/context/learncontext/LearnContext";
import { ProductsQuery } from "../../../utils/GROC";
import { client } from "../../../client";
import { useParams } from "react-router-dom";
import { MainSpinner } from "../../spinner/Spinners";
import { IAppState } from "../../../services/context/learncontext/LearnContext";

const ShopContentLayout = () => {
  const { themeWrapper, boxExtend, boxFull, containerWrapper } = themes;
  const { mainMarX } = themeWrapper;
  const { flexResponsive } = flexLayout;
  const {} = textStyles;
  const modalState = useSelector(openShopModal);
  const { state, dispatch } = USEContext();
  const { vehicles, selectedVehicles, features, products } = state as IAppState;
  const { loading } = state;
  const param = useParams();
  const { id } = param;

  return (
    <>
      {/*   Shop Wrapper Layout  */}
      {loading && <MainSpinner />}
      <div>
        <BannerPageWrapper
          home="home"
          routePath="Shop"
          routePathID={window.location.pathname === `shop/${id}` ? id : ""}
        />
      </div>
      <div className={`${mainMarX} relative`}>
        <div className={cx(`${boxExtend}`)}>
          {/* Modal Cart Trigger */}
          <CartModalLayout />
          {/* <CartButtonModal /> */}
          {/* Shop Header Carousel */}
          {/* <div
            className={cx(
              `border border-dotted border-slate-500 px-1 py-4 mb-4`
            )}
          >
            <div className={`${boxFull}`}>
              <ShopHeader />
            </div>
          </div> */}
          {/* Shop Layout Container  */}
          <div
            className={cx(
              `${flexResponsive.flexRowCol}`,
              `border border-dashed`
            )}
          >
            {/* Filter Component */}
            <div className={cx(`w-full max-w-two  px-6 py-5 bg-white sticky `)}>
              <ShopCategory />
            </div>
            {/* Shop Items Component */}
            <div className={cx(`w-full max-w-eight  bg-gray-100 p-3`)}>
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopContentLayout;
