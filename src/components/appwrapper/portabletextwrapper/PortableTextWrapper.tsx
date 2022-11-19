import React from "react";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@sanity/types/dist/dts";

interface ChildProps {
  [key: string]: string | JSX.Element;
  children: JSX.Element;
}
interface IProps {
  body: TypedObject | TypedObject[];
}
const PortableTextWrapper = ({ body }: IProps) => {
  const { imageLayout, boxFull, XFull } = themes;
  const { flexCenter, flexCol, flexRow, flexRowCenter } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const BlogPortableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        return <img className={`${imageLayout}`} src={value} />;
      },
    },
    // MARKS
    marks: {
      em: ({ children }: ChildProps) => <em className={``}>{children}</em>,
      strong: ({ children }: ChildProps) => <strong>{children}</strong>,
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
        const rel = !value.href?.startsWith("/")
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
    //
    block: {
      h1: ({ children }: ChildProps) => (
        <h1
          className={`${textCustom} ${mainLayout} text-2xl text-appRed font-bold`}
        >
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
        <p
          className={`${textCustom} ${mainLayout} text-xs tracking-wider leading-8`}
        >
          {children}
        </p>
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
  };
  return (
    <>
      <div>
        <PortableText value={body} components={BlogPortableTextComponents} />
      </div>
    </>
  );
};

export default PortableTextWrapper;
