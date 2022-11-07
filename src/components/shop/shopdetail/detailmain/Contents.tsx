import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import MainButton from "../../../../hooks/button/mainBTN";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const Contents = () => {
  const {
    flexCol,
    flexStart,
    flexRowCenter,
    flexRowCenterBetween,
    flexCenter,
  } = flexLayout;
  const { boxFull } = themes;
  const { mainLayout, textCustom } = textStyles;
  const { HeartIcon } = useIcon();

  return (
    <>
      <div className={cx(`${flexCol} ${textCustom} ${mainLayout} space-y-12`)}>
        {/*  */}
        <div className={`${flexCol} space-y-12`}>
          <div className={`${flexRowCenterBetween}`}>
            <h1>Swordfish Fillet</h1>
            <div
              className={cx(
                `h-10 w-10 p-2 border border-orange outline-fuchsia-50 rounded-full`
              )}
            >
              <div className={`${boxFull} ${flexCenter}`}>
                <HeartIcon className={`w-4 h-4`} />
              </div>
            </div>
          </div>

          <div className={`${flexRowCenterBetween}`}>
            <div></div>
            <div
              className={cx(
                `w-14 h-7 px-2 py-1 border border-orange  rounded-md`
              )}
            >
              <div className={cx(`${boxFull} ${flexCenter} flex space-x-1`)}>
                <p>0</p>
                <HeartIcon />
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className={`${flexStart} font-light tracking-wide text-start leading-relaxed`}
          >
            <p>
              The swordfish meat has a very delicate flavour, meaty and mild.
              Swordfish, also known as broadbills, is an oily fish similar to
              tuna, chunky meat without bones.
            </p>
          </div>
          {/*  */}
          <p className={cx(`text-start`)}>Read More</p>
        </div>

        {/*  */}
        <div className={cx(`${flexStart} ${flexRowCenter} space-x-3`)}>
          <h1 className={`text-4xl`}>$75.1 </h1>
          <p className={`text-lg`}>$23</p>
        </div>
        {/*  */}
        <div className={`${flexCol} space-y-6`}>
          {/*  */}
          <div className={`${flexRowCenterBetween}`}>
            <div className={`w-full max-w-seven`}>
              <MainButton isRounded={true}>Add To Shopping Cart</MainButton>
            </div>
            <p className={`whitespace-nowrap`}>9 items Remaining </p>
          </div>
          {/*  */}
          <div className="w-full h-px bg-gray-900" />
          {/*  */}
          <div className={`${flexRowCenter} space-x-4`}>
            <p>Categories</p>
            <div className={`${flexRowCenter} space-x-3`}>
              {Array(3)
                .fill(0)
                .map((i) => (
                  <div
                    key={i}
                    className={`p-2 border border-orange rounded-md`}
                  >
                    <div className={`${flexCenter} ${boxFull}`}>
                      <p>Rice and Beans</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/*  */}
          <div className={`${flexRowCenter} gap-x-5`}>
            <p>Selles</p>
            <p className="">MakeMAKER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
