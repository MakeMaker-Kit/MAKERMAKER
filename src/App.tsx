import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./views/Blogs";
import Home from "./views/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default App;
