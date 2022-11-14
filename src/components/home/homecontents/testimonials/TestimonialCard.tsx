import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import { TTestimonials } from "../../../../types/global.types";
import { urlFor } from "../../../../client";

const TestimonialCard: React.FC<TTestimonials> = ({
  _id,
  image,
  name,
  description,
  company,
}: TTestimonials) => {
  const { boxFull } = themes;
  const { flexCol, flexCenter, flexRowCenter } = flexLayout;
  const { textCustom, mainLayout } = textStyles;
  return (
    <>
      <div
        className={cx(
          `h-52 w-full md:w-full lg:w-[48%] flex-[0_40%]`,
          ` pt-16 relative cursor-default`
        )}
      >
        <div
          className={`${boxFull} shadow-amber-800 shadow-lg border-t border-solid border-spacing-9 border-appPink rounded-lg px-5 pb-4`}
        >
          {/* Image VIewer */}
          <div
            className={cx(
              ` absolute  top-3 left-[45%] mx-auto`,
              `w-20 h-20 rounded-full bg-gradient-to-r from-slate-900 via-appBlue to-red-100 z-[10]`,
              `p-1 `
            )}
          >
            <div
              className={cx(
                `${boxFull} ${flexCenter} bg-white z-10 rounded-full`
              )}
            >
              <img
                src={`${urlFor(image)}`}
                alt={``}
                className={`max-w-full w-full max-h-full h-full object-cover rounded-full`}
              />
            </div>
          </div>
          {/* content */}
          <div className={cx(`w-full pt-10 `)}>
            <div className={cx(`h-full ${flexCol} space-y-4`)}>
              <p
                className={cx(
                  `line-clamp-5 ${textCustom} ${mainLayout} text-xs text-center font-cascadiacodePLItalic font-semibold`
                )}
              >
                {description}
              </p>
              <div
                className={cx(
                  `${flexCenter} ${flexRowCenter} space-x-2 ${mainLayout} ${textCustom} text-sm font-bold text-appBlue`
                )}
              >
                <h1>{name}</h1>
                <div className="w-px h-5 bg-black" />
                <h1>{company}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
