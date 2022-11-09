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
      type: "textarea",
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
  ],
};
