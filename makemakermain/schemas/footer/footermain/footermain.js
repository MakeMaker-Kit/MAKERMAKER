export default {
  name: "footermain",
  title: "Footer Main",
  type: "document",
  description: "This is the main Section of the footer",
  fields: [
    {
      name: "name",
      title: "Footer Main",
      type: "text",
    },
    {
      name: "desc",
      title: "Description  of the Footer Main",
      type: "blockContent",
    },
    {
      name: "socials",
      title: "SOCIALS",
      type: "array",
      of: [{ type: "reference", to: [{ type: "sociallinks" }] }],
    },
  ],
};
