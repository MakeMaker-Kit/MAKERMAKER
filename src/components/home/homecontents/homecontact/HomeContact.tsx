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
import Content from "./Content";

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
          <div
            className={cx(`${marX} h-auto md:h-auto lg:h-auto max-h-[1000px]`)}
          >
            <div
              className={cx(`${boxFull} ${flexResponsive.flexRowColReverse}`)}
            >
              {/* Contents Section */}
              <div className={`w-four max-w-four  h-auto`}>
                <div className={cx(`${boxFull} ${flexCol} space-y-10`)}>
                  <Content />
                </div>
              </div>
              {/* Contact Section */}
              <div className={`w-six max-w-six h-auto`}>
                <div className={cx(`${boxFull} ${flexCol} space-y-4`)}>
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
