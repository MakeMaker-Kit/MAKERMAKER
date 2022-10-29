import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { backgroundHeader } from "../../../../assets/images";
import Button from "../../../../hooks/button";

const Header = () => {
  const { themeWrapper, containerWrapper, XFull, boxFull, YFull } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRow, flexResponsive, flexStart, flexCenter } = flexLayout;
  const { textCustom, mainLayout, mainText } = textStyles;
  return (
    <>
      <div className={cx(`${marX} ${padY}`)}>
        <div
          className={cx(` ${boxFull}`, `${flexResponsive.flexRowColReverse}  `)}
        >
          <div
            className={cx(
              `${XFull}  max-w-full breakpoint_md:w-full breakpoint_md:max-w-full lg:w-five lg:max-w-five ${YFull}`,
              `border-l border-gray-300 h-[500px] p-3`
            )}
          >
            <div
              className={cx(`${boxFull} ${flexStart} justify-center flex-col space-y-10
            `)}
            >
              <div>
                <h1
                  className={cx(
                    ` ${textCustom} text-3xl font-bold tracking-wide leading-[1] text-gray-700 break-words opacity-60 capitalize`
                  )}
                  data-text="Bringing Science to Reality"
                >
                  Make the learning of science fun, engaging and interesting
                </h1>
              </div>
              <div className={cx(`line-clamp-4 max-w-nine`)}>
                <p
                  className={cx(
                    `${mainLayout} ${mainText} font-bold tracking-wider capitalize`
                  )}
                >
                  Make Maker focuses on developing products that simplify
                  learning various science concepts throught project-based
                  learning
                </p>
              </div>
              {/*  */}
              <div>
                <Button handleClick={() => {}}>Book A Science Kit</Button>
              </div>
            </div>
          </div>
          <div
            className={cx(
              `${XFull}  max-w-full breakpoint_md:w-full breakpoint_md:max-w-full lg:w-five lg:max-w-five ${YFull}`
            )}
          >
            <div className="w-full h-[500px] ">
              <div
                className={`bg-[url(${backgroundHeader})] max-w-full w-full h-full bg-no-repeat bg-center bg-cover opacity-80 bg-gradient-to-r  from-gray-500 to-slate-200`}
                style={{
                  backgroundImage: `url(${backgroundHeader})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
