import React from "react";
import cx from "classnames";
import { BackpackIcon } from "@radix-ui/react-icons";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { TextWrapper } from "../../../appwrapper";
import { useNavigate } from "react-router-dom";
import Button from "../../../../hooks/button";
import { displayProduct } from "../../../../assets/images";
import {
  DisplayContentTypes,
  TDisplayContentTypes,
} from "../../../../utils/utils.types";
import { productDisplayType } from "../../../../types/global.types";

const ProductDisplay: React.FC<
  productDisplayType & { isReversed: boolean }
> = ({ _id, title, desc, image, isReversed }) => {
  const { themeWrapper, boxExtend, boxFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRow, flexCol, flexResponsive, flexStart, flexRowCenter } =
    flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const navigate = useNavigate();
  return (
    <>
      <div className={cx(`${marX} ${padY} relative`)}>
        <div className={`${boxFull} ${flexCol} space-y-10`}>
          <div
            className={cx(
              `${
                isReversed
                  ? flexResponsive.flexRowColReverse
                  : flexResponsive.flexRowReverseCol
              } relative`
            )}
          >
            {/*  */}
            <TextWrapper Zindex="z-[.1]" />
            {/*  */}
            <div
              className={cx(
                `w-full md:w-full lg:w-four lg:max-w-four h-[400px] pl-3`
              )}
            >
              <div className={cx(`${boxFull} ${flexCol} space-y-12`)}>
                <div className={`${flexCol} ${flexStart} justify-center`}>
                  <h1
                    className={`${mainLayout} ${textCustom} font-cascadiacodePLItalic text-4xl text-gray-500 whitespace-nowrap font-bold`}
                  >
                    {title}
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
                    {desc}
                  </p>
                </div>
                <div>
                  <Button
                    handleClick={() => navigate("/shop", { replace: true })}
                  >
                    {" "}
                    Buy Our Product
                  </Button>
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
                    backgroundImage: `url(${image})`,
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div
            className={`${
              isReversed
                ? flexResponsive.flexRowColReverse
                : flexResponsive.flexRowReverseCol
            }`}
          >
            <div
              className={cx(
                `w-full md:w-full lg:w-four lg:max-w-four h-auto pl-3 `
              )}
            >
              <ul
                className={`${boxFull} ${flexRowCenter} space-x-2 justify-center`}
              >
                {iconsValues?.map((icon, i) => (
                  <li
                    key={i + Math.floor(Math.random() * 4)}
                    className={"max-w-full"}
                  >
                    {icon.icon}
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
                {coreTags.map((item, i) => (
                  <li
                    key={i + Math.round(Math.floor(Math.random() * 6))}
                    className={`whitespace-nowrap max-w-full`}
                  >
                    <span
                      className={`${textCustom} ${mainLayout} text-xs font-cascadiacode`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
