import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Navigate to the hidden "<span className="glow-green">Register</span>" page
  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <header className="fixed w-full z-50">
      <style>
        {`
          .glow-green {
            text-shadow: 0 0 8px #00ff00;
          }
        `}
      </style>
      <div
        className="container mx-auto px-4 backdrop-blur-lg bg-gray-800 bg-opacity-80 
                   shadow-lg transition-colors duration-500"
      >
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between p-2">
          {/* Logo */}
          <h1
            onClick={() => navigate("/")}
            className="text-white font-extrabold text-xl cursor-pointer"
          >
            <span className="text-yellow-400">TECHNOVA</span><span className="text-red-500">2k25</span>
          </h1>

          {/* Register Button - Visible on All Devices */}
          <button
            onClick={handleRegisterClick}
            className="relative pb-1 px-4 font-semibold text-white transition-colors duration-300 
                       before:content-[''] before:absolute before:bottom-0 before:left-0 
                       before:w-0 before:h-[2px] before:bg-green-500 before:transition-all 
                       before:duration-300 hover:before:w-full"
          >
            REGISTER!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
