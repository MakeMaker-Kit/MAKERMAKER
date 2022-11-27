import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./views/Blogs";
import ShopDetailLayout from "./components/shop/shopdetail/ShopDetailLayout";
import {
  BlogCategory,
  BlogProfile,
  BlogSnug,
  BlogTag,
  Home,
  Shop,
  ShopDetail,
} from "./views";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogSnug />} />
        <Route path="/profile/:profileID" element={<BlogProfile />} />
        {/* Tag Collection Route */}
        <Route path="/tag/:tagID" element={<BlogTag />} />
        <Route path="/category/:categoryID" element={<BlogCategory />} />
        {/* Categories Collections */}
        {/* Shop / Ecommerce Routes */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories/:id" element={""} />
        <Route path="/shop/:id" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
