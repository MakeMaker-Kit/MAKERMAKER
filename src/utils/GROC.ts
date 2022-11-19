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
description,
author-> {
name,
slug,
image,
bio,
occupation,
social,
},
"categories": categories[]->{_id, title, image, description, "slug": slug.current},
"tags": tags[]->{_id, name, "slug": slug.current},
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
  "posts": *[_type == "post" && author._ref in *[_type=="author" && slug.current == '${authorSlug}' ]._id]{
    title,
    "slug": slug.current,
    description,
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
  "posts": *[_type == "post" &&  categories[0]._ref in *[_type=="category" && slug.current == '${categorySlug}' ]._id ]{
    title,
    description,
    "slug": slug.current,
    body,
    "categories": categories[]->{_id, description, title, image, "slug": slug.current},
    "tags": tags[]->{_id, name},
    "date": publishedAt,
    mainImage,
    author-> {
      name,
      },
    },
  }
`;
};

export const blogTagPosts: TGROCID = (tagSlug) => {
  //*[_type == "post"  &&  'programming' in tags[]->slug.current]
  return `*[_type == "post"  &&  '${tagSlug}' in tags[]->slug.current][0]{
    author-> {
      name,
      slug,
      image,
      bio,
      occupation,
      social,
    },
    "posts": *[_type == "post" &&  tags[0]._ref in *[_type=="tag" && slug.current == '${tagSlug}' ]._id ]{
      title,
      "slug": slug.current,
      body,
      deescription,
      "categories": categories[]->{_id, description, title, image, "slug": slug.current},
      "tags": tags[]->{_id, name, "slug": slug.current},
      "date": publishedAt,
      mainImage,
      author-> {
        name,
        },
      },
  }
  `;
};

export const homeBlogQuery = `*[_type == "post"][0..6]{
  _id,
  slug,
  body,
  publishedAt,
  mainImage,
  description,
  title, 
  author-> {
  name,
  slug,
  image,
  bio,
  occupation,
  social,
  },
  "categories": categories[0]->{_id, title, description, image,"slug": slug.current},
  "tags": tags[]->{_id, name, "slug": slug.current},
}`;

export const contactInfoQuery = `*[_type == "contactInfo"][0]{
  addressinfo,
  companyinfo[0..3]->{title, details},
}`;

export const blogRelatedPosts = <T, Y>(categoryId: T, blogId: Y): string => {
  return `*[_type == "post" && _id != '${categoryId} ' &&   categories[1]->slug.current ==  '${blogId}' ][0..4]{
    _id,
    title,
    "slug": slug.current,
   
  } `;
};
export const blogRelatedPost = (mainBlogId: {
  slug: { current?: string };
  _id?: string;
}) => {
  return `*[_type == "post" && slug.current == '${mainBlogId?.slug.current}'][0] {
    title,
    "categories": categories[0]->{_id, title, description, image,"slug": slug.current},
    "related": *[_type == "post" && _id != '${mainBlogId?._id}' && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
       title,
       "slug": slug.current,
      body, 
      mainImage,
      description,  
      "categories": categories[0]->{_id, title, description, image,"slug": slug.current},
  "tags": tags[0]->{_id, name, "slug": slug.current},
  author-> {name, "slug": slug.current},
  publishedAt,
     }
  }`;
};
// *[_type == "post" && _id != "cfbfe0ea-4e98-4efa-a565-ebb923d7d7ad"  &&    categories[1]->slug.current == "design"][0..4]
/**
 * 
 * *[_type == "post" && slug.current == "enhancing-productivity"][0] {
  title,
  categories[]->,
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
     title,
     slug,
    body, 
    description,
    
   }
}
 */
