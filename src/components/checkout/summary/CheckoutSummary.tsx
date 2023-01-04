import * as React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import { banner1 } from "../../../assets/images";
import { useSelector, useDispatch } from "react-redux";
import { TProduct } from "../../../types/global.types";
import { urlFor } from "../../../client";
import { useIcon } from "../../../hooks/dispatchContext";

import {
  Cart,
  TotalPrice,
  ProductQuantity,
  increaseProductInCart,
  decreaseProductInCart,
  removeFromCart,
  TotalQuantity,
} from "../../../services/redux/features/productslice/ProductSlice";
const CheckoutSummaryCard = ({
  _id,
  title,
  price,
  defaultVariant,
  stockItems,
}: TProduct) => {
  const {
    XFull,
    boxFull,
    YFull,
    containerWrapper,
    themeWrapper,
    border,
    imageLayout,
  } = themes;
  const { marX } = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const {
    flexRow,
    flexCol,
    flexRowCenter,
    flexColCenter,
    flexRowCenterBetween,
    flexCenter,
    flexColBetween,
  } = flexLayout;
  const dispatch = useDispatch();
  const { AiFillPlusCircle, AiFillMinusCircle } = useIcon();
  const cartItems = useSelector(Cart);
  const totalPrice = useSelector(TotalPrice);
  const productQuantity = useSelector(ProductQuantity);
  const increase = () => dispatch(increaseProductInCart({ stockItems }));
  const decrease = () => dispatch(decreaseProductInCart());
  const removeItem = () => dispatch(removeFromCart({ _id, title }));
  const totalQuan = useSelector(TotalQuantity);
  return (
    <li key={_id} className={`h-32 ${containerWrapper}  flex-shrink-0 py-4  `}>
      <div className={`${boxFull} ${flexRow}  `}>
        <div className={`w-full max-w-eight`}>
          <div className={`h-full   ${XFull} ${flexRowCenter} gap-x-5`}>
            {/* Imaegs */}
            <div className={`w-16 h-16 border   `}>
              <img
                src={urlFor(defaultVariant && defaultVariant.images[0])
                  .width(100)
                  .height(100)
                  .maxHeight(200)
                  .maxWidth(200)
                  .blur(1)
                  .crop("center")
                  .url()}
                alt={`image_checkout`}
                title={`cart_checkout_image`}
                className={`${imageLayout}`}
              />
            </div>
            {/* content */}
            <div
              className={`${flexColBetween} h-full ${textCustom} ${mainLayout} text-xs `}
            >
              <h3>{title}</h3>
              <span>MakeMaker approved </span>
              <p className={`hover:underline`} onClick={removeItem}>
                Remove
              </p>
            </div>
          </div>
        </div>
        <div className={`w-full max-w-two bg-gray-300`}>
          <div className={`${XFull} h-full  ${flexColBetween} items-center`}>
            <div className={cx(`${flexRowCenter} space-x-3`)}>
              <span onClick={increase}>
                <AiFillPlusCircle />
              </span>
              <span>{productQuantity}</span>
              <span className={``} onClick={decrease}>
                <AiFillMinusCircle />
              </span>
            </div>
            <div
              className={cx(
                `${mainLayout} ${textCustom} text-xs whitespace-nowrap`
              )}
            >
              {price} NGN{" "}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
const CheckoutSummary = () => {
  const {
    XFull,
    boxFull,
    YFull,
    containerWrapper,
    themeWrapper,
    border,
    imageLayout,
  } = themes;
  const { marX } = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const {
    flexRow,
    flexCol,
    flexRowCenter,
    flexColCenter,
    flexRowCenterBetween,
    flexCenter,
    flexColBetween,
  } = flexLayout;
  const dispatch = useDispatch();
  const { AiFillPlusCircle, AiFillMinusCircle } = useIcon();
  const cartItems = useSelector(Cart);
  const totalPrice = useSelector(TotalPrice);
  const productQuantity = useSelector(ProductQuantity);

  return (
    <>
      <div className={`${flexCol} bg-gray-50 ${containerWrapper} rounded`}>
        {/* Summary Header */}
        <div className={cx(`p-4`)}>
          <div
            className={`${boxFull} ${flexRowCenterBetween} ${textCustom} ${mainLayout} text-xs`}
          >
            <p>Order</p>
            <p>MakeMaker </p>
          </div>
        </div>
        <div className={border} />
        {/* Summary Main */}
        <div
          className={`h-[400px] max-h-[400px] p-4 bg-white overflow-y-scroll  scrollbar-hide `}
        >
          <ul className={`${boxFull} ${flexCol}`}>
            {cartItems.map((item: TProduct) => (
              <CheckoutSummaryCard {...item} />
            ))}
          </ul>
        </div>
        {/* Border */}
        <div className={border} />
        <div className={`p-4 `}>
          <div
            className={`${boxFull} ${flexCol} gap-y-4 ${mainLayout} ${textCustom} text-xs `}
          >
            <div className={` ${flexRowCenterBetween}`}>
              <p>SubTotal</p>
              <p>{totalPrice} NGN </p>
            </div>
            <div className={` ${flexRowCenterBetween}`}>
              <p>Shipping / Taxes</p>
              <p>Free </p>
            </div>
            <div className={` ${flexRowCenterBetween}`}>
              <p>Total</p>
              <p>{totalPrice} NGN </p>
            </div>
          </div>
        </div>

        {/* Summary Footer */}
      </div>
    </>
  );
};

export default CheckoutSummary;
