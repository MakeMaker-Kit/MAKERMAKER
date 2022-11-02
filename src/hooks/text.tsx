import React from "react";
import cx from "classnames";
type TextProps = Omit<React.ComponentProps<"p">, "className"> & {};
interface MoreProps extends TextProps {}
const Text = React.forwardRef<HTMLParagraphElement, MoreProps>(
  ({ children, ...props }, ref) => {
    return <p>{children}</p>;
  }
);

Text.displayName = "Text";
export default Text;
