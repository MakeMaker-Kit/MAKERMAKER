import React from "react";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import { useIcon } from "../../../hooks/dispatchContext";
import { useDispatch } from "react-redux";
import { openShopComponent } from "../../../services/redux/features/globalslice/GlobalStateSlice";

const CartButtonModal = () => {
  const { flexCol, flexRowCenter, flexCenter, flexStart } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { boxFull } = themes;
  const { ClockIcon } = useIcon();
  const dispatch = useDispatch();
  const openShopModal = () => dispatch(openShopComponent());
  return (
    <>
      <div
        className={`absolute z-[999999] w-80 max-w-[1px]  cursor-pointer top-0 right-[-8vw]`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-0" />

        <div
          className={`fixed z-[999] p-4 bg-orange rounded-l-lg border-4 border-dotted   `}
        >
          <div
            className={`${boxFull} ${flexCol} ${flexStart} ${mainLayout} ${textCustom} text-white text-xs space-y-2  `}
            onClick={openShopModal}
          >
            <div className={`${flexRowCenter} space-x-2 tracking-wider`}>
              <ClockIcon />
              <p> 0 Item(s)</p>
            </div>
            {/*  */}
            <div
              className={`py-1 px-2 rounded-md shadow-sm bg-white text-gray-900 font-medium`}
            >
              <div className={`${boxFull} ${flexCenter}`}>
                <p> $20 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartButtonModal;
