import React from "react";
import cx from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
import { useIcon } from "../../../../../hooks/dispatchContext";
import { useDispatch } from "react-redux";
import { openShopComponent } from "../../../../../services/redux/features/globalslice/GlobalStateSlice";

const ShopProducts = () => {
  const { boxFull, imageLayout, transitions, transitionEase } = themes;
  const { flexCol, flexRowCenter, flexCenter } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { ArchiveIcon } = useIcon();
  const dispatch = useDispatch();
  const openModal = () => dispatch(openShopComponent());
  return (
    <>
      <li
        className={cx(
          `flex-[0_0_23.5%] w-full max-w-[23.5%] shadow-md p-4 rounded-md bg-white hover:shadow-lg hover:translate-x-1 hover:translate-y-1 hover:backdrop-blur-md hover:opacity-70 ${transitions}`
        )}
        onClick={openModal}
      >
        <div className={cx(`${boxFull} ${flexCol} `)}>
          <div className={cx(`h-64 w-full relative`)}>
            {/* Absolute */}
            <div
              className={`py-1 px-2 rounded-md shadow absolute top-0 right-0 text-xs border border-dotted border-orange whitespace-nowrap`}
            >
              <div className={`${flexCenter} ${boxFull} `}>
                <p>20%</p>
              </div>
            </div>
            <img
              src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F184%2Fcodfillet_u0mti1.jpg&w=1920&q=75"
              alt=""
              className={cx(`${imageLayout} object-center`)}
            />
          </div>
          {/* Contents Layout */}
          <div
            className={cx(
              `${flexCol} ${textCustom} ${mainLayout} text-xs gap-y-3.5`
            )}
          >
            <div
              className={`${flexRowCenter} space-x-2 font-semibold text-gray-800 tracking-wide`}
            >
              <p className={``}>$49</p>
              <p className={`line-through`}>00</p>
            </div>
            <div>
              <p className={`font-semibold tracking-wide`}>Arduino Uno Board</p>
            </div>
            <div
              className={cx(`${flexRowCenter} w-full group ${transitionEase}`)}
            >
              <div
                className={cx(
                  `w-eight h-8 p-2 border border-orange group-hover:bg-orange group-hover:text-gray-50 rounded-l-md `
                )}
              >
                <div className={`${boxFull} ${flexCenter}`}>
                  <p>ADD TO CART</p>
                </div>
              </div>
              <div
                className={`w-8 h-8 p-2 border border-orange rounded-r-md group-hover:border-r-orange group-hover:text-orange`}
              >
                <div className={`${boxFull} ${flexCenter}`}>
                  <ArchiveIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ShopProducts;
