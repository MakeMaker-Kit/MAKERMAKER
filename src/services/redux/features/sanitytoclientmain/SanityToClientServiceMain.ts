import { client } from "../../../../client";

export type SanityServiceTypes = (
  payloadResponse: string
) => Promise<null | void>;
export type SanityCreateTypes = (payloadResponse: {
  _type: string;
  username: string;
  email: string;
  message: string;
  subject: string;
  phoneNumber: string | number;
}) => Promise<void>;
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
export const fetchFooterAbout: SanityServiceTypes = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    if (response)
      return sessionStorage.setItem("FooterAbout", JSON.stringify(response));
    return response;
  });
};
export const fetchTestimonials: SanityServiceTypes = async (
  payloadResponse
) => {
  await client.fetch(payloadResponse).then((response) => {
    if (response)
      return sessionStorage.setItem("Testimonials", JSON.stringify(response));
    return response;
  });
};
export const fetchHomeBrands: SanityServiceTypes = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    if (response)
      return sessionStorage.setItem("HomeBrands", JSON.stringify(response));
    return response;
  });
};
export const fetchUserContact: SanityCreateTypes = async (payloadResponse) => {
  await client.create(payloadResponse).then((response) => {
    if (response) return true && response;
    return response;
  });
};
const SanityService = {
  fetchProductsDisplay,
  fetchHomeHeader,
  fetchDisplayMore,
  fetchTestimonials,
  fetchHomeBrands,
  fetchUserContact,
};

export default SanityService;
