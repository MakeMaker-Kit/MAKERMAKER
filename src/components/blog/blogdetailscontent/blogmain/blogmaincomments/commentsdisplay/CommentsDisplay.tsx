import React from "react";
import {
  themes,
  flexLayout,
  textStyles,
} from "../../../../../../styles/themes/theme";
const TextField = () => {
  const { XFull, containerWrapper, boxFull } = themes;
  const { flexCol, flexCenter } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div className={`${flexCol}`}>
        <input />

        <span>Enter your name</span>
      </div>
    </>
  );
};
const CommentsDisplay = () => {
  const { XFull, containerWrapper, boxFull } = themes;
  const { flexCol, flexCenter } = flexLayout;
  const {} = textStyles;
  return (
    <>
      <div
        className={`p-6 ${XFull} ${containerWrapper} bg-gray-100 rounded-2xl`}
      >
        <div className={`${boxFull} ${flexCol} space-y-6`}>
          {/* TextArea */}
          <div className={`${flexCol}`}>
            <textarea
              placeholder="Enter your message"
              className={`text-start resize-none pt-3 pl-3`}
            ></textarea>
            <span>Enter your Message</span>
          </div>
          {/*  */}
          <TextField />
          <TextField />
          <TextField />
          <TextField />
        </div>
      </div>
    </>
  );
};

export default CommentsDisplay;
