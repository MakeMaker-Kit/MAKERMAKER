import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";

const ShopCategory = () => {
  const { boxFull } = themes;
  const {} = flexLayout;
  const {} = textStyles;
  type MathFunc = (c: number) => number;
  let mulitiply: MathFunc = function (c) {
    return c * (c + 1);
  };
  return (
    <>
      <div className={`${boxFull}`}></div>
    </>
  );
};

export default ShopCategory;
