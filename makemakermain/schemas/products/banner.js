export default {
  name: "banner",
  title: "Banner",
  type: "document",
  description: "This is the banner query section",
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
