import { client } from "../../../../client";

type GenerateHeader = (payloadpResponse: string) => Promise<null | void>;
const genrateHomeHeader: GenerateHeader = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    if (!response) throw new Error("Data is Invalid");
    else {
      return response;
    }
  });
};

const SanityToClientService = { genrateHomeHeader };
export default SanityToClientService;
