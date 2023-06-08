import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-16 fixed bg-main bg-opacity-50 backdrop-blur-md z-30 text-teal-50">
      <div className="w-full h-full px-80 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <h1 className="text-lg font-bold">
              K<span className="text-yellow-400">i</span>jiji Pay
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-x-6">
          <ul className="flex items-center gap-x-4">
            <li className="py-2">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-secondary"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-secondary"}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-secondary"}`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={"/documentation"}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-secondary"}`
                }
              >
                Documentation
              </NavLink>
            </li>
          </ul>
          <div>
            <button className="px-6 text-sm py-3 uppercase bg-teal-50 text-main font-semibold rounded-full">
              Download Kijiji
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
