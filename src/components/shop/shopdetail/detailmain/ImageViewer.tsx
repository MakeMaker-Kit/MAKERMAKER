import React from "react";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const ImageViewer = () => {
  const { flexCol, flexRowCenter } = flexLayout;
  const { XFull, boxFull } = themes;
  const {} = textStyles;
  return (
    <>
      <div className={`${XFull}`}>
        {/*  */}{" "}
        <div className={`${flexCol} overflow-scroll scrollbar-hide w-[500px]`}>
          {/* MIAIN image display */}
          <div
            className={`w-full max-w-[500px] h-full max-h-[500px] overscroll-none relative`}
          >
            <img
              src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F575%2Fbaby-spinach-1.png&w=640&q=75"
              alt=""
              title=""
              data-loading="lazy"
              // className={`max-w-full w-full h-full object-center object-cover`}
              className={`absolute max-h-full top-0 left-0`}
            />
          </div>
          {/* Mages COLLECTIONS */}
          <ul className={`${flexRowCenter} basis-full`}>
            <li className={`w-40 h-40 `}></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
