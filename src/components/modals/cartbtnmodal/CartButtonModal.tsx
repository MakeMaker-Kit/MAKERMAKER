import React from "react";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import { useIcon } from "../../../hooks/dispatchContext";
import { useDispatch, useSelector } from "react-redux";
import {
  openShopComponent,
  toggleCartModal,
  cartBtn,
  hideButton,
} from "../../../services/redux/features/globalslice/GlobalStateSlice";
import { Transition, Dialog } from "@headlessui/react";
import classNames from "classnames";

const CartButtonModal = () => {
  const { flexCol, flexRowCenter, flexCenter, flexStart } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { boxFull } = themes;
  const { ClockIcon } = useIcon();
  const dispatch = useDispatch();
  const cartButtonState = useSelector(cartBtn);
  const openShopModal = () => {
    dispatch(toggleCartModal());
    dispatch(hideButton());
  };
  return (
    <>
      {/* Main Cart Button Modal Components */}
      <Transition appear show={cartButtonState} as={React.Fragment}>
        <Dialog as="div" className={"relative z-[999]"} onClose={() => {}}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-0" />
          </Transition.Child>
          <div className=" fixed top-0 overflow-y-auto">
            <div className="flex min-h-full h-screen max-h-max w-screen items-center justify-end  text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-95 translate-y-[100%]"
                enterTo="opacity-100 scale-100 translate-y-[0%] transition-[all_0.6s_ease] "
                leave="transition  ease-in duration-500"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" align-middle h-[100px] bg-orange w-[10vw] rounded-xl shadow-xl  border border-solid  overflow-y-auto scrollbar-none">
                  <div
                    className={`${boxFull} ${flexCol} ${flexCenter} ${mainLayout} ${textCustom} text-white text-xs space-y-2  `}
                    onClick={openShopModal}
                  >
                    <div
                      className={`${flexRowCenter} space-x-2 tracking-wider`}
                    >
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CartButtonModal;
