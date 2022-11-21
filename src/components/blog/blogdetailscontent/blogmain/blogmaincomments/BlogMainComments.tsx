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
const CommentsForm = () => {
  return <></>;
};
const BlogMainComments = () => {
  const { XFull, boxFull, imageLayout, containerWrapper } = themes;
  const { flexCol, flexStart } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const {} = useIcon();
  const {} = useAwesomwContext();
  return (
    <>
      <div className={`${XFull} ${containerWrapper} ${flexCol} p-10`}>
        <div className={`${flexStart}`}>
          <h1 className={`${textCustom} ${mainLayout} text-lg`}>
            Leave a Comment
          </h1>
        </div>
        {/* comments form */}
        <CommentsForm />
        {/* Comment display */}
        <CommentsDisplay />
      </div>
    </>
  );
};

export default BlogMainComments;
