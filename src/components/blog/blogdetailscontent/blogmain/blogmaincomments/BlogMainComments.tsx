import React from "react";
import {
  textStyles,
  themes,
  flexLayout,
} from "../../../../../styles/themes/theme";
import { useIcon } from "../../../../../hooks/dispatchContext";
import { useAwesomwContext } from "../../../../../services/context/stylediconcontext/OnStyledIconContext";
import { Formik, FormikErrors } from "formik";
import CommentsDisplay from "./commentsdisplay/CommentsDisplay";
import { blogReviewQuery } from "../../../../../utils/GROC";
import moment from "moment";
const CommentsForm = () => {
  const { XFull, boxFull, imageLayout, containerWrapper } = themes;
  const {
    flexCol,
    flexStart,
    flexRow,
    flexCenter,
    flexRowCenterBetween,
    flexRowCenter,
  } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { RiShareForwardLine, CiClock2 } = useIcon();
  const { blogReview, fetchBlogReview } = useAwesomwContext();
  React.useEffect(() => {
    fetchBlogReview(blogReviewQuery);
  }, []);
  console.log("Bllog Review ", blogReview);
  return (
    <>
      <div className={`${XFull} ${flexCol} ${mainLayout} ${textCustom} `}>
        <h1 className={`text-2xl font-bold tracking-wider `}>
          {`0${blogReview.length}`} Comments
        </h1>
        {/* COMMENTS  */}
        {blogReview.map(
          ({
            _id,
            fullname,
            message,
            _createdAt,
          }: {
            _id: string;
            fullname: string;
            message: string;
            _createdAt: string;
          }) => (
            <div key={_id} className={` ${flexRow} py-6 border-y`}>
              <div className={`w-full max-w-two `}>
                <div className={`${XFull} ${flexCenter}`}>
                  <span className={`w-28 h-28`}>
                    <img
                      src={`http://metropolitanhost.com/themes/templatemoster/html/taylum/assets/img/blog/details/7.jpg`}
                      className={`${imageLayout}`}
                    />
                  </span>
                </div>
              </div>
              <div className={`w-full max-w-eight `}>
                <div className={`${flexCol} ${XFull} space-y-5`}>
                  <div className={`${XFull} ${flexRowCenterBetween} `}>
                    <div className={`${flexCol} space-y-4`}>
                      <h1 className={`text-xl`}>{fullname}</h1>
                      <span
                        className={`${flexRowCenter} tracking-wider space-x-2 text-sm`}
                      >
                        <CiClock2 size={20} />
                        <p>{moment(_createdAt).utc().format("YYYY-MMM-DD")}</p>
                      </span>
                    </div>
                    <div className={`px-8 py-3 border rounded-full shadow`}>
                      <span className={`${boxFull} ${flexRowCenter} space-x-2`}>
                        <p className={`underline text-lg`}>Share</p>
                        <RiShareForwardLine size={20} />
                      </span>
                    </div>
                    {/*  */}
                  </div>
                  <div className={``}>
                    <p className={`tracking-widest leading-8`}>{message}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
const BlogMainComments = () => {
  const { XFull, boxFull, imageLayout, containerWrapper } = themes;
  const { flexCol, flexStart, flexRow } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const {} = useIcon();
  const {} = useAwesomwContext();
  return (
    <>
      <div className={`${XFull}  ${flexCol} p-10 space-y-5`}>
        <div className={`${flexStart}`}>
          <h1 className={`${textCustom} ${mainLayout} text-2xl  `}>
            Leave a Comment
          </h1>
        </div>
        {/* comments form */}

        {/* Comment display */}
        <CommentsDisplay />
        <CommentsForm />
      </div>
    </>
  );
};

export default BlogMainComments;
