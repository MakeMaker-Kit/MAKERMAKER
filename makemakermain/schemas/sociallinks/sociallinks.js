export default {
  type: "document",
  name: "sociallinks",
  fieldsets: [
    {
      name: "social",
      title: "Social media handles",
      description:
        "Assign the links of the social media you are trying to add, contact the developer for any other adjustments",
    },
  ],
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
      description: "Not imaortant,it just acts as a headline",
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
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
    },
    // {
    //   name: "socialName",
    //   title: "Social Name",
    //   type: "array",
    //   of: [{ type: "string", title: "Social Media Link" , description: "Add the link address "}],
    // },
  ],
};
