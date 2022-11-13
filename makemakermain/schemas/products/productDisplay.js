export default {
  name: "productDisplay",
  title: "Product Display",
  type: "document",
  description: "This is  a schema for the HomePage Contents",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "desc",
      title: "Decription",
      type: "text",
      required: true,
    },
    {
      name: "image",
      title: "Images",
      type: "image",
      required: true,
      options: {
        hotspot: true,
      },
    },

    {
      name: "coreTags",
      title: "Category tags",
      type: "array",
      of: [
        {
          type: "string",
          title: "Category",
        },
      ],
      options: {
        layout: "coreTags",
      },
    },
  ],
};
