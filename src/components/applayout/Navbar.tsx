import classNames from "classnames";
import React from "react";
import { themes, flexLayout } from "../../styles/themes/theme";

const Navbar = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRowCenterBetween } = flexLayout;
  return (
    <>
      <div className={classNames(`${marX} p-0`, ``)}>
        <nav className={classNames(`${XFull} h-12`, `${containerWrapper}`)}>
          <div className={classNames(`${boxFull} ${flexRowCenterBetween}`)}>
            <div>
              <h1>logo</h1>
            </div>
            <div>ddj</div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
