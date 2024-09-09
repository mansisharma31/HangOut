import React from 'react';
import logo from "../Assets/Images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="HangOut Logo" className="h-10 w-20" />
        {/* <span className="text-xl font-bold ml-2">HangOut</span> */}
      </div>
      <ul className="flex space-x-8">
        <li>Home</li>
        <li>Book Now</li>
        <li>Packages</li>
        <li>Popular Places</li>
      </ul>
      <button className="bg-gray-200 py-2 px-4 rounded-full">Join Us</button>
    </nav>
  );
};

export default Navbar;
