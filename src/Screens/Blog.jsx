import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Welcome from "../Components/Blog/Welcome";
import Blogs from "../Components/Blog/Blogs";

const Blog = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Welcome />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Blog;
