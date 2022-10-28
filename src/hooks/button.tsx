import React from "react";
import classNames from "classnames";
type Props = Omit<React.ComponentProps<"button">, "className"> & {};
const Button = React.forwardRef<HTMLButtonElement, Props>(() => (
  <button></button>
));
Button.displayName = "Button";
export default Button;
