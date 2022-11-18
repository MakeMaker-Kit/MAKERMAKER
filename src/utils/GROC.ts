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
  const query = `*[_type == "post" && slug.current == '${categoryId}' ] | order(_updatedAt desc) {
_id,
slug,
body,
publishedAt,
mainImage,
author-> {
name,
slug,
image,
bio,
occupation,
social,
},
"categories": categories[]->{_id, title, image, description, "slug": slug.current},
"tags": tags[]->{_id, name},
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

export const blogsByAuthorSlugs: TGROCID = (authorSlug) => {
  return `*[_type == "author" && slug.current == '${authorSlug}']{
  _id, 
  name,
  bio,
  "authorImage": image.asset->url,
  image,
  occupation,
  slug,
  social,
  "posts": *[_type == "post" && author._ref in *[_type=="author" && name == name ]._id ]{
    title,
    "slug": slug.current,
body,
"categories": categories[]->{_id, description, title, image, "slug": slug.current},
"tags": tags[]->{_id, name},
"date": publishedAt,
mainImage,
author-> {
  name,
  },
  }
}`;
};

export const blogCategoryPosts: TGROCID = (categorySlug) => {
  return `*[_type == "post"  &&  '${categorySlug}' in categories[]->slug.current]{
  _id,
  title,
  description,
  mainImage,
  "authorImage": image.asset->url,
  author-> {
    name,
    slug,
    image,
    bio,
    occupation,
    social,
    },
    "categories": categories[]->{_id, title, image, description, "slug": slug.current},
"tags": tags[]->{_id, name},
}
`;
};
