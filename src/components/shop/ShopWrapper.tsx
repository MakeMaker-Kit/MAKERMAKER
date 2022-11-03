import React from "react";
import { themes, wrapperStypes } from "../../styles/themes/theme";
import Navbar from "../applayout/Navbar";
import AuthLayout from "../modals/authmodal/AuthLayout";
import MainFooter from "../applayout/mainfooter/MainFooter";
import ShopHeader from "./shopmain/shopcontent/shopheader/ShopHeader";
interface Iprops {
  children: React.ReactNode;
}
const ShopWrapper: React.FC<Iprops> = ({ children }) => {
  const {} = themes;
  const { pageCenter } = wrapperStypes;

  return (
    <>
      <>
        <div>
          <div className={`relative`}>
            <Navbar />
          </div>
          <div className={`bg-white `}>
            <ShopHeader />
            <div className={`w-full h-px bg-gray-200 my-4`} />
            {/*  BnnaerPage Wrappers*/}
          </div>
          <AuthLayout />
          <div className={`${pageCenter} bg-white`}>
            <div className={`h-auto  my-10`}>{children}</div>
          </div>
          {/* Blog Contact */}

          <div className={`bg-gray-800 border-2 border-solid border-white`}>
            <MainFooter />
          </div>
        </div>
      </>
    </>
  );
};

export default ShopWrapper;
