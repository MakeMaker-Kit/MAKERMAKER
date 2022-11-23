export default {
  type: "document",
  name: "sociallinks",
  fieldsets: [{ name: "social", title: "Social media handles" }],
  options: {
    collapsible: true,
    collapsed: false,
    columns: 3,
  },
  title: "Social Links",
  description: "This is the for Social Media Links",
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
    {
      name: "socialName",
      title: "Social Name",
      type: "array",
      of: [{ type: "string", title: "SocialMediaLink" }],
    },
  ],
};
