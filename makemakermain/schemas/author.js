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
          styles: [
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
            { title: "Paragraph", value: "p" },
          ],
          lists: [],
        },
      ],
    },
    {
      name: "social",
      title: " Social Media",
      description: "This is the Authors Social Media ",
      type: "array",
      of: [
        {
          type: "reference",
          title:
            "Add the authors social Media Link Here (Facebook, Twitter, LinkedIn, Instagram)",
          to: [{ type: "authorsocial" }],
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
