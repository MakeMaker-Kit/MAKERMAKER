import React from "react";
import cx from "classnames";
import {
  textStyles,
  flexLayout,
  themes,
} from "../../../../styles/themes/theme";
import ShopProducts from "../../shopmain/shopcontent/shopproducts/ShopProducts";
import DetailCard from "./DetailCard";

const ProductMore = () => {
  const { flexRow } = flexLayout;
  const { boxFull } = themes;
  return (
    <>
      <div className={cx(`${boxFull}`)}>
        {/* Similar Product Layout */}
        <ul className={cx(`${flexRow} basis-full flex-wrap gap-4`)}>
          {Array(10)
            .fill(0)
            .map((i) => (
              // Single Image Card
              <DetailCard key={i} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProductMore;
