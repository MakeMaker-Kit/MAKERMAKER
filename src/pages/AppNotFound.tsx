import { Wrapper } from "../components/appwrapper";
import { pagenotfoundBg } from "../assets/images";
import React from "react";

import { Link } from "react-router-dom";

import { useIcon } from "../hooks/dispatchContext";
import { themes, flexLayout, textStyles } from "../styles/themes/theme";

const PageNotFound = () => {
  const { transition } = themes;
  const { flexCenter, flexCol } = flexLayout;
  const { textCustom } = textStyles;
  const {} = useIcon();
  return (
    <>
      <div className={`${flexCenter} my-4 `}>
        <div className={`${flexCol} items-center space-y-8`}>
          <div>
            <img src={pagenotfoundBg} alt="404_img" />
          </div>
          <div>
            <p className={`${textCustom} text-2xl text-gray-700 capitalize`}>
              {" "}
              Ooops, page not found...{" "}
            </p>
          </div>
          <div>
            <button
              className={` py-3 px-8 bg-gradientBaseAccent text-gray-200  hover:bg-gradientBaseBg hover:text-gradientBaseAccent ${transition} `}
            >
              <Link to={"/"}>Back to home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const AppNotFound = () => {
  return (
    <>
      <Wrapper>
        <PageNotFound />
      </Wrapper>
    </>
  );
};

export default AppNotFound;
