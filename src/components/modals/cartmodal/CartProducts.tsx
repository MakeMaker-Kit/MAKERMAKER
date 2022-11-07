import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import Image from "../../../hooks/img/image";
import { shops } from "../../../assets/images";

const CartProducts = () => {
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
  return (
    <div className={cx(`p-3 border-y border-dotted border-gray-900 `)}>
      <div
        className={cx(
          `${boxFull} ${flexRowCenterBetween} ${mainLayout} ${textCustom}`
        )}
      >
        <div className={cx(`${flexRowCenter} gap-x-4`)}>
          <div className={`py-2 px-4 bg-gray-200 shadow rounded-full`}>
            <div className={`${flexColCenter} gap-y-3`}>
              <span>+</span>
              <span>1</span>
              <span>-</span>
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
            <p>Brussels Sprout</p>
            <span>$300</span>
            <p>1 x 1b</p>
          </div>
        </div>

        <div className={cx(`${flexRowCenter}`)}>
          <p>$3.00</p>
          <p>x</p>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
