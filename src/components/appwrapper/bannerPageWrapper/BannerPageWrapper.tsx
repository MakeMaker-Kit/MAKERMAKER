import React from "react";
import { flexLayout } from "../../../styles/themes/theme";
type BannerProps = Omit<React.ComponentProps<"div">, "className"> & {};
interface MoreProps extends BannerProps {
  children?: string | undefined;
}
const BannerPageWrapper = React.forwardRef<HTMLDivElement, MoreProps>(
  ({ children, ...props }, ref) => {
    const { flexCenter } = flexLayout;
    return (
      <>
        <div></div>
      </>
    );
  }
);

BannerPageWrapper.displayName = "BannerPageWrapper";
export default BannerPageWrapper;
