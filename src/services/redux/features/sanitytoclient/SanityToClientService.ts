import { client } from "../../../../client";

type GenerateHeader = (payloadpResponse: string) => Promise<null | void>;
const genrateHomeHeader: GenerateHeader = async (payloadResponse) => {
  client.fetch(payloadResponse).then((response) => {
    if (!response) throw new Error("Data is Invalid");
    else {
      return response.data;
    }
  });
};

const SanityToClientService = { genrateHomeHeader };
export default SanityToClientService;
