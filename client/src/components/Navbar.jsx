import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const {user,setUser}=useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center py-4 px-4 bg-gray-50">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-28 sm:w-32 lg:w-40"
        />
      </Link>

      {/* Right section */}
      <div>
        {user ? (
          <div className="flex gap-2 sm:gap-5 items-center">
            {/* Credit info */}
            <button onClick={()=>navigate('/buy')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 rounded-full hover:scale-105 transition-all duration-300">
              <img
                src={assets.credit_star}
                alt="credit"
                className="w-5 h-5 rounded-full"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credit Left: 50
              </p>
            </button>

            {/* Greeting */}
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, Rashid Ashraf</p>

            {/* Profile dropdown */}
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-10 h-10 rounded-full drop-shadow cursor-pointer"
              />
              <div className="absolute hidden group-hover:block top-full mt-2 right-0 z-10 bg-white text-black rounded-md shadow-lg w-40">
                <ul className="list-none m-0 p-2">
                  <li
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    // logout example
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 sm:gap-5 items-center">
            <p
              className="text-gray-700 font-medium hover:text-blue-500 cursor-pointer transition"
              onClick={() => navigate("/buy")}
            >
              Pricing
            </p>
            <button className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:bg-zinc-900 transition">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
