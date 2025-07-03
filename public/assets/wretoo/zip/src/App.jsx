import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Health from "./Pages/Health";
import Sports from "./Pages/Sports";
import Politics from "./Pages/Politics";
import Business from "./Pages/Business";
import Sceience from "./Pages/Science";
import World from "./Pages/World";
import Layout from "./components/shared/Layout/Layout";
import Arts from "./Pages/Arts";
import BlogDetails from "./components/shared/blog-details";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/health" element={<Health />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/business" element={<Business />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/science" element={<Sceience />} />
            <Route path="/world" element={<World />} />
            <Route path="/wretto-news/:id" element={<BlogDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
