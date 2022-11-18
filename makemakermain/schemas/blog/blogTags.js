export default {
  name: "tag",
  title: "Blog Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tag Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "This is optional for the development for development, make ure toclick on the generate button to generate a new slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
  ],
};
