export default {
  name: "blogdetail",
  title: "Blog Details",
  description:
    "Add Every other important information you will need for your blog ",
  type: "object",
  fields: [
    {
      name: "blogemailcontact",
      title: "Blog News Letter Email",
      description: "This is where all the newlettter s will be populated ",
      type: "array",
      of: { type: "string", title: "Users Email" },
    },
  ],
};
