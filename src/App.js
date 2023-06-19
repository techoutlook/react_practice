import React from "react";
import { Route, Routes } from "react-router-dom";

import TopNavbar from "./components/Navbar/TopNavbar";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Blogs from "./components/Pages/Blogs/Blogs";
import Service from "./components/Pages/Service/Service";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
