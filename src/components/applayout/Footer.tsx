import React from "react";
import cx from "classnames";
import { textStyles, themes, flexLayout } from "../../styles/themes/theme";
import Button from "../../hooks/button";
import { useIcon } from "../../hooks/dispatchContext";
import { useDispatch, useSelector } from "react-redux";
import {
  footerAbout,
  fetchFooterLinks,
} from "../../services/redux/features/sanitytoclient/SanityToClient";
import { footerMainQuery } from "../../utils/querypaths";
import { USEContext } from "../../services/context/learncontext/LearnContext";
import { TFooters } from "../../types/global.types";
import { NavbarData } from "../../utils/homeData";
import { navType } from "../../utils/utils.types";

const Footer = () => {
  const { textCustom, mainLayout, mainText } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper, formLayout } = themes;
  const { marX, padY, formPadL } = themeWrapper;
  const { flexRow, flexCol, flexRowCenter, flexCenter, flexStart } = flexLayout;
  const { MinusIcon } = useIcon();
  const dispatch = useDispatch();
  const { state } = USEContext();
  const { footerData } = state;
  const { footerabout, footermain }: TFooters = footerData;

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
                      <li
                        key={id}
                        className={`${flexRowCenter} flex-[0_0_20%] whitespace-nowrap space-x-2`}
                      >
                        <MinusIcon />
                        <span
                          className={`${mainLayout} ${textCustom} text-sm font-playfair`}
                        >
                          {name}
                        </span>
                      </li>
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
                  {Array(4)
                    .fill(0)
                    .map((i) => (
                      <li
                        className={cx(`w-10 h-10 ${flexCenter} border`)}
                        key={i + Math.floor(Math.random() * 4)}
                      >
                        <p>fkf</p>
                      </li>
                    ))}
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
