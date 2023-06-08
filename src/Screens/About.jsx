import React from "react";
import Navbar from "../Components/Navbar";
import Welcome from "../Components/About/Welcome";
import Footer from "../Components/Footer";
import Services from "../Components/About/Services";
import Choose from "../Components/About/Choose";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Welcome />
      <Services />
      <Choose />
      <Footer />
    </div>
  );
};

export default About;
