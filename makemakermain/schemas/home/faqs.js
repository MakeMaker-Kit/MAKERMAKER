export default {
  name: "homefaqs",
  title: "Home FAQS ",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      description: "Add a designed FAQ image",
      type: "image",
      options: { hotspot: string },
    },
  ],
};
