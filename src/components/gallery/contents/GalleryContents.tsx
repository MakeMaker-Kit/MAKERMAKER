import * as React from "react";
import { GalleryType, TGALLERY } from "../../../types/global.types";
import { urlFor } from "../../../client";
import { themes, textStyles, flexLayout } from "../../../styles/themes/theme";
import { useIcon } from "../../../hooks/dispatchContext";
import cx from "classnames";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import SimpleReactLightBox, { ILightBoxProps } from "react-image-lightbox";
import ImageViewer from "react-simple-image-viewer";

import { Offline, Online } from "react-detect-offline";

const GalleryContents = ({ title, desc, gallery, images }: GalleryType) => {
  const { boxFull, transition } = themes;
  const { mainLayout, textCustom } = textStyles;
  const { flexCenter } = flexLayout;
  const [photoIndex, setPhotoIndex] = React.useState<number>(0);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { AiFillEye, AiOutlineCamera } = useIcon();

  const openImageView = React.useCallback((index: number) => {
    setPhotoIndex(index);
    setIsOpen((prev) => !prev);
  }, []);

  const closeImageViewer = () => {
    setPhotoIndex(0);
    setIsOpen((prev) => !prev);
  };

  const imageString = images.map((image) => urlFor(image).url());
  console.log("iamgestring", imageString);
  const galleryContents =
    images &&
    images.map((image: string, i) => {
      console.log("image", urlFor(image).url());
      return (
        <div className="lg:w-1/3 sm:w-1/2 p-4 group" key={i + 1}>
          <div className="flex relative w-full h-[400px]">
            <img
              alt="gallery"
              className="absolute inset-0 max-w-full w-full h-full object-cover object-center rounded-lg hover:opacity-60 hover:blackdrop-blur-sm"
              loading-image={"lazy"}
              title={`gallery_image_title`}
              src={urlFor(image)
                .minWidth(600)
                .minHeight(600)
                .width(600)
                .height(600)
                .maxWidth(500)
                .maxHeight(500)
                .url()}
              onClick={() => openImageView(i)}
            />
            {/*Abolute position element */}
            <div className={cx(`absolute top-1/2 left-1/2  `)}>
              <div
                className={`${boxFull} ${flexCenter} invisible group-hover:visible`}
              >
                <h1 className={`text-sm ${transition}`}>
                  <AiFillEye size={40} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
    });
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-4xxl font-black title-font mb-4 text-gray-900 tracking-wider caret-pocket capitalize">
              {title}
            </h1>
            <p
              className={`lg:w-2/3 mx-auto leading-relaxed text-sm ${mainLayout} ${textCustom} leading-9 tracking-widest`}
            >
              {desc}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {galleryContents}
            {isOpen && (
              <ImageViewer
                src={imageString}
                currentIndex={photoIndex}
                disableScroll={true}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryContents;
