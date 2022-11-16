import { TGROCID } from "./utils.types";

export const productDisplay = () => {
  return `*[_type == "productDsiplay"] {
    title,
    desc,
    images,
    categoryTags
 }`;
};

export const getBlogDetail: TGROCID = (categoryId) => {
  const query = `*[_type == "post" && slug.current == ${categoryId}] | order(_updatedAt desc) {
_id,
slug,
body,
publishedAt,
mainImage,
author-> {
name,
slug,
image,
bio
},
categories[] {
  category-> {
    title,
   description
  }
}
  }`;
  return query;
};

export const getAllPosts = () => {
  return `*[_type == "post"] {
    title,
    desc,
    images,
    categoryTags

  }`;
};

export const blogCategoryQuery = `*[_type == "category"]{
  _id,
  title,
  description,
  image
}`;
