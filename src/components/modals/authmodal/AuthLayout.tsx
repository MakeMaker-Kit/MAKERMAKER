import React from "react";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import classNames from "classnames";
import { Transition, Dialog } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeAuthModal,
  onModalState,
} from "../../../services/redux/features/globalslice/GlobalStateSlice";
import Login from "./authpages/Login";
import Register from "./authpages/Register";
import UncomfirnedForgotPassword from "./authpages/UncomfirnedForgotPassword";
import ConfirmedForgotPassword from "./authpages/ConfirmedForgotPassword";
import { AuthContainerType } from "../../../types/global.types";
const AuthContainer: React.FC<AuthContainerType> = (generatedPage) => {
  return <>{generatedPage}</>;
};
const AuthLayout = () => {
  const { boxFull, themeWrapper, XFull, transitions, containerWrapper } =
    themes;
  const [page, setPage] = React.useState(0);

  const displayAuthTitle = () => {
    page === 0
      ? "Login"
      : page === 1
      ? "Register"
      : page === 2
      ? "Uncomfirned Forgot"
      : "Confirmed Forgot";
  };
  const displayAuthComtents = () => {
    if (page === 0) {
      return <Login generateTitle={displayAuthTitle} />;
    } else if (page === 1) {
      return <Register generateTitle={displayAuthTitle} />;
    } else if (page === 2) {
      return <UncomfirnedForgotPassword generateTitle={displayAuthTitle} />;
    } else {
      return <ConfirmedForgotPassword generateTitle={displayAuthTitle} />;
    }
  };

  const {} = themeWrapper;
  const { flexCol, flexRow } = flexLayout;
  const {} = textStyles;
  const dispatch = useDispatch();
  const onModal = useSelector(onModalState);
  const closeModal = () => dispatch(closeAuthModal());
  return (
    <>
      <div>
        <Transition appear show={onModal} as={React.Fragment}>
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
              <div className="fixed inset-0 bg-black bg-opacity-0" />
            </Transition.Child>
            <div className=" fixed top-0 overflow-y-auto">
              <div className="flex min-h-full h-screen max-h-max w-screen items-center justify-center  text-center">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 scale-95 translate-x-[100%]"
                  enterTo="opacity-100 scale-100 translate-x-[0%] transition-[all_0.6s_ease] "
                  leave="transition  ease-in duration-500"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" align-middle h-[500px] bg-black w-[400px] rounded-md border border-solid border-orange pt-20  ">
                    <div
                      className={classNames(`${boxFull} ${containerWrapper} `)}
                    >
                      <AuthContainer generatedPage={displayAuthComtents} />
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

export default AuthLayout;