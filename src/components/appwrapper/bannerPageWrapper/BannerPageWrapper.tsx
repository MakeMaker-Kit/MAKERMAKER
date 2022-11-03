import React from "react";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import classNames from "classnames";
type BannerProps = Omit<React.ComponentProps<"div">, "className"> & {};
interface MoreProps extends BannerProps {
  children?: string | undefined;
  home?: string | "Home" | "homr";
  routePath?: string;
  routePathID?: string;
}
const BannerPageWrapper = React.forwardRef<HTMLDivElement, MoreProps>(
  ({ children, home, routePath, routePathID, ...props }, ref) => {
    const { flexCenter, flexRow } = flexLayout;
    const {} = textStyles;
    const { boxFull, XFull } = themes;
    const { textCustom, mainLayout } = textStyles;
    return (
      <>
        <div className={classNames(`my-4 py-20 bg-gray-100`)} {...props}>
          <div className={`${boxFull} ${flexCenter}`}>
            {/* Display Page Routed Company */}
            <div className={`w-auto h-10 bg-orange p-5 rounded-2xl shadow-md`}>
              <div
                className={`${boxFull} ${flexCenter} ${flexRow} space-x-3 text-white text-xs  ${textCustom}`}
              >
                <span className={`capitalize`}>{home ? home : "Home"}</span>
                {routePath && <span>/</span>}
                <span
                  className={classNames(
                    `capitalize`,
                    `${!routePathID ? "text-gray-300" : ""}`
                  )}
                >
                  {routePath ? routePath : ""}
                </span>
                {routePathID && <span> / </span>}
                <span
                  className={classNames(
                    `${routePath && routePathID ? "text-gray-500" : ""}`
                  )}
                >
                  {routePathID ? routePathID : ""}
                </span>
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
