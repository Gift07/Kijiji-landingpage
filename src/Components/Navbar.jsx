import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-transparent fixed z-30 text-teal-50 overflow-x-hidden">
      <div className="w-full h-full px-80 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">
            K<span className="text-yellow-400">i</span>jiji Pay
          </h1>
        </div>
        <div className="flex items-center gap-x-5">
          <ul className="flex items-center gap-x-2">
            <li>Our Vision</li>
            <li>About Us</li>
            <li>Our Team</li>
          </ul>
          <div>
            <button className="px-5 text-sm py-2 uppercase bg-teal-50 text-main font-semibold rounded-2xl">
              Download Kijiji
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
