import { createTransform } from "redux-persist";
import { IAuthenticationState } from "./store";

export const TransformCredentials = createTransform(
  (inboundState: IAuthenticationState, key): any => {
    return {
      ...inboundState,
      user: undefined,
    };
  },
  (outboundState: any, key) => {
    return {
      ...outboundState,
      user: fetchUser(outboundState.token),
    };
  },
  {
    whitelist: ["authentication"],
  }
);

const fetchUser = (token: string) => {
  // return user
};
