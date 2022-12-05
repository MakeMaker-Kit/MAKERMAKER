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
import { USEContext } from "../../../../../services/context/learncontext/LearnContext";
import { TCategory } from "../../../../../types/global.types";
import { Link } from "react-router-dom";
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
  // const state = useSelector(dropdownState);
  const openModal = () => dispatch(toggleDropdownState());
  const { state } = USEContext();
  const { blogCategory } = state;
  return (
    <>
      <ul className={`${boxFull}  ${flexCol} space-y-5 z-[99]`}>
        {[...blogCategory]
          .sort((a, b) => (a.title as string).localeCompare(b.title as string))
          .map(
            ({ _id, _type, description, image, slug, title }: TCategory, i) => (
              <li className={cx(`${flexCol} space-y-4`)} key={_id}>
                <div className={cx(`${flexRowCenterBetween}`)}>
                  <div
                    className={cx(
                      `${flexRowCenter} ${mainLayout} ${textCustom} space-x-2 text-sm`
                    )}
                  >
                    {/* <CameraIcon /> */}
                    <Link to={`/shop/${slug}`}>{title} </Link>
                    {/*  */}
                  </div>
                  {/*  */}
                  {/* <ChevronDownIcon onClick={openModal} /> */}
                </div>
                {/*  */}
                {/* <div
                className={cx(
                  `${flexCol} space-y-4 pl-6 ${textCustom} ${mainLayout} text-sm`,
                  ``
                )}
              >
                {[...subCategory]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((sub, i) => (
                    <p key={sub.id}>Battery</p>
                  ))}
              </div> */}
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default ShopCategory;
