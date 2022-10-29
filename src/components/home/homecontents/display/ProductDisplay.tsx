import React from "react";
import cx from "classnames";
import { BackpackIcon } from "@radix-ui/react-icons";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { TextWrapper } from "../../../appwrapper";
import Button from "../../../../hooks/button";
import { displayProduct } from "../../../../assets/images";

const ProductDisplay = () => {
  const { themeWrapper, boxExtend, boxFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRow, flexCol, flexResponsive, flexStart, flexRowCenter } =
    flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  return (
    <>
      <div className={cx(`${marX} ${padY} relative`)}>
        <div className={`${boxFull} ${flexCol} space-y-10`}>
          <div className={cx(`${flexResponsive.flexRowColReverse} relative`)}>
            {/*  */}
            <TextWrapper Zindex="z-[.1]" />
            {/*  */}
            <div
              className={cx(
                `w-full md:w-full lg:w-four lg:max-w-four h-[400px] pl-3  border-l border-gray-400`
              )}
            >
              <div className={cx(`${boxFull} ${flexCol} space-y-12`)}>
                <div className={`${flexCol} ${flexStart} justify-center`}>
                  <h1
                    className={`${mainLayout} ${textCustom} font-cascadiacodePLItalic text-4xl text-gray-500 whitespace-nowrap font-bold`}
                  >
                    Make Maker Workspace.
                  </h1>
                  <span
                    className={cx(
                      `${mainLayout} ${textCustom} text-lg tracking-wide text-gray-500 break-words`
                    )}
                  >
                    A perfect place to start for young innovators
                  </span>
                </div>
                <div className={`max-w-eight`}>
                  <p
                    className={`${mainLayout} ${textCustom} text-sm text-gray-700 break-words leading-normal tracking-wide`}
                  >
                    Reasonably priced. Compact. The science set max, provides an
                    unparalleled personalized learning experience and is the
                    most effective way to introduce students to innovation,
                    technology and problem solving.
                  </p>
                </div>
                <div>
                  <Button handleClick={() => {}}> Buy Now</Button>
                </div>
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-six lg:max-w-six h-[400px] `
              )}
            >
              <div className={cx(`${boxFull}`)}>
                <div
                  className={cx(
                    `bg-center bg-no-repeat bg-cover bg-gradient-to-r from-gray-50 to-slate-200 max-w-full w-full h-full`
                  )}
                  style={{
                    backgroundImage: `url(${displayProduct})`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`${flexResponsive.flexRowColReverse}`}>
            <div
              className={cx(
                `w-full md:w-full lg:w-four lg:max-w-four h-auto pl-3  border-l border-gray-400`
              )}
            >
              <ul
                className={`${boxFull} ${flexRowCenter} space-x-2 justify-center`}
              >
                {Array(6)
                  .fill(0)
                  .map((i) => (
                    <li key={i} className={"max-w-full"}>
                      <BackpackIcon className="h-3.5 w-3.5" />
                    </li>
                  ))}
              </ul>
            </div>
            <div
              className={cx(`w-full md:w-full lg:w-six lg:max-w-six h-auto `)}
            >
              <ul
                className={cx(`${boxFull} ${flexRow} space-x-2 justify-center`)}
              >
                {Array(6)
                  .fill(0)
                  .map((i) => (
                    <li key={i} className={`whitespace-nowrap max-w-full`}>
                      <span
                        className={`${textCustom} ${mainLayout} text-xs font-cascadiacode`}
                      >
                        Designing
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
