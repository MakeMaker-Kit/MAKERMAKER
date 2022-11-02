import React from "react";
import classNames from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import {
  textStyles,
  themes,
  flexLayout,
} from "../../../../styles/themes/theme";

const MainFooter = () => {
  const { mainLayout, textCustom } = textStyles;
  const { containerWrapper, themeWrapper, boxFull, XFull } = themes;
  const {} = themeWrapper;
  const { flexRowCenterBetween, flexRowCenter, flexCenter } = flexLayout;
  const {} = useIcon();
  return (
    <>
      <div className={`${flexRowCenterBetween} ${mainLayout} ${textCustom}`}>
        <div className={`${flexRowCenter}`}>
          <p>Tags: </p>
          <ul className={`${flexRowCenter}`}>
            {Array(4)
              .fill(0)
              .map((i) => (
                <li key={i}>Science</li>
              ))}
          </ul>
        </div>
        <ul className={classNames(`${flexRowCenter}`)}>
          {Array(4)
            .fill(0)
            .map((i) => (
              <li key={i} className={classNames(`w-8 p-2 h-8`)}>
                <div className={classNames(`${flexCenter} ${boxFull}`)}></div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MainFooter;
