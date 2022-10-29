import React from "react";
import cx from "classnames";
const TextWrapper = () => {
  return (
    <>
      <div
        className={cx(
          `mb-8 text-left`,
          `w-[500px] max-w-[500px] z-[-1] absolute top-[121px] left-[50px] bottom-auto right-auto break-words`
        )}
      >
        <div className={`relative last:pb-0`}>
          <h1 className={`text-[200px] text-[rgba(226,226,226,0.45)]`}>Make</h1>
        </div>
      </div>
    </>
  );
};

export default TextWrapper;
