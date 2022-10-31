import React from "react";
import cx from "classnames";
import {
  flexLayout,
  textStyles,
  themes,
} from "../../../../styles/themes/theme";
import { useIcon } from "../../../../hooks/dispatchContext";
import { MinusCircledIcon } from "@radix-ui/react-icons";
import Button from "../../../../hooks/button";

const HomeBlog = () => {
  const { flexCol, flexRow, flexWrap, flexStart, flexCenter, flexRowCenter } =
    flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { themeWrapper, containerWrapper, boxFull, XFull, transitions } =
    themes;
  const { largeMarX, marX, padY } = themeWrapper;
  const { MinusCircledIcon, ClockIcon, MixIcon, CameraIcon } = useIcon();
  return (
    <>
      <div className={cx(`${marX} ${padY}`)}>
        <div className={cx(`${boxFull} ${flexCol} space-y-2`)}>
          {/* BlogCardTitlw */}
          <div className={`${flexStart}`}>
            <h1
              className={cx(
                `${mainLayout} ${textCustom} text-2xl font-medium text-gray-600`
              )}
            >
              Our Blogs{" "}
            </h1>
          </div>
          <ul
            className={cx(
              `${flexRow}`,
              `w-full h-full gap-x-4 flex-nowrap overflow-x-scroll py-10 scrollbar-hide snap-proximity snap-x`
            )}
          >
            {Array(6)
              .fill(0)
              .map((i) => (
                <div
                  key={i + 1}
                  className={cx(
                    `w-three max-w-three h-auto  flex-shrink-0 snap-center`
                  )}
                >
                  <li
                    className={cx(
                      `${XFull} basis-full ${flexCol} space-y-3 group`
                    )}
                  >
                    {/* Image */}
                    <div className={cx(`h-56  relative `)}>
                      {/* Absolute Div */}
                      <div
                        className={cx(
                          `absolute  h-8 w-auto p-3 bg-white border border-gray-300 group-hover:border-gray-50 rounded top-3 left-3`
                        )}
                      >
                        <span className={cx(`${boxFull} ${flexCenter}`)}>
                          <p
                            className={`${textCustom} ${mainLayout} text-gray-700 whitespace-nowrap text-xs italic group-hover:text-black `}
                          >
                            programing
                          </p>
                        </span>
                      </div>
                      {/* Absolute Div */}
                      <a
                        href=""
                        className={`group-hover:opacity-60 ${transitions}`}
                      >
                        <img
                          src="https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0="
                          loading="lazy"
                          width={400}
                          height={400}
                          alt="blog"
                          className={cx(
                            `max-w-full w-full h-full object-cover object-center group-hover:blur-sm group-hover:backdrop-blur-sm group-hover:scale-90`
                          )}
                          title="porgramming"
                        />
                      </a>
                    </div>
                    {/* Contents */}
                    <div
                      className={cx(
                        `${flexCol} gap-y-2 ${flexStart}  ${mainLayout}`
                      )}
                    >
                      <div>
                        <h1
                          className={cx(
                            `${textCustom} capitalize font-playfair group-hover:text-gray-800`
                          )}
                        >
                          Discover Your Place Of Comfort{" "}
                        </h1>
                      </div>
                      <div
                        className={cx(
                          `${flexRowCenter} space-x-2 whitespace-nowrap`
                        )}
                      >
                        <div>
                          <p className={`${textCustom} text-xs font-medium`}>
                            {""}
                            BY:{" "}
                            <span className="text-gray-700">EWRIN JONSON </span>
                          </p>
                        </div>
                        <MinusCircledIcon className={`w-3 h-3 `} />
                        <div className={cx(`${flexRowCenter} space-x-1`)}>
                          <ClockIcon className={`w-3 h-3 `} />
                          <p className={`${textCustom} text-xs `}>
                            {" "}
                            MAR 23, 2021
                          </p>
                        </div>
                        <MinusCircledIcon className={`w-3 h-3 `} />
                        <div className={cx(`${flexRowCenter} space-x-1`)}>
                          <CameraIcon className={`w-3 h-3 `} />
                          <p className={cx(`${textCustom} text-xs`)}>
                            {" "}
                            9 VIEWS
                          </p>
                        </div>
                      </div>
                      <div
                        className={cx(`max-w-nine break-words line-clamp-5`)}
                      >
                        <p
                          className={cx(
                            `${textCustom} text-xs font-playfair tracking-wider leading-normal `
                          )}
                        >
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium...
                        </p>
                      </div>
                    </div>
                    {/* Button */}
                    <div>
                      <Button handleClick={() => {}}>Read More</Button>
                    </div>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
