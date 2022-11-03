import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import classNames from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  closeShopComponent,
  openShopModal,
} from "../../../services/redux/features/globalslice/GlobalStateSlice";
import DetailMoreWrapper from "./detailmain/DetailMoreWrapper";
import DetailMore from "./detailmore/DetailMore";
import ProductMore from "./detailproducts/ProductMore";

const ShopDetailLayout = () => {
  const { containerWrapper, boxFull } = themes;
  const { flexCol } = flexLayout;
  const {} = textStyles;
  const dispatch = useDispatch();
  const modalState = useSelector(openShopModal);
  const closeModal = () => dispatch(closeShopComponent());
  return (
    <>
      <div>
        <Transition appear show={modalState} as={React.Fragment}>
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
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>
            <div className=" fixed top-0 overflow-y-auto">
              <div className="flex min-h-full h-screen max-h-max w-screen items-center justify-center  text-center">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 scale-95 translate-y-[100%]"
                  enterTo="opacity-100 scale-100 translate-y-[0%] transition-[all_0.6s_ease] "
                  leave="transition  ease-in duration-500"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" align-middle h-[100vh] bg-white w-[86vw] rounded-xl shadow-xl  border border-solid px-12 pt-12  ">
                    <div
                      className={classNames(
                        ` ${boxFull} ${containerWrapper} ${flexCol}`
                      )}
                    >
                      {/* Product maain */}
                      <DetailMoreWrapper />
                      {/* prodcut moe  */}
                      <DetailMore />
                      {/* more products display @apply  */}
                      <ProductMore />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default ShopDetailLayout;
