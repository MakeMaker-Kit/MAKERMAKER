import React from "react";
import cx from "classnames";
import { textStyles, themes, flexLayout } from "../../styles/themes/theme";
import Button from "../../hooks/button";
import { useIcon } from "../../hooks/dispatchContext";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  footerAbout,
  fetchFooterLinks,
} from "../../services/redux/features/sanitytoclient/SanityToClient";
import { footerMainQuery } from "../../utils/querypaths";
import { USEContext } from "../../services/context/learncontext/LearnContext";
import { TFooters } from "../../types/global.types";
import { NavbarData } from "../../utils/homeData";
import { navType } from "../../utils/utils.types";
import { urlFor } from "../../client";
import { logo_2 } from "../../assets/images";

const Footer = () => {
  const { textCustom, mainLayout, mainText } = textStyles;
  const {
    themeWrapper,
    boxFull,
    XFull,
    containerWrapper,
    formLayout,
    imageLayout,
  } = themes;
  const { marX, padY, formPadL } = themeWrapper;
  const { flexRow, flexCol, flexRowCenter, flexCenter, flexStart } = flexLayout;
  const { MinusIcon } = useIcon();
  const dispatch = useDispatch();
  const { state } = USEContext();
  const { footerData } = state;
  // @ts-ignore
  const { footerabout, footermain }: TFooters = footerData;
  console.log("footer espon", footerData);
  return (
    <>
      <div className={cx(`${marX} py-6`)}>
        <div className={`${boxFull}  ${flexRow}`}>
          <div className={cx(`w-five max-w-five`)}>
            <div
              className={cx(
                `${XFull} h-auto  ${flexCol} space-y-5 ${textCustom} ${mainLayout}`
              )}
            >
              {/* <div className={`${flexCenter}`}>
                <div className={` w-40 h-20`}>
                  <img
                    src={logo_2}
                    alt={"footer_image"}
                    title="footer image"
                    className={`${imageLayout}`}
                  />
                </div>
              </div> */}
              <div className={cx(`${flexCenter}`)}>
                <h1 className={`text-4xl font-black`}>{}</h1>
              </div>
              <div className={cx(`${flexCenter} max-w-nine line-clamp-5`)}>
                <p className="text-sm font-normal tracking-wide text-center">
                  {footerabout?.desc}
                </p>
              </div>
              {/*  */}
              <div className={cx(`${flexStart} ${boxFull}  px-10`)}>
                <ul
                  className={cx(`${flexRowCenter} space-x-3 flex-1 flex-wrap`)}
                >
                  {NavbarData.map(({ name, link, id }: navType) => (
                    <>
                      <Link
                        to={`/${link}`}
                        key={id}
                        className={`${flexRowCenter} flex-[0_0_20%] whitespace-nowrap space-x-2`}
                      >
                        <MinusIcon />
                        <span
                          className={`${mainLayout} ${textCustom} text-sm font-playfair`}
                        >
                          {name}
                        </span>
                      </Link>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={cx(`w-five max-w-five`)}>
            <div
              className={cx(
                `${XFull} ${flexCol} space-y-5 ${textCustom} ${mainLayout}`
              )}
            >
              <div className={cx(`${flexStart} whitespace-nowrap`)}>
                <h1 className={`text-2xl font-medium`}>
                  Subscribe to our Newsletter
                </h1>
              </div>
              {/*  */}
              <div className={cx(`${flexRow} ${XFull}`)}>
                <div className={cx(`w-six max-w-six`)}>
                  <input
                    type="text"
                    className={cx(
                      `h-10 focus-within:border-orange`,
                      `${formLayout} ${mainLayout} ${textCustom} ${formPadL}`
                    )}
                    placeholder="Subscribe "
                  />
                </div>
                <div className={cx(`w-four max-w-four `)}>
                  <Button handleClick={() => {}}>Subscribe</Button>
                </div>
              </div>
              {/*  */}
              <div className={cx(`${flexStart} ${flexCol} space-y-3`)}>
                <h2
                  className={cx(
                    `${mainLayout} ${textCustom} text-sm font-playfair tracking-wide`
                  )}
                >
                  Follow Us
                </h2>
                <ul className={cx(`${flexRowCenter} gap-x-4`)}>
                  <NavLink
                    to={`/${footermain?.socials?.facebook}`}
                    className={cx(` p-2 ${flexCenter} border`)}
                  >
                    <p>facebook</p>
                  </NavLink>
                  <NavLink
                    to={`/${footermain?.socials?.twitter}`}
                    className={cx(` p-2 ${flexCenter} border`)}
                  >
                    <p>twitter</p>
                  </NavLink>
                  <NavLink
                    to={`/${footermain?.socials?.instagram}`}
                    className={cx(` p-2 ${flexCenter} border`)}
                  >
                    <p>instagram</p>
                  </NavLink>
                  <NavLink
                    to={`/${footermain?.socials?.linkedIn}`}
                    className={cx(` p-2 ${flexCenter} border`)}
                  >
                    <p>linkedIn</p>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
