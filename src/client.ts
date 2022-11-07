import sanityClienty from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const client = sanityClienty({
  dataset: "",
  apiVersion: "",
  ignoreBrowserTokenWarning: true,
  withCredentials: true,
  token: "",
});
const builder = imageBuilder(client);
export const urlFor = (source: any) => builder.image(source);
