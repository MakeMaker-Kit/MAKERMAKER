import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import TestimonialCard from "./TestimonialCard";
import { useIcon } from "../../../../hooks/dispatchContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  testimonials,
  fetchQuery,
} from "../../../../services/redux/features/sanitytoclient/SanityToClient";
import { hometestimonials } from "../../../../utils/querypaths";

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
    dispatch(fetchQuery(hometestimonials));
  }, [dispatch, hometestimonials]);
  console.table("testimonials data ", testimonialData);
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
                      <h1>Hello</h1>
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
                        I have even had kids who would never speak up or engage
                        in much of anything ask to come in at lunch to
                        experiment! NOW that makes me happy!…
                      </p>
                      <div
                        className={cx(
                          `${flexCenter} ${flexRowCenter} space-x-2 ${mainLayout} ${textCustom} text-sm font-bold text-appBlue`
                        )}
                      >
                        <h1>Alexandar Ibekason</h1>
                        <div className="w-px h-5 bg-black" />
                        <h1>Wizardomw</h1>
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
              <TestimonialCard />
              <TestimonialCard />
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
          <div className={cx(`${flexCenter} group ${transitions}`)}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
