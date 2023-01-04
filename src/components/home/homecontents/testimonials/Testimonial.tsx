import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import TestimonialCard from "./TestimonialCard";
import { useIcon } from "../../../../hooks/dispatchContext";
import { urlFor } from "../../../../client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchQuery } from "../../../../services/redux/features/sanitytoclient/SanityToClient";
import { testimonials } from "../../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { hometestimonialsQuery } from "../../../../utils/querypaths";
import { TTestimonials } from "../../../../types/global.types";
import { USEContext } from "../../../../services/context/learncontext/LearnContext";

const Testimonial = () => {
  const {
    flexCol,
    flexWrap,
    flexRowCenter,
    flexRow,
    flexCenter,
    flexResponsive,
  } = flexLayout;
  const { mainText, mainLayout, textCustom } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper, transitions } =
    themes;
  const { marX, padY } = themeWrapper;
  const { PaperPlaneIcon } = useIcon();
  const dispatch = useDispatch();
  const testimonialData = useSelector(testimonials);
  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchQuery(hometestimonialsQuery));
  }, [dispatch, testimonialData]);
  const { state } = USEContext();
  const { singleTestimonial } = state;
  const { image, name, description, company } =
    singleTestimonial as TTestimonials;
  return (
    <>
      <div className={cx(`${marX} ${padY}`)}>
        <div className={cx(`${boxFull} ${flexCol} space-y-10`)}>
          <div className={cx(`${flexCenter}`)}>
            <h2
              className={cx(
                `${textCustom} ${mainLayout} text-4xl text-gray-500 tracking-wide `
              )}
            >
              From people who have tried our products
            </h2>
          </div>
          <div className={cx(`${flexCol} space-y-0`)}>
            <div className={cx(`overflow-visible ${XFull} ${flexCenter}`)}>
              <div
                className={cx(
                  `h-52 w-full md:w-full  lg:w-[500px]`,
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
                      `w-20 h-20 rounded-full bg-gradient-to-tr from-slate-900 via-appBlue to-red-100 z-[10]`,
                      `p-1 `
                    )}
                  >
                    <div
                      className={cx(
                        `${boxFull} ${flexCenter} bg-white z-10 rounded-full`
                      )}
                    >
                      <img
                        className={`max-w-full w-full max-h-full h-full object-center object-cover rounded-full`}
                        // src={urlFor(image).url()}
                        alt={`Testimonial_img`}
                        title=""
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
            </div>
            <div
              className={cx(
                `${XFull} ${flexResponsive.flexRowColReverse} overflow-visible gap-x-4  flex-nowrap ${flexCenter}`
              )}
            >
              {testimonialData &&
                testimonialData.map(
                  (testimonial: TTestimonials, index: number) => (
                    <TestimonialCard {...testimonial} key={testimonial._id} />
                  )
                )}
            </div>
          </div>

          {/* Text  */}
          <h1
            className={cx(
              `${textCustom} text-2xl text-gray-700 font-cascadiacodePL font-medium ${mainLayout} text-center`
            )}
          >
            Help Us Reach More Schools With These Learning Kits
          </h1>
          {/* Button */}
          {/* <div className={cx(`${flexCenter} group ${transitions}`)}>
            <button
              className={cx(
                `${flexRowCenter} w-40 space-x-2 h-10  p-2 rounded-md`,
                `${flexCenter} text-darkWhite`
              )}
            >
              <p
                className={cx(
                  `whitespace-nowrap  ${textCustom} ${mainLayout} text-sm italic `
                )}
              >
                Locate a school
              </p>
              <PaperPlaneIcon
                className={`w-2.5 h-2.5 hidden group-hover:inline-block`}
              />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;

//  Quartely goals learning resources who to become
