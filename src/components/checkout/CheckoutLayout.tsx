import * as React from "react";
import cx from "classnames";
import { themes, flexLayout, textStyles } from "../../styles/themes/theme";
import CheckoutForm from "./form/CheckoutForm";
import CheckoutSummary from "./summary/CheckoutSummary";
const CheckoutLayout = () => {
  const { XFull, boxFull, YFull, containerWrapper, themeWrapper } = themes;
  const { marX } = themeWrapper;
  const {} = textStyles;
  const { flexRow, flexCol } = flexLayout;
  return (
    <>
      <div className={`${marX}`}>
        <div className={`${XFull} ${flexRow} `}>
          {/*  */}
          <div className={cx(`w-full max-w-five`)}>
            <div className={`${XFull}`}>
              <CheckoutSummary />
            </div>
          </div>
          {/*  */}
          <div className={cx(`w-full max-w-five`)}>
            <div className={`${XFull}`}>
              <CheckoutForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutLayout;
