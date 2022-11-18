import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useIcon } from "../../../../hooks/dispatchContext";
import { TAUTHOR, TBlogs } from "../../../../types/global.types";
import {
  textStyles,
  themes,
  flexLayout,
} from "../../../../styles/themes/theme";

const MainFooter = ({
  author,
  tags,
}: {
  author: {
    name?: string;
    slug?: string;
    image?: string;
    readonly bio?: Object[];
    occupation?: string;
    social: string[];
  };
  tags: { name?: string; _id: string; slug: string }[];
}) => {
  const { mainLayout, textCustom } = textStyles;
  const { containerWrapper, themeWrapper, boxFull, XFull } = themes;
  const {} = themeWrapper;
  const { flexRowCenterBetween, flexRowCenter, flexCenter } = flexLayout;
  const { FaLinkedinIn } = useIcon();
  return (
    <>
      <div className={`${flexRowCenterBetween} ${mainLayout} ${textCustom}`}>
        <div className={`${flexRowCenter} gap-x-4`}>
          <p>Tags: </p>
          <ul className={`${flexRowCenter} gap-x-2`}>
            {tags?.map(({ name, _id, slug }, index) => (
              <Link
                to={`/tag/${slug}`}
                key={_id}
                className={`text-gray-600 hover:underline lowercase`}
              >
                {name}
              </Link>
            ))}
          </ul>
        </div>
        <ul className={classNames(`${flexRowCenter} gap-x-4`)}>
          {author.social?.map((name, index) => (
            <Link
              to={`/tag/${name}`}
              key={index}
              className={classNames(`w-8 p-2 h-8 bg-gray-50 border`)}
            >
              <div className={classNames(`${flexCenter} ${boxFull}`)}>
                <FaLinkedinIn />
              </div>
            </Link>
          ))}

          {/*  */}
        </ul>
      </div>
    </>
  );
};

export default MainFooter;
