export default {
  name: "displaymore",
  title: "DisplayMore",
  type: "document",
  description: "This is the homeDisplay schema",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "desc",
      title: "Destruction",
      type: "text",
      required: true,
    },
    {
      name: "image",
      title: "Images",
      type: "image",
      requied: true,
      options: { hospot: true },
    },
    {
      name: "categoryTags",
      title: "Category tags",
      type: "array",
      of: [
        {
          type: "string",
          title: "Category",
        },
      ],
    },
  ],
};
