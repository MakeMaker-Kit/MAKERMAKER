export default {
  name: "homeContact",
  title: "Home Contact Form",
  type: "document",
  fields: [
    {
      name: "username",
      title: "User NAME",
      type: "text",
    },
    {
      name: "email",
      title: "Users Email Address",
      type: "email",
      required: true,
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      required: true,
    },
    {
      name: "subject",
      title: "Subject of the Comment",
      type: "string",
      required: true,
    },
    {
      name: "message",
      title: "Users Message",
      type: "text",
    },
  ],
};
