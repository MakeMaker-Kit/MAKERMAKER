export default {
  name: "gallery",
  title: "Gallery Schema",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Gallery Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
    },
    {
      name: "gallerycontent",
      title: "Gallery Content",
      type: "array",
      of: [{ type: "reference", to: [{ type: "gallerycontent" }] }],
    },
  ],
};
