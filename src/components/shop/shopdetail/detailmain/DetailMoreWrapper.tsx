import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import Contents from "./Contents";
import ImageViewer from "./ImageViewer";
import { TProduct, TVariant } from "../../../../types/global.types";
const DetailMoreWrapper = ({
  price,
  defaultVariant,
  categories,
  title,
  tags,
  slug,
  stockItems,
  product,
}: TProduct) => {
  const { images } =
    !!defaultVariant?.images.length && (defaultVariant as TVariant);

  const { XFull } = themes;
  const { flexCol, flexRow, flexRowCenter } = flexLayout;
  const {} = textStyles;
  console.log("ff", product, images);

  return (
    <>
      <div className={cx(`${flexRow} ${XFull} flex-wrap basis-full gap-x-2`)}>
        {/* IMAGE LAYOUT  */}
        <div className={cx(`w-full max-w-five flex-[0_0_47%]`)}>
          <div className={cx(`${XFull}`)}>
            <ImageViewer images={images} />
          </div>
        </div>
        {/* CONTENT LAYOUT */}
        <div className={cx(`w-full max-w-five flex-[0_0_47%]`)}>
          <div className={cx(`${XFull}`)}>
            <Contents {...(product as TProduct)} product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMoreWrapper;
