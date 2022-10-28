import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { themes, flexLayout, textStyles } from "../../styles/themes/theme";
import { useIcon } from "../../hooks/dispatchContext";
import { NavbarData } from "../../utils/homeData";
import { logoImage } from "../../assets/images";
import { NavbarBtnDropdown } from "../dropdowns";

const Navbar = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper, XExtend } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRowCenterBetween, flexRowCenter, flexCenter } = flexLayout;
  const { MdOutlineKeyboardArrowDown, BiSearchAlt } = useIcon();
  const { mainLayout, mainText, textCustom } = textStyles;
  return (
    <>
      <div className={classNames(`${marX} p-0`, ``)}>
        <nav className={classNames(`${XFull} h-12`, ``)}>
          <div className={classNames(`${boxFull} ${flexRowCenterBetween}`)}>
            <div>
              <Link to={"/"} className={classNames(`w-10 h-10`)}>
                <img
                  //   src={logoImage}
                  src={
                    "https://thescienceset.com/wp-content/uploads/2021/09/Logo.png"
                  }
                  alt=""
                  className={`${XExtend} h-full object-contain`}
                />
              </Link>
            </div>
            <div className={`${flexRowCenter} space-x-4`}>
              <ul className={classNames(`${flexRowCenter} space-x-4`)}>
                {NavbarData.map((nav, index: number) => {
                  const { id, link, name } = nav;
                  return (
                    // <li
                    //   className={classNames(
                    //     `${flexRowCenter}`,
                    //     `${mainText} ${mainLayout} uppercase`
                    //   )}
                    //   key={id}
                    // >
                    //   <span>{name}</span>
                    //   <MdOutlineKeyboardArrowDown />
                    // </li>
                    <NavbarBtnDropdown name={name} title={link} id={id} />
                  );
                })}

                <div
                  className={classNames(
                    `h-6 w-auto p-3 rounded border bg-appGreen `
                  )}
                >
                  <div className={classNames(` ${boxFull} ${flexCenter}`)}>
                    <p
                      className={classNames(
                        `${textCustom} ${mainLayout} text-white`
                      )}
                    >
                      Add To Cart
                    </p>
                  </div>
                  {/*  */}
                </div>
                <BiSearchAlt size={25} />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
