import { AnyAction } from "@reduxjs/toolkit";
import { client } from "../../../../client";

type GenerateHeader = (payloadpResponse: string) => Promise<null | void>;
const genrateHomeHeader: GenerateHeader = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    return response;
  });
};

const generateHeader = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => {
    if (response) {
      localStorage.setItem("HomeHeader", JSON.stringify(response));
      console.log("responmse data ", response);
    }
    return response;
  });
};
const generateQuery = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => {
    if (response) {
      localStorage.setItem("QueryResponse", JSON.stringify(response));
    }
    return response;
  });
};
const SanityToClientService = {
  genrateHomeHeader,
  generateHeader,
  generateQuery,
};
export default SanityToClientService;
