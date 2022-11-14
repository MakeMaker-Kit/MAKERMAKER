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

export const fetchHomeHeader: SanityServiceTypes = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    if (response) {
      return localStorage.setItem("ProductDisplays", JSON.stringify(response));
    }
    return response;
  });
};
export const fetchDisplayMore: SanityServiceTypes = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    if (response) {
      return localStorage.setItem("DisplayMore", JSON.stringify(response));
    }
    return response;
  });
};

const SanityService = {
  fetchProductsDisplay,
  fetchHomeHeader,
  fetchDisplayMore,
};

export default SanityService;
