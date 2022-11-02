import React from "react";
import classNames from "classnames";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import ButtonText from "../../../../hooks/text/buttonText";
import { useIcon } from "../../../../hooks/dispatchContext";

const MainHeader = () => {
  const { themeWrapper, XFull, boxFull, containerWrapper } = themes;
  const {} = themeWrapper;
  const { flexCol, flexRow, flexRowCenter, flexRowCenterBetween, flexCenter } =
    flexLayout;
  const { textCustom, mainLayout } = textStyles;
  const { ArchiveIcon, HeartFilledIcon, ReaderIcon } = useIcon();
  return (
    <>
      <div className={classNames(`${flexCol} gap-y-10`)}>
        <div className={`${XFull} h-[350px]  rounded-xl`}>
          <img
            src="https://bunzo-react.pages.dev/static/d48582260f8f1d3f931ed2db15f51b82/1d064/03.webp"
            alt=""
            className={classNames(
              `max-w-full w-full h-full object-cover rounded-xl `
            )}
            title={""}
            data-loading="lazy"
            width={400}
            height={400}
          />
        </div>
        <div className={`${flexRowCenterBetween} ${textCustom} ${mainLayout} `}>
          <div className={`${flexRowCenter} gap-x-5`}>
            <ButtonText
              clasNames={`${boxFull}  ${flexCenter}`}
              isRounded={true}
            >
              Marketing
            </ButtonText>
            <p>
              By <span>Wilson</span>
            </p>
          </div>
          <div
            className={`${flexRowCenter} space-x-2 font-gordita text-sm  font-light`}
          >
            <span>
              <ArchiveIcon />
            </span>
            <p className="tracking-tight">03/05/2021.</p>
            <p>10 min read</p>
          </div>
          <div className={`${flexRowCenter} space-x-1`}>
            <HeartFilledIcon className={`w-5 h-5`} />
            <ReaderIcon className={`w-5 h-5`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
