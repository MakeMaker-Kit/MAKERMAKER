import { AnyAction } from "@reduxjs/toolkit";
import { client } from "../../../../client";

type GenerateHeader = (payloadpResponse: string) => Promise<null | void>;
const genrateHomeHeader: GenerateHeader = async (payloadResponse) => {
  await client.fetch(payloadResponse).then((response) => {
    return response;
  });
};

const generateHeader = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => response);
};
const generateQuery = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => response);
};
const generateteTestimonials = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => response);
};
const generateSocial = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => response);
};
const generateFooterLinks = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => response);
};
const generateProductDisplay = (payloadResponse: string) => {
  client.fetch(payloadResponse).then((response) => response);
};
const SanityToClientService = {
  genrateHomeHeader,
  generateHeader,
  generateQuery,
  generateFooterLinks,
  generateSocial,
  generateteTestimonials,
  generateProductDisplay,
};
export default SanityToClientService;
