import { uuid } from "@sanity/uuid";

export default {
  name: "header",
  title: "Header",
  type: "document",
  id: uuid(),
  fields: [
    {
      name: "title",
      title: "This is the Header Text",
      type: "text",
    },
    {
      name: "desc",
      title: "This is the header Description",
      type: "text",
    },
    {
      name: "image",
      title: "Header Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
