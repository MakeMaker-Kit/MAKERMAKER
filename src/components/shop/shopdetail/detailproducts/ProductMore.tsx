import React from "react";
import cx from "classnames";
import {
  textStyles,
  flexLayout,
  themes,
} from "../../../../styles/themes/theme";
import ShopProducts from "../../shopmain/shopcontent/shopproducts/ShopProducts";
import DetailCard from "./DetailCard";
import { TProduct } from "../../../../types/global.types";

const ProductMore = ({ related }: { related?: TProduct[] }) => {
  const { flexRow } = flexLayout;
  const { boxFull } = themes;

  return (
    <>
      <div className={cx(`${boxFull}`)}>
        {/* Similar Product Layout */}
        <ul className={cx(`${flexRow} basis-full flex-wrap gap-4`)}>
          {/* @ts-ignore */}
          {related?.length &&
            related.map((product, index) => (
              // Single Image Card
              // @ts-ignore
              <DetailCard key={product._id} product={product} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProductMore;
