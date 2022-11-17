import React from "react";
import cx from "classnames";
// import PortableText from "react-portable-text";
import { PortableText } from "@portabletext/react";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import { TBlogs } from "../../../../types/global.types";
import { TypedObject } from "@sanity/types/dist/dts";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "../../../../client";
interface ChildProps {
  [key: string]: string | JSX.Element;
  children: JSX.Element;
}
const MainDesc = ({ body }: { body: TypedObject | TypedObject[] }) => {
  const { themeWrapper, imageLayout } = themes;
  const {} = themeWrapper;
  const { textCustom, mainLayout } = textStyles;
  const {} = flexLayout;
  // "SF Pro Display", -apple-system, acumin-pro, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol
  const SanityImageComponent = ({
    value,
    isInline,
  }: {
    value: {
      asset: { _ref: string; _type: string };
      _key: string;
      _type: string;
    };
    isInline: boolean;
  }) => {
    const { width, height } = getImageDimensions(value.asset);
    console.log("Imgae Logged ", value);
    return (
      <img
        src={urlBuilder()
          .image(value.asset)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt=""
        title={"blogImage_img"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    );
  };
  const BlogPotabletextComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        console.log("logged Imaeg", value);
        return <img src={value} className={`${imageLayout}`} />;
      },
      // image: SanityImageComponent,
      callToAction: ({
        value,
        isInline,
      }: {
        value: { url: string; text: JSX.Element };
        isInline: boolean;
      }) =>
        isInline ? (
          <a href={value.url} className={`${textCustom} ${mainLayout} text-xs`}>
            {value.text}
          </a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      em: ({ children }: { children: JSX.Element }) => (
        <em className="text-xs"> {children}</em>
      ),
      span: ({ children }: ChildProps) => (
        <span className="text-xs text-teal-500">{children}</span>
      ),
      text: ({ children }: ChildProps) => (
        <h1 className={`${textCustom} ${mainLayout} text-xs text-appRed`}>
          {children}
        </h1>
      ),
      blockquote: ({ children }: ChildProps) => (
        <blockquote className={`${textCustom} ${mainLayout} text-xs`}>
          {children}
        </blockquote>
      ),

      customHeading: ({ children }: ChildProps) => (
        <h2 className={`${textCustom} ${mainLayout} text-xs`}>{children}</h2>
      ),
      p: ({ children }: ChildProps) => (
        <p className={`${textCustom} ${mainLayout} text-xs`}>{children}</p>
      ),
      link: ({
        children,
        value,
      }: {
        children: JSX.Element;
        value: { href: string };
      }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            className={`${textCustom} ${mainLayout} text-xs underline`}
          >
            {children}
          </a>
        );
      },
    },
    children: {
      text: ({ children }: ChildProps) => (
        <span className="text-xs text-teal-500">{children}</span>
      ),
    },
    block: {
      h1: ({ children }: ChildProps) => (
        <h1 className={`${textCustom} ${mainLayout} text-xs text-appRed`}>
          {children}
        </h1>
      ),
      blockquote: ({ children }: ChildProps) => (
        <blockquote className={`${textCustom} ${mainLayout} text-xs`}>
          {children}
        </blockquote>
      ),
      span: ({ children }: ChildProps) => (
        <span className={`${textCustom} ${mainLayout} text-xs`}>
          {children}
        </span>
      ),

      customHeading: ({ children }: ChildProps) => (
        <h2 className={`${textCustom} ${mainLayout} text-xs`}>{children}</h2>
      ),
      p: ({ children }: ChildProps) => (
        <p className={`${textCustom} ${mainLayout} text-xs`}>{children}</p>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }: ChildProps) => (
        <ul className="text-xs text-gray-600">{children}</ul>
      ),
      number: ({ children }: ChildProps) => (
        <ol className={`${textCustom} ${mainLayout} text-xs`}>{children}</ol>
      ),

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }: ChildProps) => (
        <ol className={`${textCustom} ${mainLayout} text-xs`}>{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: ChildProps) => (
        <li
          style={{ listStyleType: "disclosure-closed" }}
          className={`${textCustom} ${mainLayout} text-xs`}
        >
          {children}
        </li>
      ),
      checkmarks: ({ children }: ChildProps) => <li>{children}</li>,
    },
  };
  const myPortableTextComponents = {};

  return (
    <>
      <div>
        {/* <PortableText
          serializers={{
            h1: (props: JSX.Element) => (
              <h1
                className={`text-xs font-poppins font-semibold text-gray-300  ${mainLayout} ${textCustom}`}
                {...props}
              >
                {" "}
              </h1>
            ),
            span: (props: React.ReactElement) => (
              <span
                className={cx(
                  `${mainLayout} ${textCustom} text-4xl font-black text-white `
                )}
                {...props}
              ></span>
            ),
            li: ({ children }: { children: React.ReactElement }) => (
              <li className="ml-4 list-none  font-semibold capitalize text-red-700 text-xs   ">
                {children}
              </li>
            ),
            img: (src: string) => (
              <img
                className="rounded-full w-full max-w-full object-full "
                alt="post_img"
                src={src}
              />
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
          className={`${mainLayout} ${textCustom} text-xs text-red-900  p-3 `}
          dataset="production"
          content={body}
        /> */}
        <PortableText value={body} components={BlogPotabletextComponents} />
      </div>
    </>
  );
};

export default MainDesc;
