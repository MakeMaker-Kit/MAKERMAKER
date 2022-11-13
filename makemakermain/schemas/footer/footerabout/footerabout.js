export default {
  name: "footerabout",
  title: "Footer about",
  description: "This is the company's about ection of the footer ",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      description: "Thisis the company's Logo",
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
