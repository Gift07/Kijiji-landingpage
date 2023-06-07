import React from "react";
import Navbar from "../Components/Navbar";
import Welcome from "../Components/Welcome";
import Vision from "../Components/Vision";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Welcome />
      <Vision />
      Home
    </div>
  );
};

export default Home;
