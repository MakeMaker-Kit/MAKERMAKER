import React from "react";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import classNames from "classnames";
type BannerProps = Omit<React.ComponentProps<"div">, "className"> & {};
interface MoreProps extends BannerProps {
  children?: string | undefined;
  home?: string;
  routePath?: string;
  routePathID?: string;
}
const BannerPageWrapper = React.forwardRef<HTMLDivElement, MoreProps>(
  ({ children, ...props }, ref) => {
    const { flexCenter, flexRow } = flexLayout;
    const {} = textStyles;
    const { boxFull, XFull } = themes;
    const { textCustom, mainLayout } = textStyles;
    return (
      <>
        <div className={classNames(`my-4 py-20 bg-gray-100`)}>
          <div className={`${boxFull} ${flexCenter}`}>
            {/* Display Page Routed Company */}
            <div className={`w-auto h-10 bg-appRed p-5 rounded-2xl shadow-md`}>
              <div
                className={`${boxFull} ${flexCenter} ${flexRow} space-x-3 text-white text-sm  `}
              >
                <span>Blog</span>
                <span> / </span>
                <span>How To Get In To The Tech Field</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

BannerPageWrapper.displayName = "BannerPageWrapper";
export default BannerPageWrapper;
