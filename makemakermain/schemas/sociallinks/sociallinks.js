export default {
  type: "object",
  name: "person",
  fieldsets: [{ name: "social", title: "Social media handles" }],
  options: {
    collapsible: true,
    collapsed: false,
    columns: 3,
  },
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string",
      fieldset: "social",
    },
  ],
};
