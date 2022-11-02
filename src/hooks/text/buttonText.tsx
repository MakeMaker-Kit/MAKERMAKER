import React from "react";
type Props = Omit<React.ComponentProps<"div">, "classNames"> & {};
interface MorePops extends Props {
  color?: string;
  isRounded: boolean;
  clasNames?: string | undefined;
}
const ButtonText = React.forwardRef<HTMLDivElement, MorePops>(
  ({ children, clasNames, isRounded, color, ...props }, ref) => {
    return (
      <>
        <div ref={ref}>
          <span></span>
        </div>
      </>
    );
  }
);
ButtonText.displayName = "ButtonText";
export default ButtonText;
