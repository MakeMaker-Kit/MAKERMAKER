import React from "react";
type WrapperProps = Omit<React.ComponentProps<"span">, "className"> & {};
interface MoreProps extends WrapperProps {}
const PageRoute = React.forwardRef<HTMLSpanElement, MoreProps>(
  ({ children, ...props }, ref) => {
    return <></>;
  }
);

PageRoute.displayName = "PageRoute";
export default PageRoute;
