import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";

const CartProducts = () => {
  const { containerWrapper, boxFull } = themes;
  const { flexRowCenterBetween, flexRow, flexColBetween, flexRowCenter } =
    flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <div
      className={cx(
        `p-3 border-y border-dotted border-gray-900 h-40 ${containerWrapper}`
      )}
    >
      <div className={cx(`${boxFull}`)}></div>
    </div>
  );
};

export default CartProducts;
