export default {
  name: "gallery",
  title: "Gallery Schema",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Gallery Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
    },
    {
      name: "gallerycontent",
      title: "Gallery Content",
      type: "array",
      of: [{ type: "reference", to: [{ type: "gallerycontent" }] }],
    },
  ],

  // preview
  preview: {
    select: {
      title: "title",
      gallerycontent: "gallerycontent.name",
    },
    prepare(selection) {
      const { gallerycontent } = selection;
      return Object.assign({}, selection, {
        subtitle: gallerycontent && `bg ${gallerycontent}`,
      });
    },
  },
};
