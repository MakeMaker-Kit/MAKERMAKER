import * as React from "react";
import Wrapper from "../components/appwrapper/Wrapper";
import { CheckoutLayout } from "../components/checkout";
const AppCheckout = () => {
  return (
    <>
      <Wrapper>
        <div>
          <CheckoutLayout />
        </div>
      </Wrapper>
    </>
  );
};

export default AppCheckout;
