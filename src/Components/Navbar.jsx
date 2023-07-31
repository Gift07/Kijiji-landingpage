import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="w-full relative">
      <nav className="w-full h-16 fixed bg-main bg-opacity-50 backdrop-blur-md z-30 text-teal-50 font-Lato">
        {/* large and medium screens */}
        <div className="w-full h-full hidden md:px-24 lg:px-40 lg:flex items-center justify-between">
          <div>
            <Link to={"/"} className="flex items-center gap-x-2">
              <img src="logo.png" className="h-10" />
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
                  to={"/company"}
                  className={({ isActive }) =>
                    `${isActive && "border-b-2 border-secondary"}`
                  }
                >
                  Company
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
              {/* <li>
              {" "}
              <NavLink
                to={"/documentation"}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-secondary"}`
                }
              >
                Documentation
              </NavLink>
            </li> */}
            </ul>
            <div>
              <button className="px-6 text-sm py-2 capitalize bg-teal-50 text-main font-semibold rounded-full">
                Download Kijiji
              </button>
            </div>
          </div>
        </div>
        {/* smaller screens */}
        <div className="w-full h-full lg:hidden px-8 flex items-center justify-between">
          <div>
            <Link to={"/"} className="flex items-center gap-x-2">
              <img src="logo.png" className="h-10" />
              <h1 className="text-lg font-bold">
                K<span className="text-yellow-400">i</span>jiji Pay
              </h1>
            </Link>
          </div>
          <div>
            <RxHamburgerMenu
              size={18}
              onClick={() => setMenuActive(!menuActive)}
            />
          </div>
        </div>
      </nav>
      {/* side menu comming from the top */}
      {menuActive && (
        <div className="h-screen w-screen bg-transparent z-50 fixed">
          <div className="w-full h-1/2 bg-main">
            <div className="h-16 w-full flex items-center justify-end px-6">
              <div className="border border-white text-white rounded-full p-1">
                <AiOutlineClose onClick={() => setMenuActive(!menuActive)} />
              </div>
            </div>
            <div>
              <ul className="flex flex-col items-center ">
                <li className="py-3">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      `${isActive && "border-b-2 border-secondary"}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-3">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      `${isActive && "border-b-2 border-secondary"}`
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="py-3">
                  {" "}
                  <NavLink
                    to={"/company"}
                    className={({ isActive }) =>
                      `${isActive && "border-b-2 border-secondary"}`
                    }
                  >
                    Company
                  </NavLink>
                </li>
                <li className="py-3">
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
              </ul>
            </div>
          </div>
          <div className="h-1/2 w-full bg-main bg-opacity-30 backdrop-blur-md" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
