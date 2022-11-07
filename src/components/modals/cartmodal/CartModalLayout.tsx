import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import classNames from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartModalState,
  unToggleCartModal,
} from "../../../services/redux/features/globalslice/GlobalStateSlice";
import CartProducts from "./CartProducts";

const CartModalLayout = () => {
  const { themeWrapper, boxFull, XExtend } = themes;
  const {
    flexCol,
    flexColBetween,
    flexRowCenterBetween,
    flexCenter,
    flexRowCenter,
  } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const dispatch = useDispatch();
  const cartState = useSelector(cartModalState);
  const closeModal = () => dispatch(unToggleCartModal());
  return (
    <div>
      <Transition appear show={true} as={React.Fragment}>
        <Dialog as="div" className={"relative z-[999]"} onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>
          <div className=" fixed top-0 right-0  overflow-y-auto">
            {/* flex min-h-full h-screen max-h-max w-screen items-center justify-center  text-center */}
            <div className="h-screen w-screen max-h-max flex justify-end items-end">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-95 translate-y-[100%]"
                enterTo="opacity-100 scale-100 translate-y-[0%] transition-[all_0.6s_ease] "
                leave="transition  ease-in duration-500"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" align-right h-[100vh] bg-white w-[30vw] shadow-xl  border border-solid  overflow-y-auto scrollbar-none">
                  <div
                    className={classNames(` ${boxFull}  ${flexColBetween}`)}
                    // ${containerWrapper}
                  >
                    <div className={cx(`p-3 `)}>
                      <div
                        className={`${boxFull} ${flexRowCenterBetween} ${textCustom} ${mainLayout}`}
                      >
                        {/*  */}
                        <div className={`${flexRowCenter}`}>
                          <p>icon</p>
                          <p>1 Item</p>
                        </div>
                        {/*  */}
                        <div
                          className={cx(
                            `p-2 w-10 h-10 `,
                            `${flexCenter} rounded-full bg-gray-300`
                          )}
                        >
                          <p>kf</p>
                        </div>
                      </div>
                    </div>
                    {/* CartProducts layoout  */}
                    <div
                      className={cx(
                        `${XExtend} ${flexCol} overflow-y-scroll scrollbar-hide`
                      )}
                    >
                      {Array(10)
                        .fill(0)
                        .map((i) => (
                          <CartProducts key={i} />
                        ))}
                    </div>
                    {/* Cart Checkout  */}
                    <div>
                      <h1>HelloChecoit</h1>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CartModalLayout;