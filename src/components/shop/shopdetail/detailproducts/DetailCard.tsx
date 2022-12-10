import React from "react";
import cx from "classnames";
import {
  textStyles,
  flexLayout,
  themes,
} from "../../../../styles/themes/theme";
import { useIcon } from "../../../../hooks/dispatchContext";
import { useDispatch } from "react-redux";
import {
  openShopComponent,
  toggleCartModal,
} from "../../../../services/redux/features/globalslice/GlobalStateSlice";
import { TProduct } from "../../../../types/global.types";
import { urlFor } from "../../../../client";

const DetailCard = ({ product }: TProduct) => {
  const {
    _id,
    price,
    categories,
    defaultVariant,
    slug,
    stockItems,
    title,
    discount,
  } = product as TProduct;
  const { boxFull, imageLayout, transitions, transitionEase } = themes;
  const { flexCol, flexRowCenter, flexCenter, flexRowCenterBetween } =
    flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { ArchiveIcon, BiCartAlt } = useIcon();
  const dispatch = useDispatch();
  const openModal = () => dispatch(openShopComponent());
  const openCart = () => dispatch(toggleCartModal());
  return (
    <>
      <li
        className={cx(
          `flex-[0_0_23.5%] w-full max-w-[23.5%] shadow-md p-4 rounded-md bg-white hover:shadow-lg hover:translate-x-1 hover:translate-y-1 hover:backdrop-blur-md hover:opacity-70 ${transitions}`
        )}
        // onClick={openModal}
      >
        <div className={cx(`${boxFull} ${flexCol} `)}>
          <div className={cx(`h-64 w-full relative`)}>
            {/* Absolute */}
            <div
              className={`py-1 px-2 rounded-md shadow absolute top-0 right-0 text-xs border border-dotted border-orange whitespace-nowrap`}
            >
              <div className={`${flexCenter} ${boxFull} `}>
                <p>{discount}%</p>
              </div>
            </div>
            <img
              src={
                defaultVariant &&
                urlFor(defaultVariant.images[0])
                  .minWidth(100)
                  .minWidth(100)
                  .quality(10)
                  .blur(10)
                  .ignoreImageParams()
                  .saturation(10)
                  .forceDownload(true)
                  .url()
              }
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
              <p className={``}>{price} NGN</p>
              <p className={`line-through`}>00</p>
            </div>
            <div>
              <p className={`font-semibold tracking-wide`}>{title}</p>
            </div>
            {/*  */}
            <div
              className={cx(
                `${flexRowCenterBetween} w-full group ${transitionEase} `,
                `${mainLayout} ${textCustom}`
              )}
            >
              <div className="">
                <h2>{price} NGN </h2>
              </div>
              {/*  */}
              <div
                className={cx(
                  `px-3 py-1 border-2 border-gray-400 rounded-full shadow-xl`
                )}
              >
                <div
                  className={cx(`${boxFull} ${flexRowCenter} gap-x-3`)}
                  onClick={openCart}
                >
                  <BiCartAlt />
                  <p>Cart</p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </li>
    </>
  );
};

export default DetailCard;
