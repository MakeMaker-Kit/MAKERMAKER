import React from "react";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../styles/themes/theme";
import cx from "classnames";
import { useIcon } from "../../../../../hooks/dispatchContext";
const RelatedCard = () => {
  const { imageLayout, boxFull } = themes;
  const {
    flexCol,
    flexRow,
    flexWrap,
    flexRowCenterBetween,
    flexRowCenter,
    flexCenter,
  } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { AiFillCalendar } = useIcon();
  return (
    <>
      <div className={`w-full ${flexCol} h-auto`}>
        <div className={cx(`h-[300px] relative`)}>
          <img
            src={`http://metropolitanhost.com/themes/templatemoster/html/taylum/assets/img/blog/details/4.jpg`}
            alt=""
            className={`${imageLayout} max-h-full`}
          />
          {/*  */}
          <div
            className={`absolute p-2 -bottom-5 right-5 bg-appBlue shadow-md rounded-full`}
          >
            <p
              className={`${boxFull} ${flexCenter} ${mainLayout} ${textCustom}`}
            >
              <span>programming</span>
            </p>
          </div>
        </div>
        <div className={cx(`p-5`)}>
          <div
            className={`${boxFull} ${flexCol} space-y-5 ${textCustom} ${mainLayout}`}
          >
            {/*  */}
            <div className={cx(`${flexRowCenterBetween}`)}>
              <div className={`${flexRowCenter} space-x-1`}>
                <AiFillCalendar />
                <p>may 30 2019</p>
              </div>
              <p>wilson ibekason</p>
            </div>
            {/*  */}
            <div className={`line-clamp-3`}>
              <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                amet consectetur illum in consequatur totam tenetur dolorum
                error obcaecati qui?
              </h4>
            </div>
            {/*  */}
            <div className={`line-clamp-3 `}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aperiam unde. Esse quod ipsam aperiam nemo asperiores, illo
                dolores fugit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const BlogMainRelated = () => {
  const { boxFull, XFull, containerWrapper } = themes;
  const { flexCol, flexRow, flexWrap, flexColBetween } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={`${XFull} ${flexCol}`}>
        <h1>Related Posts</h1>
        {/*  */}
        <div className={cx(`w-full ${flexRow} ${flexWrap} gap-4`)}>
          {Array(4)
            .fill(0)
            .map((i) => (
              <div
                key={i}
                className={cx(`w-full max-w-four flex-[0_0_40%] border`)}
              >
                <RelatedCard />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogMainRelated;
