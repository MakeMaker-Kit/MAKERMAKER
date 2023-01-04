import React from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { useIcon } from "../../../../hooks/dispatchContext";
import { BlogCategory } from "../../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { TCategory } from "../../../../types/global.types";
import { USEContext } from "../../../../services/context/learncontext/LearnContext";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";
import { Link } from "react-router-dom";

const BlogCategories = () => {
  const { flexCol, flexRow, flexRowCenterBetween, flexCenter } = flexLayout;
  const {
    themeWrapper,
    containerWrapper,
    boxFull,
    XFull,
    transition,
    transitionEase,
  } = themes;
  const blogCategories = useSelector(BlogCategory);
  const {} = themeWrapper;
  const { mainLayout, textCustom } = textStyles;
  const { ArrowRightIcon } = useIcon();
  const { state } = USEContext();
  const { blogCategory } = state;
  return (
    <>
      <div className={`${boxFull}`}>
        <div className="py-3 ">
          <div className={cx(`${boxFull} ${flexCol} gap-y-5`)}>
            {blogCategory?.map(
              ({ _id, title, image, slug }: TCategory, index: number) => (
                <Link
                  to={`/category/${slug}`}
                  key={_id}
                  className={cx(
                    `h-24 ${XFull}`,
                    `rounded-lg shadow group ${transitionEase} border border-dotted border-slate-300`
                  )}
                >
                  <div
                    className={cx(
                      `bg-center bg-cover bg-no-repeat bg-clip-border bg-origin-content max-w-full w-full h-full cursor-pointer rounded-lg group-hover:p-3`,
                      ` bg-[url('../assets/images/img2.webp')] bghover`
                    )}
                  >
                    <div className={cx(`relative ${boxFull}`)}>
                      <div
                        className={cx(
                          `absolute top-[35%] w-full invisible group-hover:visible`,
                          `${flexRowCenterBetween}`
                        )}
                      >
                        <div
                          className={cx(
                            `${mainLayout} ${textCustom} text-[1rem] font-semibold text-white font-gordita`
                          )}
                        >
                          <h3 className={cx(`tracking-wide`)}>{title}</h3>
                        </div>
                        <div
                          className={`w-8 h-8 p-2 bg-orange text-white rounded-full`}
                        >
                          <div className={`${boxFull} ${flexCenter}`}>
                            <ArrowRightIcon size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCategories;
