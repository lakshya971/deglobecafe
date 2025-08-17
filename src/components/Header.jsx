import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-24 mb-8 flex justify-center items-center w-full relative z-50">
      <div className="bg-[#161916] gap-32 text-white flex justify-around items-center px-8 py-4 w-[95vw]">
        {/* Logo/Brand */}
        <div className="flex justify-center items-center">
          <NavLink to="/" className="text-4xl font-semibold text-center">
            De Globe Cafe
          </NavLink>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex text-md gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer transition-all duration-300"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer transition-all duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer transition-all duration-300"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer transition-all duration-300"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer transition-all duration-300"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer transition-all duration-300"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/Menu"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer transition-all duration-300"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer transition-all duration-300"
              }
            >
              Menu
            </NavLink>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div>
          <button className="bg-[#ddbda1] font-semibold text-black px-20 py-2 hover:bg-orange-500 hover:text-white duration-300 transition-colors cursor-pointer">
            <a href="https://www.google.com/search?cs=1&output=search&kgmid=/g/11l4cck0nk&q=De+Globe+Cafe&shndl=30&shem=lcuae,uaasie&kgs=9d31530bf20705f3" className="cursor-pointer">
              Visit Us Today
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
