import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import {} from "@radix-ui/react-icons";
import { themes, flexLayout, textStyles } from "../../styles/themes/theme";
import { useIcon } from "../../hooks/dispatchContext";
import { NavbarData } from "../../utils/homeData";
import { logoImage, logo_2 } from "../../assets/images";
import { NavbarBtnDropdown, BlogDropdown } from "../dropdowns";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TotalQuantity } from "../../services/redux/features/productslice/ProductSlice";
import { IsLoggedIn } from "../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import Links from "../../hooks/links";
import {
  onModalState,
  openAuthModal,
  toggleCartModal,
} from "../../services/redux/features/globalslice/GlobalStateSlice";
import SearchDropdown from "../dropdowns/advanceddropdowns/SearchDropdown";

const Navbar = () => {
  const { themeWrapper, boxFull, XFull, containerWrapper, XExtend } = themes;
  const { marX, padY } = themeWrapper;
  const { flexRowCenterBetween, flexRowCenter, flexCenter } = flexLayout;
  const {
    MdOutlineKeyboardArrowDown,
    BiSearchAlt,
    AiOutlineShoppingCart,
    FiShoppingCart,
  } = useIcon();
  const { mainLayout, mainText, textCustom } = textStyles;
  const dispatch = useDispatch();
  const modalState = useSelector(onModalState);
  const totalQuantity = useSelector(TotalQuantity);
  const openNodal = () => dispatch(openAuthModal());
  const openCartMenu = () => dispatch(toggleCartModal());
  const isLoggedIn = useSelector(IsLoggedIn);
  return (
    <>
      <div className={classNames(`${marX} my-2 py-3 border-y`, ``)}>
        <nav className={classNames(`${XFull} h-12`, `container `)}>
          <div className={classNames(`${boxFull} ${flexRowCenterBetween}`)}>
            <div>
              <Link to={"/"} className={classNames(`w-10 h-10`)}>
                <img
                  src={logo_2}
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
                    <Link
                      to={link}
                      key={id}
                      className={`${mainLayout} ${textCustom} text-sm uppercase`}
                    >
                      {name}
                    </Link>
                    // <BlogDropdown
                    //   name={name}
                    //   link={link}
                    //   id={id}
                    //   navContents={navContents}
                    // />
                  );
                })}

                <div
                  className={classNames(
                    `h-6 w-auto p-3 rounded border  relative `
                  )}
                >
                  {/* abolute  */}
                  <div
                    className={`absolute top-0 right-0 w-4 h-4 p-px rounded-full bg-white shadow-md`}
                  >
                    <span
                      className={classNames(
                        `${flexCenter} ${mainLayout} ${textCustom} text-xs  `
                      )}
                    >
                      {totalQuantity}
                    </span>
                  </div>
                  {/* abolute  */}
                  <div
                    className={classNames(` ${boxFull} ${flexCenter}`)}
                    onClick={openCartMenu}
                  >
                    <FiShoppingCart size={25} className={`text-orange`} />
                  </div>
                </div>
                {/* Search Component */}
                {/* <BiSearchAlt size={25} /> */}
                <SearchDropdown />
                {/* Search  */}
                <span className={classNames(`h-6 w-auto group`)}>
                  <div
                    className={classNames(
                      ` ${boxFull} ${flexCenter}`,
                      `rounded  border border-orange p-2 cursor-pointer group-hover:bg-orange `,
                      isLoggedIn ? "hidden" : "block"
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
