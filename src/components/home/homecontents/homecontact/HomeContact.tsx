import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { surfaceBg } from "../../../../assets/images";
import { TextWrapper } from "../../../appwrapper";
import Contact from "./Contact";
import { Content } from "@radix-ui/react-dropdown-menu";

const HomeContact = () => {
  const {
    themeWrapper,
    XFull,
    boxFull,
    transitions,
    backgroundImagelayout,
    containerWrapper,
  } = themes;
  const { largeMarX, marX, padY } = themeWrapper;
  const { flexRow, flexCol, flexCenter, flexStart, flexResponsive } =
    flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={cx(``)}>
        <div
          className={cx(`${boxFull} ${backgroundImagelayout} opacity-90`)}
          style={{
            backgroundImage: `url(${surfaceBg})`,
          }}
        >
          {/* TextWrapper */}
          <TextWrapper Zindex="z-[-1]" />
          <div className={cx(`${marX} `)}>
            <div
              className={cx(
                `${boxFull} ${containerWrapper} ${flexResponsive.flexRowColReverse}`
              )}
            >
              {/* Contents Section */}
              <div className={`w-five max-w-five h-40`}>
                <div
                  className={cx(`${boxFull} ${containerWrapper} ${flexCol}`)}
                >
                  <Content />
                </div>
              </div>
              {/* Contact Section */}
              <div className={`w-five max-w-five h-40`}>
                <div
                  className={cx(`${boxFull} ${containerWrapper} ${flexCol}`)}
                >
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
