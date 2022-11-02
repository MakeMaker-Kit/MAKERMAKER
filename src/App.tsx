import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./views/Blogs";
import { BlogProfile, BlogSnug, Home } from "./views";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Blogs />} />
        <Route path="/:id" element={<BlogSnug />} />
        <Route path="/profile/:profileID " element={<BlogProfile />} />
      </Routes>
    </>
  );
};

export default App;
