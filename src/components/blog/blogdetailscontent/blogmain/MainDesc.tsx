import React, { Children } from "react";
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
  const { themeWrapper, imageLayout, boxFull } = themes;
  const {} = themeWrapper;
  const { textCustom, mainLayout } = textStyles;
  const { flexCenter } = flexLayout;
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
        return (
          <div className={`w-full h-[400px] my-10 border-2 rounded`}>
            <img
              src={urlFor(value && value)
                .width(500)
                .height(500)
                .url()}
              className={`${imageLayout} block rounded shadow`}
            />
          </div>
        );
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
        <em className="text-sm tracking-wide leading-8"> {children}</em>
      ),
      strong: ({ children }: { children: JSX.Element }) => (
        <strong className="text-9xl text-orange"> {children}</strong>
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
            className={`${textCustom} ${mainLayout} text-xs hover:underline  text-appBlue`}
          >
            {children}
          </a>
        );
      },
    },

    block: {
      h1: ({ children }: ChildProps) => (
        <h1
          className={`${textCustom} ${mainLayout} text-2xl text-appRed font-bold mt-6 mb-4`}
        >
          {children}
        </h1>
      ),
      h2: ({ children }: ChildProps) => (
        <h2
          className={`${textCustom} ${mainLayout} text-2xl text-appRed font-bold mt-6 mb-4`}
        >
          {children}
        </h2>
      ),
      h3: ({ children }: ChildProps) => (
        <h3
          className={`${textCustom} ${mainLayout} text-2xl text-appRed font-bold mt-6 mb-4 hover:underline`}
        >
          *{children}
        </h3>
      ),
      h4: ({ children }: ChildProps) => (
        <h4
          className={`${textCustom} ${mainLayout} text-2xl  text-appRed font-bold mt-6 mb-4 leading-9`}
        >
          {children}
        </h4>
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
        <p
          className={`${textCustom} ${mainLayout} text-sm tracking-wider leading-8 `}
        >
          {children}
        </p>
      ),
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }: ChildProps) => (
        <ul className="text-xs text-gray-500 list-decimal decoration-slice">
          {children}
        </ul>
      ),
      number: ({ children }: ChildProps) => (
        <ol className={`${textCustom} ${mainLayout} text-xs`}>{children}</ol>
      ),

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }: ChildProps) => (
        <ol className={`${textCustom} ${mainLayout} text-xs`}>{children}</ol>
      ),
      li: ({ children }: ChildProps) => (
        <li
          className={`${textCustom} ${mainLayout} text-black text-sm  leading-9`}
        >
          {children}
        </li>
      ),
    },
    listItem: {
      bullet: ({ children }: ChildProps) => (
        <li
          style={{ listStyleType: "disclosure-closed" }}
          className={`${textCustom} ${mainLayout} text-xs text-appRed`}
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
        {/* @ts-igmore */}
        <PortableText value={body} components={BlogPotabletextComponents} />
      </div>
    </>
  );
};

export default MainDesc;
