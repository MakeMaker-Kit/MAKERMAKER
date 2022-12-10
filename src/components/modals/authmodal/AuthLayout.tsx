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
const AuthContainer: React.FC<AuthContainerType> = ({ generatedPage }) => {
  return <>{generatedPage()}</>;
};
const AuthLayout = () => {
  const { boxFull, themeWrapper, XFull, transitions, containerWrapper } =
    themes;
  const [page, setPage] = React.useState(0);
  const pageTitle: Array<string> = [
    "login",
    "register",
    "reset password",
    "set new password",
  ];

  const displayAuthComtents = () => {
    if (page === 0) {
      return <Login generateTitle={pageTitle} page={page} setPage={setPage} />;
    } else if (page === 1) {
      return (
        <Register generateTitle={pageTitle} page={page} setPage={setPage} />
      );
    } else if (page === 2) {
      return (
        <UncomfirnedForgotPassword
          generateTitle={pageTitle}
          page={page}
          setPage={setPage}
        />
      );
    } else {
      return (
        <ConfirmedForgotPassword
          generateTitle={pageTitle}
          page={page}
          setPage={setPage}
        />
      );
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
                  <Dialog.Panel className=" align-middle h-[650px] bg-white w-[400px] rounded-md border border-solid border-orange pt-20  ">
                    <div className={classNames(`${boxFull} `)}>
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
/**
 *
 * By clicking "Sign Up" button, I expressly agree to the EmailJSand understand that my account information will be used according to EmailJS
 */
//6LfQis0iAAAAAIEhyGhe3zcWH_jISMBCdTYcJBcO GOOGLE RECAPCAHA KEY SITE
//6LfQis0iAAAAAA6JTAktygGBTqeudU2fJFMFL0Aa SECRET KEY
