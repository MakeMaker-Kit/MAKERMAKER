export default {
  name: "product",
  title: "Products  ",
  desciption: "This isn the Ecommerce or Products Query ",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      description: "",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Default Variant",
      name: "DefaultProductVariant",
      type: "productVariant",
    },
    {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    //
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Specific Category",
      name: "specificCategory",
      type: "array",
      of: [
        {
          type: "string",
          name: "category",
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    // /
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "DefaultProductVariant.images[0]",
    },
  },
};
