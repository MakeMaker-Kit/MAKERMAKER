export default {
  name: "gallerycontent",
  title: "Gallery Content",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Gallery Image",
      type: "image",
      options: [
        {
          hotspot: true,
        },
      ],
    },
    {
      name: "subtitle",
      title: "Gallery Subtitle",
      type: "string",
    },
    {
      name: "title",
      title: "Gallery Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Gallery Description",
      type: "text",
    },
  ],
};
