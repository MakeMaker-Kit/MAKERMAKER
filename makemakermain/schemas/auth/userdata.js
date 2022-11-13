export default {
  name: "userData",
  title: "User Data ",
  description: "This schema is for editing, but for storing logedin users",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email Address",
      type: "email",
      required: true,
    },
    {
      name: "password",
      title: "Users Password",
      // type: "crossDatasetReference",
      type: "string",
      required: true,
    },
  ],
};
