import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./views/Blogs";
import { BlogCategory, BlogProfile, BlogSnug, Home } from "./views";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogSnug />} />
        <Route path="/profile/:profileID" element={<BlogProfile />} />
        {/* Tag Collection Route */}
        <Route path="/tag/:tagID" element={<BlogCategory />} />
        <Route path="/categories/categoryID" element={<BlogCategory />} />
        {/* Categories Collections */}
      </Routes>
    </>
  );
};

export default App;
