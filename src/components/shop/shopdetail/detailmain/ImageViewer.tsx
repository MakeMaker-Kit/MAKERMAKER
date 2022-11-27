import React from "react";
import cx from "classnames";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";
import { shops } from "../../../../assets/images";
import { useIcon } from "../../../../hooks/dispatchContext";
import { USEContext } from "../../../../services/context/learncontext/LearnContext";
import { urlFor } from "../../../../client";
import { ChangeImageIndex } from "../../../../services/context/learncontext/types/IVehicle";

const ImageViewer = ({ images }: { images: string[] }) => {
  const { flexCol, flexRowCenter, flexCenter } = flexLayout;
  const { XFull, boxFull } = themes;
  const {} = textStyles;
  const { ArrowLeftIcon, ArrowRightIcon } = useIcon();
  const { state, dispatch } = USEContext();
  const { imageIndex } = state;
  return (
    <>
      <div className={`${XFull}`}>
        {/*  */}{" "}
        <div
          className={`${flexCol} overflow-scroll scrollbar-hide w-[500px] space-y-5`}
        >
          {/* MIAIN image display */}
          <div className={`w-[400px] h-[400px] overscroll-none relative`}>
            {/* NEXT/ PREVIOUS BUTTONS  */}
            <div
              className={cx(
                `top-1/2 left-2 absolute inline-block cursor-pointer `,
                `h-12 w-12 p-1 border border-dotted shadow rounded-full cursor-pointer z-10 bg-gray-100`,
                `${flexCenter}`
              )}
            >
              <ArrowLeftIcon />
            </div>
            <div
              className={cx(
                `top-1/2 right-2 absolute inline-block cursor-pointer `,
                `h-12 w-12 p-1 border border-dotted shadow rounded-full cursor-pointer z-10 bg-gray-100`,
                `${flexCenter}`
              )}
            >
              <ArrowRightIcon />
            </div>
            {/*  */}
            <img
              src={urlFor(images[imageIndex]).url()}
              alt=""
              title=""
              data-loading="lazy"
              className={`absolute max-h-full top-0 left-0 max-w-full w-full h-full object-cover`}
            />
          </div>
          {/* Mages COLLECTIONS */}
          <div className={cx(`p-2 `)}>
            <div className={`${boxFull} ${flexCenter}`}>
              <ul
                className={`${flexRowCenter} space-x-4 basis-full overflow-x-scroll snap-x snap-proximity scrollbar-hide `}
              >
                {images.map((image, index) => (
                  <li
                    className={`w-28 h-28 border border-dotted border-gray-700 flex-shrink-0 rounded-md shadow-md snap-center`}
                    key={index}
                  >
                    <div className={`${boxFull}`}>
                      <img
                        src={urlFor(image).url()}
                        className={`max-w-full w-full h-full object-cover object-center`}
                        onMouseEnter={() => ChangeImageIndex(dispatch, index)}
                      />
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
