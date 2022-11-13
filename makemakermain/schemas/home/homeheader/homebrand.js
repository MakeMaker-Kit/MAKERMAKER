export default {
  name: "homebrand",
  title: "Home Brand",
  type: "document",
  fields: [
    {
      name: "brandImage",
      title: "Brand Image",
      decription: "This is the image of the brand",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "title",
      title: "Brand Title",
      type: "text",
    },
  ],
};
