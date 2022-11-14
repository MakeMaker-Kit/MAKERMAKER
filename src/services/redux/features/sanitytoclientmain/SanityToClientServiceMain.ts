import { client } from "../../../../client";

export type SanityServiceTypes = (
  payloadResponse: string
) => Promise<null | void>;

export const fetchProductsDisplay: SanityServiceTypes = async (
  payloadResponse
) => {
  await client.fetch(payloadResponse).then((response) => {
    if (response) {
      return localStorage.setItem("ProductDisplays", JSON.stringify(response));
    }
    return response;
  });
};

const SanityService = { fetchProductsDisplay };

export default SanityService;
