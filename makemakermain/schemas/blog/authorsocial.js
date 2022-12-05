export default {
  name: "authorsocial",
  fieldsets: [
    {
      name: "social",
      title: "Social media handles",
      description:
        "Assign the links of the social media you are trying to add, contact the developer for any other adjustments",
    },
  ],
  title: "Author social",
  type: "document",
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
  ],
};
