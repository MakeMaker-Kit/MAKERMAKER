import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../../hooks/dispatchContext";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
import { ShopCategoryData } from "../../../../../utils/homeData";
import { useDispatch, useSelector } from "react-redux";
import {
  dropdownState,
  toggleDropdownState,
} from "../../../../../services/redux/features/globalslice/GlobalStateSlice";

const ShopCategory = () => {
  const { boxFull } = themes;
  const { flexRowCenter, flexRowCenterBetween, flexCol } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { ChevronDownIcon, ChevronUpIcon, CameraIcon } = useIcon();
  const dispatch = useDispatch();
  const state = useSelector(dropdownState);
  const openModal = () => dispatch(toggleDropdownState());
  return (
    <>
      <ul className={`${boxFull}  ${flexCol} space-y-5 z-[99]`}>
        {[...ShopCategoryData]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ icon, id, link, name, subCategory }, i) => (
            <li className={cx(`${flexCol} space-y-4`)} key={id}>
              <div className={cx(`${flexRowCenterBetween}`)}>
                <div
                  className={cx(
                    `${flexRowCenter} ${mainLayout} ${textCustom} space-x-2 text-sm`
                  )}
                >
                  <CameraIcon />
                  <p>Arduino </p>
                  {/*  */}
                </div>
                {/*  */}
                <ChevronDownIcon onClick={openModal} />
              </div>
              {/*  */}
              <div
                className={cx(
                  `${flexCol} space-y-4 pl-6 ${textCustom} ${mainLayout} text-sm ${
                    state ? "hidden" : "block"
                  }`,
                  ``
                )}
              >
                {[...subCategory]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((sub, i) => (
                    <p key={sub.id}>Battery</p>
                  ))}
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ShopCategory;
