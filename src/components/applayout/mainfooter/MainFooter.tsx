import React from "react";
import cx from "classnames";
import { flexLayout, themes, textStyles } from "../../../styles/themes/theme";
import { generatedId } from "../../../hooks/localuuid/uuid";
import Input from "../../../hooks/Input";
import MainButton from "../../../hooks/button/mainBTN";
import { useIcon } from "../../../hooks/dispatchContext";
import { blogFooterMain } from "../../../utils/GROC";
import { useAwesomwContext } from "../../../services/context/stylediconcontext/OnStyledIconContext";
const MainFooter = () => {
  const {
    flexRow,
    flexRowCenter,
    flexCol,
    flexStart,
    flexCenter,
    flexResponsive,
  } = flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { marX, padY } = themeWrapper;
  const { textCustom, mainLayout } = textStyles;
  const { FaWhatsapp } = useIcon();
  const { fetchFoooterMain, footerMain } = useAwesomwContext();
  React.useEffect(() => {
    fetchFoooterMain(blogFooterMain);
  }, []);
  console.log("Footer MAIN", footerMain);
  return (
    <>
      <div className={cx(`${marX} py-20`)}>
        <div className={cx(`${boxFull}  `)}>
          <div className={cx(`${flexResponsive.flexRowColReverse} space-x-10`)}>
            <div className={cx(`w-full md:w-full lg:w-[48%]  h-auto`)}>
              <div className={` ${XFull} h-40 ${flexRow} space-x-5`}>
                {/*  */}

                <div className={cx(`w-five max-w-five`)}>
                  <div className={cx(`${boxFull} ${flexCol}`)}>
                    {/* MAKEMAKER ABOUT */}
                    <div className={`${flexStart} ${flexCol} space-y-5`}>
                      {/* LOGO */}
                      <div
                        className={cx(
                          `w-32 h-16 border border-dotted border-gray-700 hover:border-appRed`
                        )}
                      >
                        <img
                          src={footerMain?.about.logo}
                          alt=""
                          className={cx(
                            `max-w-full w-full h-full object-center object-contain`
                          )}
                        />
                      </div>
                      {/* LOGO DESCRIPTION */}
                      <div className={`line-clamp-5 ${mainLayout}`}>
                        <p
                          className={`${textCustom} text-sm font-playfair tracking-wider leading-relaxed text-gray-50`}
                        >
                          {footerMain?.about.desc}
                        </p>
                      </div>
                      <ul className={`${flexRowCenter} space-x-4`}>
                        {footerMain?.socials.socialName.map((i) => (
                          <li
                            className={`w-10 h-10 p-2  border-none bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-xl rounded-md`}
                            key={i}
                          >
                            <div className={cx(`${boxFull} ${flexCenter}`)}>
                              <FaWhatsapp size={20} className={``} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className={cx(`w-five max-w-five`)}>
                  <div
                    className={cx(
                      `${boxFull} ${flexCol} items-start  space-y-4 `
                    )}
                  >
                    <div className={`${flexStart}`}>
                      <h1
                        className={`text-start ${mainLayout} ${textCustom} text-xl font-playfair text-gray-50`}
                      >
                        Subscribe
                      </h1>
                    </div>
                    <div className={`w-full max-w-full`}>
                      <Input placeholder="your name" isRounded={true} />
                    </div>
                    <div className={`w-full max-w-full`}>
                      <Input placeholder="your name" isRounded={true} />
                    </div>
                    <div className={`w-full max-w-nine ${flexCenter}`}>
                      <MainButton isRounded={true}>Subscribe Now</MainButton>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
            <div className={cx(`w-full md:w-full lg:w-[48%]  h-auto`)}>
              <div className={` ${XFull}  ${flexRow}`}>
                {Array(3)
                  .fill(0)
                  .map((i) => (
                    <div
                      className={cx(`w-three max-w-five h-auto gap-x-10`)}
                      key={generatedId(i)}
                    >
                      <div
                        className={cx(
                          `boxFull  ${flexCol} space-y-5 ${mainLayout} ${textCustom} font-playfair text-gray-50`
                        )}
                      >
                        <span className={`text-lg `}>Company</span>
                        <ul className={cx(`${flexCol} space-y-4`)}>
                          {Array(4)
                            .fill(0)
                            .map((i) => (
                              <li key={generatedId(i)}>
                                <span className={`text-sm`}>About Us</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
