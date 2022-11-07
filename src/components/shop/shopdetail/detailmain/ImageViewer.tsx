import React from "react";
import cx from "classnames";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";

const ImageViewer = () => {
  const { flexCol, flexRowCenter, flexCenter } = flexLayout;
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
              className={`absolute max-h-full top-0 left-0 max-w-full w-full h-full object-cover`}
            />
          </div>
          {/* Mages COLLECTIONS */}
          <div className={cx(`p-2 `)}>
            <div className={`${boxFull} ${flexCenter}`}>
              <ul
                className={`${flexRowCenter} space-x-4 basis-full overflow-x-scroll snap-x snap-proximity scrollbar-hide `}
              >
                {Array(5)
                  .fill(0)
                  .map((i) => (
                    <li
                      className={`w-40 h-40 border border-dotted border-gray-700 flex-shrink-0 rounded-md shadow-md`}
                      key={i}
                    >
                      <div className={`${boxFull}`}>
                        <img />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
