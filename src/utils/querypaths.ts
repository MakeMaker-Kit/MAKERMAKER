export const displaymoreQuery = `*[_type == "displaymore"]`;
export const homeheaderQuery = `*[_type == "homeheader"]`;
export const homebrandsQuery = `*[_type == "homebrand"]`;
export const hometestimonialsQuery = `*[_type == "hometestimonials"]`;
export const sociallinksQuery = `*[_type == "sociallinks"]`;
export const footeraboutQuery = `*[_type == "footerabout"]`;
export const footerMainQuery = `[_type == "footerabout"][0]`;
export const productDisplayQuery = `*[_type == "productDisplay"]{
    title,
    _id,
    desc,
    images,
    categoryTags
 }`;
export const HeaderQuery = `*[_type == "header"]`;
export const ContactQuery = `*[_type == "homeContact"]{
_id,
_createdAt,
username,
email,
phonenNumnber,
subject,
message
}`;
export const ContactInfoQuery = `*[_type == "contactInfo"]{
    _type,
    _id,
    _createdAt,
    addressInfo,
    companyInfo
}`;

export const BlogQuery = `*[_type == "post"]{
    _id,
slug,
body,
publishedAt,
mainImage,
title, 
author-> {
name,
slug,
"slugs": slug.current,
image,
bio,
occupation,
social,
},
"category": categories[0]->{_id, title, description, image, "slug": slug.current},
"tags": tags[]->{_id, name},
}`;
/**
 * categories[] {
  category-> {
    title,
   description,
   image,
   mainImage
: 
asset
: 
{_ref: 'image-cdbf30f20968bbb015ca8e8c4d72b2cc89083f52-850x400-webp', _type: 'reference'}
_type
: 
"image"
  },
 */
