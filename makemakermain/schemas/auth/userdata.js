export default {
  name: "userData",
  title: "User Data ",
  description: "This schema is for editing, but for storing logedin users",
  type: "document",
  field: [
    {
      name: "fullName",
      title: "Full NAME",
      type: "string",
    },
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
    {
      name: "comfirmPassword",
      title: "Comfirmed Password",
      type: "text",
      required: true,
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "number",
      required: true,
    },
  ],
};
