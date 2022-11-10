import sanityClienty from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const client = sanityClienty({
  dataset: "production",
  projectId: "zkmc5a7m",
  apiVersion: "2022-02-01",
  ignoreBrowserTokenWarning: true,
  withCredentials: true,
  useCdn: true,
  token:
    "skeiV2xU1QRXBX4AfrJ5PzV6lZjx3Av2NQ0ubWmxwsX4vXq1rEeWUQZRWyJ418Cmu9KfICjWL4zHtOAFj2t3pwApRypKXvV6rM0Lnrluh4UvaN4gCj2olKz99TzFlNHNuI2kWGV9YtCxPxh6a1gAfgFxudXXoFS2JF8kTh4QMSwmwKsxmnse",
});
const builder = imageBuilder(client);
export const urlFor = (source: any) => builder.image(source);
