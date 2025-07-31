import React from "react";
import { NavLink } from "react-router";
import profile_picture from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 items-center px-8 py-4 bg-white">
      {/* Left part (logo or placeholder) */}
      <div className="text-xl font-bold"></div>

      {/* Middle navigation links */}
      <div className="flex justify-center gap-10 text-accent">
        <NavLink className="link link-hover" to="/">
          Home
        </NavLink>
        <NavLink className="link link-hover" to="/about">
          About
        </NavLink>
        <NavLink className="link link-hover" to="/career">
          Career
        </NavLink>
      </div>

      {/* Right login section */}
      <div className="flex justify-end items-center gap-3">
        <img
          src={profile_picture}
          alt="User"
          className="w-8 h-8 rounded-full border border-black"
        />
        <button className="btn btn-primary px-6">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
