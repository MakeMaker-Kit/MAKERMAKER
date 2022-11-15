import { client } from "../../../../client";
import { getBlogDetail } from "../../../../utils/GROC";
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
export const fetchContactForm: SanityServiceTypes = async (payloadRespone) => {
  await client.fetch(payloadRespone).then((response) => {
    if (response) return response;
    return response;
  });
};
export const fetchContactInformation: SanityServiceTypes = async (
  payloadRespone
) => {
  await client.fetch(payloadRespone).then((response) => {
    if (response)
      return sessionStorage.setItem(
        "ContactInformation",
        JSON.stringify(response)
      );
    return response;
  });
};

export const fetchBlogDetail: SanityServiceTypes = async (payloadResponse) => {
  const query: string = getBlogDetail(payloadResponse);
  await client.fetch(query).then((response) => {
    if (response) {
      return sessionStorage.setItem("blogDetail", JSON.stringify(response));
    }
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
  fetchContactForm,
  fetchContactInformation,
  fetchBlogDetail,
};

export default SanityService;
