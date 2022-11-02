import React from "react";
import cx from "classnames";
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
        <div className={`w-auto h-8 p-2 border rounded-md`}>
          <div className={cx(`${clasNames}`)} {...props}>
            <p className={`text-sm font-gordita`}>{children}</p>
          </div>
        </div>
      </>
    );
  }
);
ButtonText.displayName = "ButtonText";
export default ButtonText;
