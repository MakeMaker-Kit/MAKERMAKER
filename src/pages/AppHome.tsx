import React from "react";
import Wrapper from "../components/appwrapper/Wrapper";
import DropdownMenu from "../components/applayout/dropdown";
import { HomeLayout } from "../components/home";
const AppHome = () => {
  return (
    <>
      <Wrapper>
        <div>
          <HomeLayout />
        </div>
      </Wrapper>
    </>
  );
};

export default AppHome;
