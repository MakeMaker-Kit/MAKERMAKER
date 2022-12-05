import React from "react";
import classNames from "classnames";
import TextWrapper from "../../../../appwrapper/textwrappers/TextWrapper";
import { textStyles } from "../../../../../styles/themes/theme";
import Button from "../../../../../hooks/button";
import { themes, flexLayout } from "../../../../../styles/themes/theme";
import {
  displayProduct,
  otherDisplay,
  kit,
} from "../../../../../assets/images";
import { BackpackIcon } from "@radix-ui/react-icons";
import { productDisplayType } from "../../../../../types/global.types";
import { urlFor } from "../../../../../client";
import { useNavigate } from "react-router-dom";

const MoreDisplay: React.FC<productDisplayType & { isReversed: boolean }> = ({
  _id,
  title,
  desc,
  image,
  isReversed,
}) => {
  const { themeWrapper, boxFull } = themes;
  const { marX, padY } = themeWrapper;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { flexRow, flexRowCenter, flexCol, flexStart, flexResponsive } =
    flexLayout;
  const navigate = useNavigate();
  return (
    <>
      <div className={classNames(` `)}>
        <div
          className={classNames(
            `${boxFull} bg-[50%] bg-no-repeat relative bg-white max-w-full w-full h-full bg-cover pt-[30vh] pb-[14vh]`,
            ``
          )}
          style={{
            backgroundImage: `url(https://cdn.fansshare.com/pictures/background/black-wallpaper-background-black-203157837.jpg)`,
          }}
        >
          <TextWrapper Zindex="z-[-1]" />
          <div className={classNames(`${marX} pl-3`)}>
            {/*  */}
            <div className={classNames(`${flexCol} ${boxFull} space-y-5`)}>
              <div
                className={classNames(` ${flexResponsive.flexRowColReverse} `)}
              >
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
                        {title}
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
                        className={`${mainLayout} ${textCustom} text-sm text-gray-100 break-words leading-normal tracking-wide`}
                      >
                        {desc}
                      </p>
                    </div>
                    <div>
                      <Button
                        handleClick={() =>
                          navigate("/contactus", { replace: true })
                        }
                      >
                        {" "}
                        Contact Us
                      </Button>
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
                        backgroundImage: `url(${kit})`,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* <div></div> */}
              {/* <div className={`${flexResponsive.flexRowColReverse}`}>
                <div
                  className={classNames(
                    `w-full md:w-full lg:w-four lg:max-w-four h-auto pl-3 `
                  )}
                >
                  <ul
                    className={`${boxFull} ${flexRowCenter} space-x-2 justify-center`}
                  >
                    {Array(6)
                      .fill(0)
                      .map((i) => (
                        <li key={i} className={"max-w-full"}>
                          <BackpackIcon className="h-3.5 w-3.5 text-gray-50" />
                        </li>
                      ))}
                  </ul>
                </div>
                <div
                  className={classNames(
                    `w-full md:w-full lg:w-six lg:max-w-six h-auto `
                  )}
                >
                  <ul
                    className={classNames(
                      `${boxFull} ${flexRow} space-x-2 justify-center`
                    )}
                  >
                    {Array(6)
                      .fill(0)
                      .map((i) => (
                        <li key={i} className={`whitespace-nowrap max-w-full`}>
                          <span
                            className={`${textCustom} ${mainLayout} text-xs font-cascadiacode text-ellipsis text-gray-50`}
                          >
                            Designing
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div> */}
            </div>
            {/* <div></div> */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreDisplay;
