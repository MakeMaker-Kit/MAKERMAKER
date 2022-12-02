import * as React from "react";
import { GalleryType, TGALLERY } from "../../../types/global.types";
import { urlFor } from "../../../client";
import { themes, textStyles } from "../../../styles/themes/theme";
import cx from "classnames";

const GalleryContents = ({ title, desc, gallery }: GalleryType) => {
  const {} = themes;
  const { mainLayout, textCustom } = textStyles;
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 tracking-wider ">
              {title}
            </h1>
            <p
              className={`lg:w-2/3 mx-auto leading-relaxed text-sm ${mainLayout} ${textCustom} leading-9 tracking-widest`}
            >
              {desc}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {gallery &&
              gallery?.map(({ _id, desc, image, sub, title }: TGALLERY) => (
                <div className="lg:w-1/3 sm:w-1/2 p-4" key={_id}>
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 max-w-full w-full h-full object-cover object-center rounded-lg "
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
                    />
                    <div
                      className={`px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-md ${mainLayout} ${textCustom}
`}
                    >
                      <h2
                        className={cx(
                          `tracking-widest text-sm title-font font-medium text-indigo-500 mb-1`
                        )}
                      >
                        {sub}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {title}
                      </h1>
                      <p className="leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryContents;
