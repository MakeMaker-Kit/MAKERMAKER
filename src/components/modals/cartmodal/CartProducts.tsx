import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import Image from "../../../hooks/img/image";
import { shops } from "../../../assets/images";
import {
  increaseProductInCart,
  ProductQuantity,
  decreaseProductInCart,
} from "../../../services/redux/features/productslice/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { TProduct } from "../../../types/global.types";

const CartProducts = ({
  cart,
  _id,
  title,
  slug,
  defaultVariant,
  price,
}: TProduct) => {
  const { containerWrapper, boxFull } = themes;
  const {
    flexRowCenterBetween,
    flexRow,
    flexColBetween,
    flexRowCenter,
    flexColCenter,
    flexCol,
  } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const productQuan = useSelector(ProductQuantity);
  const dispatchRedux = useDispatch();
  const IncreaseProductInCart = () =>
    dispatchRedux(increaseProductInCart({ cart }));
  const DecreaseProductInCart = () => dispatchRedux(decreaseProductInCart());
  return (
    <div className={cx(`p-3 border-y border-dotted border-gray-900 `)}>
      <div
        className={cx(
          `${boxFull} ${flexRowCenterBetween} ${mainLayout} ${textCustom}`
        )}
      >
        <div className={cx(`${flexRowCenter} gap-x-4`)}>
          <div className={`py-2 px-3 bg-gray-200 shadow rounded-full`}>
            <div className={`${flexColCenter} gap-y-3 cursor-pointer`}>
              <span onClick={IncreaseProductInCart}>+</span>
              <span>{productQuan}</span>
              <span onClick={DecreaseProductInCart}>-</span>
            </div>
          </div>
          {/* Cart Image */}
          <div className={`w-20 h-20 rounded-full`}>
            <Image
              src={shops}
              className={`max-w-full w-full h-full object-cover object-center rounded-full shadow`}
            />
          </div>
          {/* Cart Desc */}
          <div className={cx(`${flexCol} justify-start space-y-2`)}>
            <p className={`capitalize`}>{title}</p>
            <span>{price} NGN</span>
            <p>1 x 1b</p>
          </div>
        </div>

        <div className={cx(`${flexRowCenter} space-x-3`)}>
          <p>{price} NGN</p>
          <p>x</p>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
