export default {
  name: "hometestimonials",
  title: "Testimonials",
  description: "This i the Testimonials section of the app",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Testimonial Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Testimonial Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imageObject",
      title: "ImageOptions",
      description: "Not Optional  but Addditional ",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Image tItle",
          type: "string",
        },
      ],
    },
  ],
};
