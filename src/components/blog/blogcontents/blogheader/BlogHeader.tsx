import React from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import MainButton from "../../../../hooks/button/mainBTN";
import { useIcon } from "../../../../hooks/dispatchContext";
import {
  textStyles,
  flexLayout,
  themes,
} from "../../../../styles/themes/theme";

const BlogHeader = () => {
  const { textCustom, mainLayout } = textStyles;
  const { flexRowCenterBetween, flexCenter, flexRowCenter } = flexLayout;
  const { themeWrapper, boxFull, XFull, containerWrapper } = themes;
  const { mainMarX } = themeWrapper;
  const navigate = useNavigate();
  const { BsTwitter } = useIcon();
  return (
    <>
      <div className={`${boxFull}  `}>
        <div className={`${mainMarX}`}>
          <div className={cx(`${XFull}`)}>
            {/* Heade Layout  */}
            <div className={cx(`h-24 p-3 ${XFull} `)}>
              <div className={`${boxFull} ${flexRowCenterBetween} `}>
                <div
                  className={cx(
                    `${flexRowCenter} space-x-3 ${mainLayout} ${textCustom} capitalize font-gordita text-xs cursor-pointer `
                  )}
                >
                  <p className={`hover:underline`}>Home{"  "} </p>
                  <span> / </span>
                  <p className={`text-orange hover:underline`}> {"  "} blog </p>
                </div>
                <div
                  className={`h-20 w-[500px] active:border focus-within:border border-dotted border-gray-700 bg-gray-100 rounded-lg`}
                >
                  <div className={`${boxFull} `}>
                    <div
                      className={cx(
                        `bg-cover bg-[100%_100%] bg-no-repeat  max-w-full w-full h-full relative`
                      )}
                      style={{
                        backgroundImage: `url(https://bunzo-react.pages.dev/static/7cecf1790616a9c34d415663739278e4/c47a1/header-add-banner.webp)`,
                      }}
                    >
                      <div
                        className={`absolute top-1/4 left-3 w-32
                      `}
                      >
                        <MainButton isRounded={true}>Shop Now</MainButton>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className={`${flexRowCenter} space-x-5`}>
                  {Array(4)
                    .fill(0)
                    .map((i) => (
                      <li
                        className={`h-10 w-10 p-2 bg-gray-50 border border-dotted rounded-full shadow-md `}
                        key={i}
                      >
                        <div className={cx(`${boxFull} ${flexCenter}`)}>
                          <BsTwitter className={`w-3 h-3`} />
                        </div>
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

export default BlogHeader;
