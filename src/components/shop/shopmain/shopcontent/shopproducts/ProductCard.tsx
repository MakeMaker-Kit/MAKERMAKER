import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../../hooks/dispatchContext";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
import ShopProducts from "./ShopProducts";

const ProductCard = () => {
  const { boxFull } = themes;
  const { flexRow } = flexLayout;
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        {/* Products Layout  */}
        <ul className={cx(`${flexRow} basis-full flex-wrap gap-4`)}>
          {Array(5)
            .fill(0)
            .map((i) => (
              // Single Image Card
              <ShopProducts key={i} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProductCard;
