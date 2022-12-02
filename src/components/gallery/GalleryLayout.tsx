import * as React from "react";
import cx from "classnames";
import { themes, flexLayout } from "../../styles/themes/theme";
import GalleryContents from "./contents/GalleryContents";
import { USEContext } from "../../services/context/learncontext/LearnContext";
const GalleryLayout = () => {
  const { boxFull, themeWrapper, Centralised } = themes;
  const { marX } = themeWrapper;
  const {} = flexLayout;
  const { state } = USEContext();

  const [height, setHeight] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(0);
  const { galleryData } = state;

  console.log("GALLERY LAYOUT", state.galleryData);
  /**
   * @param w
   * @param h
   */

  React.useEffect(() => {
    let cancelled = false;
    !cancelled && setHeight(window.innerHeight);
    !cancelled && setWidth(window.innerWidth);
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <>
      <div className={cx(`${Centralised} `)}>
        <div className={`${boxFull}`}>
          {/* @ts-ignore */}
          <GalleryContents {...galleryData} />
        </div>
      </div>
    </>
  );
};

export default GalleryLayout;
