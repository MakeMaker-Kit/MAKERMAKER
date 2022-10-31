import React from "react";
import cx from "classnames";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";

const Content = () => {
  const { flexCenter, flexStart, flexCol, flexRowCenter } = flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { themeWrapper } = themes;
  const {} = themeWrapper;
  return (
    <>
      <div className={cx(`${flexCenter}`)}>
        <h1 className={cx(`${mainLayout} ${textCustom} text-4xl text-gray-50`)}>
          Contact Infromation
        </h1>
      </div>
      {/* Contact Details */}
      <div className={cx(`${flexCol} ${flexStart} space-y-6`)}>
        <div
          className={`${flexCol} ${mainLayout} ${textCustom} text-sm text-gray-50`}
        >
          <p className="text-gray-200">Our Address</p>
          <p>No 9 Stallion Rd</p>
          <p>Abia State, Nigeria</p>
        </div>

        {Array(5)
          .fill(0)
          .map((i) => (
            <>
              <p
                className={cx(
                  `${mainLayout} ${textCustom} text-sm text-gray-50 whitespace-nowrap ${flexRowCenter} space-x-2`
                )}
                key={i + 1}
              >
                {" "}
                Email:{" "}
                <span
                  className={`w-auto max-w-five p-2 h-4 bg-white ${flexCenter}`}
                >
                  {" "}
                  <p className="text-xs text-gray-800">Makemaker@info.com</p>
                </span>
              </p>
            </>
          ))}
      </div>
    </>
  );
};

export default Content;
