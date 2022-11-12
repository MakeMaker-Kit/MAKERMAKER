export default {
  name: "displaymore",
  title: "DisplayMore",
  type: "document",
  description: "",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
      description: "",
    },
    {
      name: "desc",
      title: "Destruction",
      type: "text",
      required: true,
      description: "",
    },
    {
      name: "image",
      title: "Images",
      type: "image",
      requied: true,
      description: "",
      options: { hospot: true },
    },
    {
      name: "categoryTags",
      title: "Category tags",
      type: "array",
      of: {
        type: "string",
      },
    },
  ],
};
