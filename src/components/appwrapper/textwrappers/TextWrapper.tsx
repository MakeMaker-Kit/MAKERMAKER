import React, { ReactElement } from "react";
import cx from "classnames";
type MoreProps = Omit<React.ComponentProps<"div">, "className"> & {};
interface Props extends MoreProps {
  Zindex: string;
}
const TextWrapper = ({ Zindex, ...props }: Props) => {
  return (
    <>
      <div
        className={cx(
          `mb-8 text-left`,
          `w-[500px] max-w-[500px] ${Zindex} ${props} absolute top-[121px] left-[50px] bottom-auto right-auto break-words`
        )}
      >
        <div className={`relative last:pb-0`}>
          <h1 className={`text-[200px] text-[rgba(226,226,226,0.45)]`}>Make</h1>
        </div>
      </div>
    </>
  );
};
TextWrapper.displayName = "TextWrapper";
export default TextWrapper;
