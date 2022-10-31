import React from "react";

type InputProps = Omit<React.ComponentProps<"input">, "className"> & {};
interface MoreProps extends InputProps {
  // className?: React.CSSProperties | string
  className?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, MoreProps>(
  ({ children, ...props }, ref: React.Ref<HTMLInputElement>) => {
    return (
      <>
        <input ref={ref} type="text" className={``} {...props} />
      </>
    );
  }
);
