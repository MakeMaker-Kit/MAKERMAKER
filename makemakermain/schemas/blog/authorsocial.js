export default {
  name: "authorsocial",
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
