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
  const { themeWrapper, boxFull, XExtend, containerWrapper } = themes;
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
      <Transition appear show={cartState} as={React.Fragment}>
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
                enterFrom="opacity-0 scale-95 translate-x-[100%]"
                enterTo="opacity-100 scale-100 translate-x-[0%] transition-[all_0.6s_ease] "
                leave="transition  ease-out duration-500"
                leaveFrom="opacity-100 scale-100 translate-x-[0%] transition-[all_1s_ease]"
                leaveTo="opacity-0 scale-95 translate-x-[100%]"
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
                          <p> 1 Item</p>
                        </div>
                        {/*  */}
                        <div
                          className={cx(
                            `p-2 w-8 h-8 `,
                            `${flexCenter} rounded-full bg-gray-100 shadow cursor-pointer`
                          )}
                          onClick={closeModal}
                        >
                          <p>kf</p>
                        </div>
                      </div>
                    </div>
                    {/* CartProducts layoout  */}
                    <div
                      className={cx(
                        `${XExtend}  overflow-y-scroll scrollbar-hide `,
                        `h-[700px] max-h-[700px]`
                      )}
                    >
                      {Array(20)
                        .fill(0)
                        .map((i) => (
                          <CartProducts key={i} />
                        ))}
                    </div>
                    {/* Cart Checkout  */}
                    <div className={`p-3`}>
                      <div
                        className={cx(
                          `${boxFull} bg-appGreen rounded-full p-1 `
                        )}
                      >
                        <div
                          className={`${flexRowCenterBetween} ${boxFull} ${mainLayout} ${textCustom}`}
                        >
                          {/*  */}
                          <div
                            className={`px-4 py-3 bg-transparent rounded-full`}
                          >
                            <div className={`${boxFull} ${flexCenter}`}>
                              <p>Checkout</p>
                            </div>
                          </div>
                          {/*  */}
                          <div className={`px-4 py-3 bg-white rounded-full`}>
                            <div className={`${boxFull} ${flexCenter}`}>
                              <p>$3.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
