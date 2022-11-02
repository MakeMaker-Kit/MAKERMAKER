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
  const { FaLinkedinIn } = useIcon();
  return (
    <>
      <div className={`${flexRowCenterBetween} ${mainLayout} ${textCustom}`}>
        <div className={`${flexRowCenter} gap-x-4`}>
          <p>Tags: </p>
          <ul className={`${flexRowCenter} gap-x-2`}>
            {Array(4)
              .fill(0)
              .map((i) => (
                <li key={i}>Science</li>
              ))}
          </ul>
        </div>
        <ul className={classNames(`${flexRowCenter} gap-x-4`)}>
          {Array(4)
            .fill(0)
            .map((i) => (
              <li
                key={i}
                className={classNames(`w-8 p-2 h-8 bg-gray-50 border`)}
              >
                <div className={classNames(`${flexCenter} ${boxFull}`)}>
                  <FaLinkedinIn />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MainFooter;
