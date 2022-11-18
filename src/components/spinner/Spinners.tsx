import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FallingLines } from "react-loader-spinner";
import cx from "classnames";
import { Transition, Dialog } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { themes, flexLayout } from "../../styles/themes/theme";
export const MainSpinner = () => {
  const { boxFull } = themes;
  const { flexCenter, flexRow, flexCol } = flexLayout;
  return (
    <>
      <Transition appear show={true} as={React.Fragment}>
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
                <Dialog.Panel
                  className={`align-middle bg-gray-50 w-screen h-screen `}
                >
                  <div className={` ${boxFull} ${flexCenter}`}>
                    <div
                      className={cx(
                        `w-40 h-40`,
                        `${flexCenter} p-4 `,
                        `shadow-md `
                      )}
                    >
                      <FallingLines
                        color="#4fa94d"
                        width="100"
                        visible={true}
                      />
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
