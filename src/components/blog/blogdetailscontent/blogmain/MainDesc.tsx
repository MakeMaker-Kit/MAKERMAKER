import React from "react";
import cx from "classnames";
import PortableText from "react-portable-text";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import { TBlogs } from "../../../../types/global.types";

const MainDesc = ({ body }: { body: Object[] }) => {
  const { themeWrapper } = themes;
  const {} = themeWrapper;
  const { textCustom, mainLayout } = textStyles;
  const {} = flexLayout;

  return (
    <>
      <div>
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
          className={`${mainLayout} ${textCustom} text-xs text-red-900 bg-black p-3 `}
          dataset="production"
          content={body}
        />
      </div>
    </>
  );
};

export default MainDesc;
