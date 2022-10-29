import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { TextWrapper } from "../../../appwrapper";

const ProductDisplay = () => {
  const { themeWrapper, boxExtend, boxFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRow, flexCol } = flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  return (
    <>
      <div className={cx(`${marX} ${padY} relative`)}>
        <div className={`${boxFull} ${flexCol}`}>
          <div className={cx(`${flexCol} relative`)}>
            {/*  */}
            <TextWrapper />
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
