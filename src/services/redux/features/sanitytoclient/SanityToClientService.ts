import { client } from "../../../../client";

const genrateHomeHeader = async (payloadResponse: string) => {
  client.fetch(payloadResponse).then(({ data }) => {
    if (!data) throw new Error("Data is Invalid");
    else return data;
  });
};

const SanityToClientService = { genrateHomeHeader };
export default SanityToClientService;
