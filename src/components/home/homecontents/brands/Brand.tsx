import React from "react";
import cx from "classnames";
import { flexLayout, themes } from "../../../../styles/themes/theme";
import { BrandData } from "../../../../utils/homeData";
import { useDispatch, useSelector } from "react-redux";
import {
  homeBrand,
  fetchQuery,
} from "../../../../services/redux/features/sanitytoclient/SanityToClient";
import { homebrandsQuery } from "../../../../utils/querypaths";

const Brand = () => {
  const {} = flexLayout;
  const { themeWrapper, boxFull, containerWrapper } = themes;
  const { marX, padY, largeMarX } = themeWrapper;
  const { flexRow, flexRowCenter } = flexLayout;
  const homebrand = useSelector(homeBrand);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchQuery(homebrandsQuery));
  }, [dispatch, homebrand]);
  console.log("HomeBand", homebrand);
  return (
    <>
      <div className={cx(`mx-64 mt-10`)}>
        <ul className={cx(`${flexRowCenter}`, `${boxFull} flex-wrap`)}>
          {BrandData.map((brand) => (
            <li
              className={cx(`w-[29.66%] md:w-three lg:w-two flex-[0_0_20%]`)}
              key={brand.id}
            >
              <div
                className={cx(
                  `max-w-[170px] rounded text-center px-2 pt-0 sepia-[.25] saturate-50 invert-0 hover:saturate-150 hover:sepia-0 hover:invert transition-[filter_1000ms_ease-in-out]`
                  // `image_view`
                )}
              >
                <span className={cx(``)}>
                  <img
                    loading="lazy"
                    width={400}
                    height={400}
                    // src="https://i1.wp.com/thescienceset.com/wp-content/uploads/2018/10/au.jpg?resize=400%2C400&amp;ssl=1"
                    src={brand.img}
                    alt="African Union"
                    title="African Union"
                    className={cx(
                      `max-w-full w-auto h-auto relative object-center`
                    )}
                    data-lazy-loaded="1"
                    sizes="(max-width: 400px) 100vw, 400px"
                  />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Brand;
