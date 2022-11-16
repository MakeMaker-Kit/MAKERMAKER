export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "occupation",
      title: "Occupation",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "social",
      title: " Social Media",
      description: "This is the Authors",
      type: "array",
      of: [
        {
          type: "string",
          title: "Add the authors social Media Link Here",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
