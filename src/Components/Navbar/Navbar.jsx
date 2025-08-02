import React, { use } from "react";
import { Link, NavLink } from "react-router";
import profile_picture from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const handleLogout = () => {
    console.log("user trying to logout");
    logoutUser()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="grid grid-cols-3 items-center px-8 py-4 bg-white">
      {/* Left part (logo or placeholder) */}
      <div className="text-xl font-bold">
        {user && <button className="btn btn-outline">{user.email}</button>}
      </div>

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
        {user ? (
          <Link onClick={handleLogout} className="btn btn-primary px-6">
            Logout
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
