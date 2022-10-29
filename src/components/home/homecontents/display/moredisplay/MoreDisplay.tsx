import React from "react";
import classNames from "classnames";
import TextWrapper from "../../../../appwrapper/textwrappers/TextWrapper";
import { textStyles } from "../../../../../styles/themes/theme";
import Button from "../../../../../hooks/button";
import { themes, flexLayout } from "../../../../../styles/themes/theme";
import { displayProduct, otherDisplay } from "../../../../../assets/images";

const MoreDisplay = () => {
  const { themeWrapper, boxFull } = themes;
  const { marX, padY } = themeWrapper;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { flexRow, flexRowCenter, flexCol, flexStart, flexResponsive } =
    flexLayout;
  return (
    <>
      <div className={classNames(` `)}>
        <div
          className={classNames(
            `${boxFull} bg-[50%] bg-no-repeat relative bg-white max-w-full w-full h-full bg-cover pt-[30vh] pb-[14vh]`,
            ``
          )}
          style={{
            backgroundImage: `url(https://thescienceset.com/wp-content/uploads/2022/06/pack_hero_background.jpg)`,
          }}
        >
          <TextWrapper Zindex="z-[-1]" />
          <div className={classNames(`${marX} `)}>
            {/*  */}
            <div className={classNames(`${flexCol} ${boxFull}`)}>
              <div className={classNames(` ${flexRow} `)}>
                <div
                  className={classNames(
                    `w-full md:w-full md:max-w-full lg:w-four lg:max-w-four `
                  )}
                >
                  <div
                    className={classNames(
                      ` ${boxFull} ${flexCol} ${flexStart} justify-center space-y-8`
                    )}
                  >
                    <div
                      className={`${flexCol} ${flexStart} justify-center space-y-4`}
                    >
                      <h1
                        className={`${mainLayout} ${textCustom} font-cascadiacodePLItalic text-4xl text-gray-500 break-words font-bold max-w-eight`}
                      >
                        Make Maker Workspace.
                      </h1>
                      <span
                        className={classNames(
                          `${mainLayout} ${textCustom} text-lg tracking-wide text-gray-500 break-words`,
                          `max-w-six`
                        )}
                      >
                        A perfect place to start for young innovators
                      </span>
                    </div>
                    <div className={`max-w-six`}>
                      <p
                        className={`${mainLayout} ${textCustom} text-sm text-gray-700 break-words leading-normal tracking-wide`}
                      >
                        Reasonably priced. Compact. The science set max,
                        provides an unparalleled personalized learning
                        experience and is the most effective way to introduce
                        students to innovation, technology and problem solving.
                      </p>
                    </div>
                    <div>
                      <Button handleClick={() => {}}> Contact Us</Button>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div
                  className={classNames(
                    `w-full md:w-full lg:w-six lg:max-w-six h-[400px] `
                  )}
                >
                  <div className={classNames(`${boxFull}`)}>
                    <div
                      className={classNames(
                        `bg-center bg-no-repeat bg-cover bg-gradient-to-r from-gray-50 to-slate-200 max-w-full w-full h-full`
                      )}
                      style={{
                        backgroundImage: `url(${otherDisplay})`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div></div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreDisplay;
