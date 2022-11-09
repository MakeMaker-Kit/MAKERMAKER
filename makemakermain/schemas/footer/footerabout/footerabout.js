export default {
  name: "footerabout",
  title: "Footer about",
  description: "",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      description: "",
      required: true,
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      description: "This is the description of the company ",
      required: true,
    },
  ],
};
