import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../../hooks/dispatchContext";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
import ShopProducts from "./ShopProducts";
import {
  USEContext,
  IAppState,
} from "../../../../../services/context/learncontext/LearnContext";

const ProductCard = () => {
  const { boxFull } = themes;
  const { flexRow } = flexLayout;
  const { state } = USEContext();
  const { products } = state as IAppState;
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        {/* Products Layout  */}
        <ul className={cx(`${flexRow} basis-full flex-wrap gap-4`)}>
          {products &&
            products.map((product, index) => (
              // Single Image Card
              <ShopProducts key={product._id} product={product} {...product} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProductCard;
