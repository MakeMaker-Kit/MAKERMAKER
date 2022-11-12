export default {
  name: "",
  title: "",
  type: "document",
  description: "This is the banner query ection",
  fields: [
    {
      name: "title",
      title: "Title of the Banner",
      type: "string",
    },
    {
      name: "dec",
      title: "Description",
      type: "text",
      descripotion: "This houldinclude the desciption of the Bannar",
      minLength: 30,
      maxLength: 40,
      required: true,
    },
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
