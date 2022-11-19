export default {
  name: "contactInfo",
  title: "Contact Information",
  type: "document",
  fields: [
    {
      name: "addressinfo",
      title: "Addres Information",
      type: "object",
      fields: [
        {
          name: "address",
          title: "Address",
          type: "string",
        },
        {
          name: "state",
          title: "State ",
          description: "Add a state  prefix at the end ",
          type: "string",
        },
      ],
    },
    {
      name: "companyinfo",
      title: "Company's Information",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "info",
            },
          ],
        },
      ],
    },
  ],
};
