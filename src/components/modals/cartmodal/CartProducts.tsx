import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import Image from "../../../hooks/img/image";
import { shops } from "../../../assets/images";
import {
  increaseProductInCart,
  ProductQuantity,
  decreaseProductInCart,
  removeFromCart,
} from "../../../services/redux/features/productslice/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { TProduct } from "../../../types/global.types";
import { urlFor } from "../../../client";
import { useIcon } from "../../../hooks/dispatchContext";
import toast from "react-hot-toast";

const CartProducts = ({
  product,
  _id,
  title,
  slug,
  defaultVariant,
  price,
  stockItems,
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
    dispatchRedux(increaseProductInCart({ product }));
  const DecreaseProductInCart = () => dispatchRedux(decreaseProductInCart());
  const notificationToast = () =>
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={urlFor(defaultVariant?.images[0])
                  .width(500)
                  .height(500)
                  .blur(1)
                  .url()}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-500">
                Are sure you want to remove {title}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              dispatchRedux(removeFromCart({ _id, title }));
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  const { GiCancel } = useIcon();
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
            <img
              src={urlFor(defaultVariant && defaultVariant.images[0])
                .width(200)
                .height(200)
                .maxHeight(300)
                .maxWidth(300)
                .minHeight(200)
                .minWidth(200)
                .crop("center")
                .url()}
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
          <p onClick={notificationToast}>
            <GiCancel />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
