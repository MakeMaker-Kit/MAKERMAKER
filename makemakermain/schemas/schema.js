// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import homeheader from "./home/homeheader/homeheader";
import homeDisplay from "./home/homeheader/homeDisplay";
import homebrand from "./home/homeheader/homebrand";
import hometestimonials from "./home/homeheader/hometestimonials";
import sociallinks from "./sociallinks/sociallinks";
import footerabout from "./footer/footerabout/footerabout";
import footermain from "./footer/footermain/footermain";
import userdata from "./auth/userdata";
import products from "./products/products";
import productVariant from "./products/productVariant";
import blockContents from "./products/blockContents";
import banner from "./products/banner";
import productDisplay from "./products/productDisplay";
import contactinfo from "./home/contact/contactinfo";
import contactForm from "./home/contact/contactForm";
import blogmore from "./blog/blogmore";
import blogTags from "./blog/blogTags";
import blogreview from "./blog/blogreview";
import info from "./home/contact/info";
import checkoutdata from "./checkout/checkoutdata";
import gallery from "./gallery/gallery";
import gallerycontent from "./gallery/gallerycontent";
import faqs from "./home/faqs";
import authorsocial from "./blog/authorsocial";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    homeheader,
    homeDisplay,
    homebrand,
    hometestimonials,
    sociallinks,
    footerabout,
    footermain,
    userdata,
    products,
    productVariant,
    blockContents,
    banner,
    productDisplay,
    contactinfo,
    contactForm,
    blogmore,
    blogTags,
    info,
    blogreview,
    checkoutdata,
    gallery,
    gallerycontent,
    faqs,
    authorsocial,
  ]),
});
