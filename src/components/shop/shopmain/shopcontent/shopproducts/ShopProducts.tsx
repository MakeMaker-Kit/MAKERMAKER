import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
import { useIcon } from "../../../../../hooks/dispatchContext";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openShopComponent } from "../../../../../services/redux/features/globalslice/GlobalStateSlice";
import { TProduct } from "../../../../../types/global.types";
import { urlFor, client } from "../../../../../client";
import { addToCart } from "../../../../../services/redux/features/productslice/ProductSlice";
import { TFunction } from "../../../../../services/context/learncontext/LearnContext";
import { fetchSingleProducts } from "../../../../../services/context/learncontext/types/IVehicle";
import { SingleProduct } from "../../../../../utils/GROC";

const ShopProducts = ({
  _id,
  categories,
  defaultVariant,
  price,
  quantity,
  stockItems,
  title,
  product,
  slug,
}: TProduct) => {
  const navigate = useNavigate();
  const { boxFull, imageLayout, transitions, transitionEase } = themes;
  const { flexCol, flexRowCenter, flexCenter } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { ArchiveIcon } = useIcon();
  const dispatch = useDispatch();
  const openModal = () => {
    // window.location.reload();

    dispatch(openShopComponent());
    navigate(`/shop/${slug}`, { replace: true });
  };

  const AddToCart = () => dispatch(addToCart({ product }));

  return (
    <>
      <li
        className={cx(
          `flex-[0_0_23.5%] w-full max-w-[23.5%] shadow-md p-4 rounded-md bg-white hover:shadow-lg hover:translate-x-1 hover:translate-y-1 hover:backdrop-blur-md hover:opacity-70 ${transitions}`
        )}
      >
        <div className={cx(`${boxFull} ${flexCol} `)} onClick={openModal}>
          <div className={cx(`h-64 w-full relative`)}>
            {/* Absolute */}
            <div
              className={`py-1 px-2 rounded-md shadow absolute top-0 right-0 text-xs border border-dotted border-orange whitespace-nowrap`}
            >
              <div className={`${flexCenter} ${boxFull} `}>
                <p> {price} NGN</p>
              </div>
            </div>
            <img
              src={urlFor(
                defaultVariant?.images && defaultVariant?.images[0]
              ).url()}
              alt=""
              className={cx(`${imageLayout} object-center`)}
            />
          </div>
          {/* Contents Layout */}
          <div
            className={cx(
              `${flexCol} ${textCustom} ${mainLayout} text-xs gap-y-3.5`
            )}
          >
            <div
              className={`${flexRowCenter} space-x-2 font-semibold text-gray-800 tracking-wide`}
            >
              <p className={``}>{`${price} NGN`}</p>
              <p className={`line-through`}>00</p>
            </div>
            <div>
              <p className={`font-semibold tracking-wide`}>{title}</p>
            </div>
            <div
              className={cx(`${flexRowCenter} w-full group ${transitionEase}`)}
            >
              <div
                className={cx(
                  `w-eight h-8 p-2 border border-orange group-hover:bg-orange group-hover:text-gray-50 rounded-l-md `
                )}
              >
                <div className={`${boxFull} ${flexCenter}`} onClick={AddToCart}>
                  <p>ADD TO CART</p>
                </div>
              </div>
              <div
                className={`w-8 h-8 p-2 border border-orange rounded-r-md group-hover:border-r-orange group-hover:text-orange`}
              >
                <div className={`${boxFull} ${flexCenter}`}>
                  <ArchiveIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ShopProducts;
