import React from "react";
import classNames from "classnames";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../../styles/themes/theme";

const MoreDisplay = () => {
  const { themeWrapper, boxFull } = themes;
  const { marX, padY } = themeWrapper;
  const {} = textStyles;
  const {} = flexLayout;
  return (
    <>
      <div className={classNames(`pt-[30vh] pb-[14vh] ${marX}`)}>
        <div
          className={classNames(
            `${boxFull} bg-[50%] bg-no-repeat relative bg-white max-w-full w-full h-full bg-cover`
          )}
          style={{
            backgroundImage: `url("https://thescienceset.com/wp-content/uploads/2022/06/pack_hero_background.jpg")`,
          }}
        ></div>
      </div>
    </>
  );
};

export default MoreDisplay;
