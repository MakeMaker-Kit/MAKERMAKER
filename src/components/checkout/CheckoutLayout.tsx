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
      <div className={`mx-10 h-auto`}>
        <div className={`${boxFull} ${flexRow} `}>
          {/*  */}

          {/*  */}
          <div className={cx(`w-full max-w-six `)}>
            <div className={`${boxFull}`}>
              <CheckoutForm />
            </div>
          </div>
          {/*  */}
          <div className={cx(`w-full max-w-four`)}>
            <div className={`${boxFull} py-24`}>
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutLayout;
