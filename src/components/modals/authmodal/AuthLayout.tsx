import React from "react";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import classNames from "classnames";
import { Transition, Dialog } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeAuthModal,
  onModalState,
} from "../../../services/redux/features/globalslice/GlobalStateSlice";
const AuthLayout = () => {
  const { boxFull } = themes;
  const {} = flexLayout;
  const {} = textStyles;
  const dispatch = useDispatch();
  const onModal = useSelector(onModalState);
  const closeModal = () => dispatch(closeAuthModal());
  return (
    <>
      <Transition.Child>
        <div>
          <Transition appear show={onModal} as={React.Fragment}>
            <Dialog
              as="div"
              className={"relative z-[999]"}
              onClose={closeModal}
            >
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
              <div className=" fixed -top-0 overflow-y-auto">
                <div className="flex min-h-full max-h-max w-screen items-center justify-center  text-center">
                  <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-500"
                    // enterFrom="opacity-0 scale-95 translate-x-[100%]"
                    // enterTo="opacity-100 scale-100 translate-x-[0%] transition-[all_0.6s_ease] "
                    leave="transition  ease-in duration-500"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className=" align-middle h-screen bg-black w-[500px]  ">
                      <div>Hello Div</div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </Transition.Child>
    </>
  );
};

export default AuthLayout;
