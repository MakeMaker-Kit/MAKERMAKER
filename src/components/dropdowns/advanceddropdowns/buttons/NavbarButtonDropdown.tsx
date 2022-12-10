import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";
import Links from "../../../../hooks/links";
import classNames from "classnames";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../styles/themes/theme";
import { HomeIcon } from "@radix-ui/react-icons";
import { homeNavData } from "../../../../utils/homeData";
import { NavItemTypes, TBlogs } from "../../../../types/global.types";
import { useAwesomwContext } from "../../../../services/context/stylediconcontext/OnStyledIconContext";
import { urlFor } from "../../../../client";

interface Props {
  name: string;
  link: string;
  id: number | string;
  navContents: NavItemTypes[];
}
const NavbarBtnDropdown = (props: Props) => {
  const { containerWrapper, boxFull, XFull } = themes;
  const {
    flexRowCenter,
    flexRowCenterBetween,
    flexRowBetween,
    flexRow,
    flexCol,
    flexStart,
    flexColBetween,
    flexColCenter,
    flexCenter,
  } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { blogPosts } = useAwesomwContext();
  return (
    <>
      <div className={`relative  inline-block text-center z-[999]`}>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <Links
              key={props.id}
              link={props.link}
              onClick={() => alert("How ae you")}
            >
              {props.name}
            </Links>
          </DropdownMenuPrimitive.Trigger>
          {/* DropDwonContents */}
          <DropdownMenuPrimitive.Content
            align="center"
            sideOffset={5}
            className={classNames(
              `radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down`,
              `w-48 rounded px-1.5 py-1 shadow-md md:w-screen h-auto`,
              `bg-orange `,
              `border-2 border-dotted border-white`
            )}
          >
            <div className={`${boxFull}`}>
              {/* {props.navContents.map(({ icon, id, link, name }, index) => ( */}
              <DropdownMenuPrimitive.Item
                // key={id}
                className={classNames(`$ bg-white p-5 `)}
              >
                <div className={`${boxFull} ${flexRow}`}>
                  {/* CONTENTS container  */}
                  <div className={classNames(`w-1/2 max-w-1/2  `)}>
                    <div className={` ${XFull} `}>
                      <div
                        className={classNames(
                          `${flexColBetween} ${XFull} `,
                          `${textCustom} ${mainLayout}`
                        )}
                      >
                        <h1 className={classNames(`text-start`)}>
                          Hello contents container{" "}
                        </h1>
                        <div className={`${XFull} ${flexRow}`}>
                          <div className={`w-1/2 max-w-1/2 border`}>
                            <div className={`${XFull} ${flexColBetween}`}>
                              {/*  */}
                              <div className={`${flexColCenter}`}>
                                <p>Science Kit Unified</p>
                                <p>What is the meaning of the project wonder</p>
                              </div>
                              {/*  */}
                              <div className={`${flexColCenter} `}>
                                <p>Science Kit Unified</p>
                                <p>What is the meaning of the project wonder</p>
                              </div>
                              {/*  */}
                              <div className={`${flexColCenter}`}>
                                <p>Science Kit Unified</p>
                                <p>What is the meaning of the project wonder</p>
                              </div>
                              {/*  */}
                            </div>
                          </div>
                          <div className={`w-1/2 max-w-1/2  border`}></div>
                        </div>
                        {/*  */}
                        <div>
                          <p className={`text-start`}>dkdkdk</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*   Divider */}
                  <div className={classNames(` border border-green-900`)} />
                  {/* Images Container */}
                  <div className={`w-1/2 max-w-1/2 `}>
                    <div className={`${XFull} ${flexStart} ${flexRow}`}></div>
                    <div
                      className={classNames(
                        `${flexColBetween} ${textCustom} ${mainLayout}`
                      )}
                    >
                      <h1>Our Blogs </h1>
                      {/* Main Contents */}
                      <div
                        className={`px-10  h-[400px] max-h-[400px] overflow-y-scroll scrollbar-hide `}
                      >
                        {blogPosts &&
                          blogPosts.map(
                            (
                              { _id, description, mainImage }: TBlogs,
                              index
                            ) => (
                              <div
                                key={_id}
                                className={`${XFull} max-w-full ${flexRow}`}
                              >
                                {/*  */}
                                <div className={`w-full max-w-two border `}>
                                  <ul className={`${XFull} `}>
                                    <li className={`h-20`}>
                                      <img
                                        src={urlFor(mainImage && mainImage)
                                          .auto("format")
                                          .bg("")
                                          .blur(1)
                                          .crop("entropy")
                                          .forceDownload(true)
                                          .height(200)
                                          .width(200)
                                          .maxHeight(300)
                                          .maxWidth(300)
                                          .quality(100)
                                          .url()}
                                        alt=""
                                        className={`max-w-full w-full h-full object-center object-cover`}
                                      />
                                    </li>
                                  </ul>
                                </div>
                                {/*  */}
                                <div
                                  className={`w-full max-w-eight border h-20`}
                                >
                                  <div
                                    className={classNames(
                                      `${flexCenter} ${boxFull}`
                                    )}
                                  >
                                    <h1
                                      className={classNames(
                                        `${textCustom} ${mainLayout} text-xs stroke-current line-clamp-3`
                                      )}
                                    >
                                      {description}
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        {/*  */}
                      </div>
                      <div>
                        <h1>Footer Element</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuPrimitive.Item>
              {/* ))} */}
            </div>

            {/* <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-100" /> */}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>
    </>
  );
};
export default NavbarBtnDropdown;
