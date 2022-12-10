import * as React from "react";
import cx from "classnames";
import { themes, textStyles, flexLayout } from "../../styles/themes/theme";
type TProps = Omit<React.ComponentProps<"div">, "classNames"> & {};
interface MoreProps extends TProps {}
const TextDisplay = React.forwardRef<
  HTMLDivElement,
  MoreProps & { error?: string; touched?: boolean }
>(({ children, error, touched }) => {
  const { mainLayout, textCustom } = textStyles;
  const { flexCenter } = flexLayout;
  return (
    <>
      <div
        className={cx(
          `p-px bg-white shadow border ${flexCenter} w-1/2 text-red-800`
        )}
      >
        <span
          className={`${textCustom} ${mainLayout} text-xs whitespace-nowrap lowercase`}
        >
          {children}
        </span>
      </div>
    </>
  );
});
TextDisplay.displayName = "TextDisplay";
export default TextDisplay;
