import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./views/Blogs";
import Home from "./views/Home";
import BlogSnug from "./views/BlogSnug";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Blogs />} />
        <Route path="/:id" element={<BlogSnug />} />
      </Routes>
    </>
  );
};

export default App;
