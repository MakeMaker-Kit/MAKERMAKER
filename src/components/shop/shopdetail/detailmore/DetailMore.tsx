import React from "react";
import cx from "classnames";
import { TVariant } from "../../../../types/global.types";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";

const DetailMore = ({ defaultVariant }: { defaultVariant: TVariant }) => {
  const { containerWrapper, boxFull, themeWrapper } = themes;
  const { padY } = themeWrapper;
  const { flexCol, flexStart } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <div className={`${padY}`}>
        <div
          className={`${boxFull} ${flexCol} gap-y-10 ${mainLayout} ${textCustom} `}
        >
          <h1
            className={cx(`text-start font-bold tracking-widest underline  `)}
          >
            Details
          </h1>
          <div>
            <p className={`text-start leading-9 tracking-wider`}>
              {defaultVariant.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMore;
