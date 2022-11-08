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
    localStorage.setItem("HomeHeader", JSON.stringify(response));
    return response;
  });
};

const SanityToClientService = { genrateHomeHeader, generateHeader };
export default SanityToClientService;
