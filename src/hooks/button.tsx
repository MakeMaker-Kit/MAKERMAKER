import React from "react";
import classNames from "classnames";
type Props = Omit<React.ComponentProps<"button">, "className"> & {};
const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => (
    <button ref={ref} {...props}>
      {children}
    </button>
  )
);
Button.displayName = "Button";
export default Button;
