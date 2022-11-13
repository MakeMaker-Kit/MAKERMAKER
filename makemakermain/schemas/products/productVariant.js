export default {
  name: "productVariant",
  title: "Product Variant",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      descriptiona:
        "This is the description of the products schema,This includes the only description that the products needs",
      type: "text",
    },
    {
      name: "grams",
      title: "Weight in grams",
      type: "number",
    },
    {
      title: "SKU",
      name: "sku",
      type: "string",
    },
    {
      title: "Taxable",
      name: "taxable",
      type: "boolean",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    // {
    //   title: "Bar code",
    //   name: "barcode",
    //   type: "barcode",
    // },
  ],
};
