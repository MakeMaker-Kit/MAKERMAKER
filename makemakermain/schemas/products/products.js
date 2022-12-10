export default {
  name: "product",
  title: "Products  ",
  desciption: "This is  the Ecommerce or Products Query ",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Thid is the title of the Schema",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "price",
      title: "Standard Price (NAIRA)",
      type: "string",
    },
    {
      name: "updatedprice",
      title: "Updated Price (NAIRA)",
      type: "string",
    },
    {
      title: "Default Variant ",
      name: "DefaultProductVariant",
      type: "productVariant",
    },
    {
      name: "quantity",
      title: "Quantity",
      description: "This Query is not optional ",
      value: 0,
      type: "number",
      required: true,
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
    {
      name: "stockItems",
      title: "Stock Items <OPTIONAL>",
      description:
        "This is the number of product remaining for each product in the Schema",
      type: "number",
      required: true,
    },
    {
      name: "discount",
      title: "  Discount",
      description:
        "This query should in percentage and it is used to  shoul the percentage in discount given to a product",
      type: "string",
      required: true,
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
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "localeBlockContent",
    // },
  ],
  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "DefaultProductVariant.images[0]",
    },
  },
};
