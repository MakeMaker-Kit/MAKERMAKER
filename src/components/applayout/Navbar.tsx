import classNames from "classnames";
import React from "react";
import { themes, flexLayout, textStyles } from "../../styles/themes/theme";
import { useIcon } from "../../hooks/dispatchContext";
import { NavbarData } from "../../utils/homeData";

const Navbar = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRowCenterBetween, flexRowCenter, flexCenter } = flexLayout;
  const { MdOutlineKeyboardArrowDown, BiSearchAlt } = useIcon();
  const { mainLayout, mainText } = textStyles;
  return (
    <>
      <div className={classNames(`${marX} p-0`, ``)}>
        <nav className={classNames(`${XFull} h-12`, `${containerWrapper}`)}>
          <div className={classNames(`${boxFull} ${flexRowCenterBetween}`)}>
            <div>
              <h1>logo</h1>
            </div>
            <div className={`${flexRowCenter}`}>
              <ul className={classNames(`${flexRowCenter}`)}>
                {NavbarData.map((nav, index) => {
                  const { id, link, name } = nav;
                  return (
                    <li className={classNames(`${flexRowCenter}`, ``)} key={id}>
                      <span>{name}</span>
                      <MdOutlineKeyboardArrowDown />
                    </li>
                  );
                })}

                <div
                  className={classNames(`h-6 w-auto `, `${containerWrapper}`)}
                >
                  <div className={classNames(` ${boxFull} ${flexCenter}`)}>
                    <p className={classNames(`${mainText} ${mainLayout}`)}>
                      Add To Cart
                    </p>
                  </div>
                  {/*  */}
                </div>
                <BiSearchAlt />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
