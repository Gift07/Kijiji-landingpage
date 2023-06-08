import React from "react";
import Navbar from "../Components/Navbar";
import Welcome from "../Components/Home/Welcome";
import Vision from "../Components/Home/Vision";
import Pricing from "../Components/Home/Pricing";
import EcoSystem from "../Components/Home/EcoSystem";
import Footer from "../Components/Footer";
import Countries from "../Components/Home/Countries";
import Download from "../Components/Home/Download";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Welcome />
      <Vision />
      <Pricing />
      <Countries />
      <Download />
      <EcoSystem />
      <Footer />
    </div>
  );
};

export default Home;
