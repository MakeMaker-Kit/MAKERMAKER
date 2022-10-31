import React from "react";
import { themes } from "../styles/themes/theme";
import classNames from "classnames";

type InputProps = Omit<React.ComponentProps<"input">, "className"> & {};
interface MoreProps extends InputProps {
  // className?: React.CSSProperties | string
  className?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, MoreProps>(
  ({ children, ...props }, ref: React.Ref<HTMLInputElement>) => {
    const { formLayout } = themes;
    return (
      <>
        <input
          ref={ref}
          type="text"
          className={classNames(`${formLayout}`)}
          {...props}
        />
      </>
    );
  }
);
Input.displayName = "Input";
export default Input;
