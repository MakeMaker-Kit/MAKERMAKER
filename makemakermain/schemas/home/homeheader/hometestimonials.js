export default {
  name: "hometestimonials",
  title: "Testimonials",
  description: "",
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
      description: "",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "",
      type: "text",
    },
    {
      name: "company",
      title: "Company",
      description: "",
      type: "string",
    },
  ],
};
