import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import {} from "@radix-ui/react-icons";
import { themes, flexLayout, textStyles } from "../../styles/themes/theme";
import { useIcon } from "../../hooks/dispatchContext";
import { NavbarData } from "../../utils/homeData";
import { logoImage } from "../../assets/images";
import { NavbarBtnDropdown } from "../dropdowns";
import { useDispatch, useSelector } from "react-redux";
import {
  onModalState,
  openAuthModal,
  toggleCartModal,
} from "../../services/redux/features/globalslice/GlobalStateSlice";

const Navbar = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper, XExtend } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRowCenterBetween, flexRowCenter, flexCenter } = flexLayout;
  const { MdOutlineKeyboardArrowDown, BiSearchAlt } = useIcon();
  const { mainLayout, mainText, textCustom } = textStyles;
  const dispatch = useDispatch();
  const modalState = useSelector(onModalState);
  const openNodal = () => dispatch(openAuthModal());
  const openCartMenu = () => dispatch(toggleCartModal());
  return (
    <>
      <div className={classNames(`${marX} my-2 py-3 border-y`, ``)}>
        <nav className={classNames(`${XFull} h-12`, `container `)}>
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
              <ul
                className={classNames(
                  `${flexRowCenter} space-x-4`,
                  ` hidden md:hidden lg:flex`
                )}
              >
                {NavbarData.map((nav, index: number) => {
                  const { id, link, name, navContents } = nav;
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
                    <NavbarBtnDropdown
                      name={name}
                      link={link}
                      id={id}
                      navContents={navContents}
                    />
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
                        `${textCustom} ${mainLayout} text-white whitespace-nowrap cursor-pointer`
                      )}
                      onClick={openCartMenu}
                    >
                      Open Cart
                    </p>
                  </div>
                  {/*  */}
                </div>
                {/* Search Component */}
                <BiSearchAlt size={25} />
                <span className={classNames(`h-6 w-auto group`)}>
                  <div
                    className={classNames(
                      ` ${boxFull} ${flexCenter}`,
                      `rounded  border border-orange p-2 cursor-pointer group-hover:bg-orange `
                    )}
                  >
                    <p
                      className={classNames(
                        `${textCustom} ${mainLayout} text-gray-600 group-hover:text-white`
                      )}
                      onClick={openNodal}
                    >
                      Login
                    </p>
                  </div>
                </span>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
