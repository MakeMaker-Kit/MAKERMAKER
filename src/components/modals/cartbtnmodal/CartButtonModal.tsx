import React from "react";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import { useIcon } from "../../../hooks/dispatchContext";

const CartButtonModal = () => {
  const { flexCol, flexRowCenter, flexCenter, flexStart } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { boxFull } = themes;
  const { ClockIcon } = useIcon();
  return (
    <>
      <div
        className={`absolute z-[999999] w-80 max-w-[200px] top-30 right-[-10vw]`}
      >
        <div
          className={`fixed z-[999] p-4 bg-orange rounded-l-lg border-4 border-dotted`}
        >
          <div
            className={`${boxFull} ${flexCol} ${flexStart} ${mainLayout} ${textCustom} text-xs space-y-2  `}
          >
            <div className={`${flexRowCenter} space-x-2 tracking-wider`}>
              <ClockIcon />
              <p> 0 Item(s)</p>
            </div>
            {/*  */}
            <div className={`py-1 px-2 rounded-md shadow-sm bg-white `}>
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
