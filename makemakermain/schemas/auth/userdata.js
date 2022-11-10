export default {
  name: "userData",
  title: "User Data ",
  description: "This schema is for editing, but for storing logedin users",
  type: "document",
  field: [
    {
      name: "email",
      title: "Email Address",
      type: "email",
    },
    {
      name: "password",
      title: "Users Password",
      type: "password",
      required: true,
    },
  ],
};
