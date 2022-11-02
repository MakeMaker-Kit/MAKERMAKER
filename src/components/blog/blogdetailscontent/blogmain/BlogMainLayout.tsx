import React from "react";
import classNames from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import MainHeader from "./MainHeader";
import MainDesc from "./MainDesc";
import MainFooter from "./MainFooter";

const BlogMainLayout = () => {
  const { themeWrapper } = themes;
  const {} = themeWrapper;
  const { flexCol } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={classNames(`${flexCol}`)}>
        <div>
          <MainHeader />
        </div>
        <div>
          <MainDesc />
        </div>
        <div>
          <MainFooter />
        </div>
      </div>
    </>
  );
};

export default BlogMainLayout;
