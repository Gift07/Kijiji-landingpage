import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Blog from "./Screens/Blog";
import About from "./Screens/About";
import Documentation from "./Screens/Documentation";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen min-h-screen bg-teal-50 overflow-x-hidden font-poppins">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="documentation" element={<Documentation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
