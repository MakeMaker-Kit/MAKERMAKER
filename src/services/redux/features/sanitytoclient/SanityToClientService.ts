import { client } from "../../../../client";

type GenerateHeader = (payloadpResponse: string) => Promise<null | void>;
const genrateHomeHeader: GenerateHeader = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    return response;
  });
};

const generateHeader = async (payloadResponse: string) => {
  await client.fetch(payloadResponse).then((response) => {
    return response;
  });
};
const SanityToClientService = { genrateHomeHeader, generateHeader };
export default SanityToClientService;
