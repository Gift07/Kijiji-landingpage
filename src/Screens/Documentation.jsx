import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Welcome from "../Components/Documentation/Welcome";

const Documentation = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Welcome />
      Documentation
      <Footer />
    </div>
  );
};

export default Documentation;
