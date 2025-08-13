import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-23 flex justify-center items-center w-full">
      <div className="bg-[#161916] text-white flex justify-around items-center px-8 py-4 w-[95vw]">
        {/* Logo/Brand */}
        <div className="flex justify-center items-center">
          <NavLink to="/" className="text-4xl font-semibold text-center">De Globe Cafe</NavLink>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-16">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 border-[#ddbda1] pb-1"
                  : "hover:text-[#ddbda1]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 border-[#ddbda1] pb-1"
                  : "hover:text-[#ddbda1]"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 border-[#ddbda1] pb-1"
                  : "hover:text-[#ddbda1]"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/Menu"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 border-[#ddbda1] pb-1"
                  : "hover:text-[#ddbda1]"
              }
            >
              Menu
            </NavLink>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div>
          <button className="bg-[#ddbda1] font-semibold text-black px-20 py-2 hover:bg-orange-500 hover:text-white duration-300 transition-colors">
            Visit us today
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
