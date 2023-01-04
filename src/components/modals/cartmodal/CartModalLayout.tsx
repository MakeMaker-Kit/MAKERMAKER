import React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import classNames from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  cartModalState,
  openAuthModal,
  toggleCartModal,
  unToggleCartModal,
} from "../../../services/redux/features/globalslice/GlobalStateSlice";
import CartProducts from "./CartProducts";
import { TotalQuantity } from "../../../services/redux/features/productslice/ProductSlice";
import {
  Cart,
  TotalPrice,
} from "../../../services/redux/features/productslice/ProductSlice";
import { TProduct } from "../../../types/global.types";
import { IsLoggedIn } from "../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { useNavigate } from "react-router-dom";
import { empty_cart } from "../../../assets/images";
import MainButton from "../../../hooks/button/mainBTN";

const CartModalLayout = () => {
  const { themeWrapper, boxFull, XExtend, containerWrapper, imageLayout } =
    themes;
  const {
    flexCol,
    flexColBetween,
    flexRowCenterBetween,
    flexCenter,
    flexRowCenter,
    flexColCenter,
  } = flexLayout;
  const navigate = useNavigate();
  const { mainLayout, textCustom } = textStyles;
  const dispatch = useDispatch();
  const cartState = useSelector(cartModalState);
  const closeModal = () => dispatch(unToggleCartModal());
  const cartItems = useSelector(Cart);
  const totalPrice = useSelector(TotalPrice);
  const totalQuan = useSelector(TotalQuantity);
  const isLoggedin = useSelector(IsLoggedIn);
  const toggleCheckout = () => {
    isLoggedin
      ? navigate("/review", { replace: true })
      : dispatch(openAuthModal()) && dispatch(toggleCartModal());
  };
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
                        <div className={`${flexRowCenter} space-x-2`}>
                          <p>icon</p>
                          <p> {totalQuan} Item</p>
                        </div>
                        {/*  */}
                        <div
                          className={cx(
                            `p-2 w-8 h-8 `,
                            `${flexCenter} rounded-full bg-gray-100 shadow cursor-pointer`
                          )}
                          onClick={closeModal}
                        >
                          <p className="text-xl">x </p>
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
                      {/* {Array(20)
                        .fill(0)
                        .map((i) => (
                          <CartProducts key={i} />
                        ))} */}
                      {cartItems.length > 0 ? (
                        cartItems.map((cart: TProduct, index: number) => (
                          <CartProducts key={index} {...cart} product={cart} />
                        ))
                      ) : (
                        <div className={`p-4 `}>
                          <div
                            className={cx(
                              `${flexColCenter} ${boxFull} gap-y-5`
                            )}
                          >
                            {/* image */}
                            <div className="h-40 w-40">
                              <img
                                src={empty_cart}
                                alt=""
                                className={imageLayout}
                              />
                            </div>
                            {/* descrioption */}
                            <p
                              className={cx(
                                `${mainLayout} ${textCustom} tracking-widest`
                              )}
                            >
                              Your Cart is likely Empty, consider adding some
                              products{" "}
                            </p>
                            {/* Button */}
                            <MainButton
                              isRounded={true}
                              onClick={() =>
                                navigate("/shop", { replace: true })
                              }
                            >
                              continue shopping
                            </MainButton>
                          </div>
                        </div>
                      )}
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
                            className={`px-4 py-3 bg-transparent rounded-full cursor-pointer`}
                            onClick={toggleCheckout}
                          >
                            <div className={`${boxFull} ${flexCenter}`}>
                              <p>Checkout</p>
                            </div>
                          </div>
                          {/*  */}
                          <div className={`px-4 py-3 bg-white rounded-full`}>
                            <div className={`${boxFull} ${flexCenter}`}>
                              <p>{totalPrice} NGN</p>
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
