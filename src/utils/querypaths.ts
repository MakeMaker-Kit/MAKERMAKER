export const displaymoreQuery = `*[_type == "displaymore"]`;
export const homeheaderQuery = `*[_type == "homeheader"]`;
export const homebrandsQuery = `*[_type == "homebrand"]`;
export const hometestimonialsQuery = `*[_type == "hometestimonials"]`;
export const sociallinksQuery = `*[_type == "sociallinks"]`;
export const footeraboutQuery = `*[_type == "footerabout"]`;
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
