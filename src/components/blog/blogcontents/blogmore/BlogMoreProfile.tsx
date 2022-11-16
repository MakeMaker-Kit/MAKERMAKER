import React from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { useIcon } from "../../../../hooks/dispatchContext";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import MainButton from "../../../../hooks/button/mainBTN";
import { BlogPosts } from "../../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { TAUTHOR, TBlogs } from "../../../../types/global.types";
import { urlFor } from "../../../../client";
import PortableText from "react-portable-text";
import { Link } from "react-router-dom";
import {
  textStyles,
  themes,
  flexLayout,
} from "../../../../styles/themes/theme";

const BlogMoreProfile = () => {
  const { mainLayout, textCustom } = textStyles;
  const { themeWrapper, boxFull, XFull, containerWrapper, imageLayout } =
    themes;
  const {} = themeWrapper;
  const blogPosts = useSelector(BlogPosts);
  const author = blogPosts && blogPosts?.map(({ author }: TBlogs) => author);
  const social = blogPosts && blogPosts?.map(({ social }: TBlogs) => social);
  console.log("Auth Repone", social, blogPosts);
  const {
    flexRowCenter,
    flexCol,
    flexRowCenterBetween,
    flexColCenter,
    flexCenter,
  } = flexLayout;
  const { FaLinkedinIn } = useIcon();

  return (
    <>
      <div
        className={`px-4 py-8 bg-white border border-dotted border-gray-300 rounded-lg shadow`}
      >
        <div className={`${boxFull} ${flexColCenter} gap-y-6`}>
          {/* image */}
          <div className={`h-24 w-24 border border-double rounded-full p-3`}>
            <div
              className={cx(
                `${boxFull} border border-dotted border-gray-300 rounded-full`
              )}
            >
              <img
                src={`${
                  author
                    ? urlFor(author[0].image)
                    : "https://bunzo-react.pages.dev/static/e5e25dbd97017ad7fffd2049490b5ca1/1deab/team-2.webp"
                }`}
                alt=""
                title=""
                data-loading="lazy"
                className={cx(`${imageLayout} object-center rounded-full`)}
              />
            </div>
          </div>
          {/*  */}
          <div className={`${flexColCenter}`}>
            <p>{author[0].name}</p>
            <p>Nigeria</p>
          </div>
          {/*  */}
          <div className={`${flexCenter} text-center`}>
            <PortableText
              serializers={{
                h1: (props: React.ReactElement) => (
                  <h1
                    className={`text-xs font-poppins font-semibold text-gray-300  ${mainLayout} ${textCustom}`}
                    {...props}
                  >
                    {" "}
                  </h1>
                ),
                span: (props: React.ReactElement) => (
                  <span
                    className={cx(`${mainLayout} ${textCustom} text-xs`)}
                    {...props}
                  ></span>
                ),
                li: ({ children }: { children: React.ReactElement }) => (
                  <li className="ml-4 list-none  font-semibold capitalize text-red-700 text-xs   ">
                    {children}
                  </li>
                ),
                img: (src: string) => (
                  <img className="rounded" alt="post_img" src={src} />
                ),
                link: ({
                  href,
                  children,
                }: {
                  href?: string;
                  children: React.ReactElement;
                }) => <a href={href}>{children}</a>,
              }}
              projectId="zkmc5a7m"
              className={`${mainLayout} ${textCustom} text-xs`}
              dataset="production"
              content={author[0].bio}
            />
          </div>
          {/*  */}
          <ul className={`${flexRowCenter} gap-x-4`}>
            {author[0].social.map((items: string, index: number) => (
              <Link
                to={`/${items}`}
                rel="no-referee"
                className={`h-10 w-10 p-2 border bg-gray-100 rounded-full`}
                key={index}
              >
                <div className={`${boxFull} ${flexCenter}`}>
                  <FaLinkedinIn />
                </div>
              </Link>
            ))}
          </ul>
          {/*  */}
          <div className={`w-full max-w-five `}>
            <MainButton isRounded={true}>View Profile</MainButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMoreProfile;
