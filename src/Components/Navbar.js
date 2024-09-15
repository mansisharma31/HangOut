import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-black text-xl font-bold flex items-center">
              <svg className="h-6 w-6 text-black mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.95a7 7 0 1010 0l.87.87a8.5 8.5 0 11-11.73 0l.86-.87z" clipRule="evenodd" />
                <path d="M10 2.5a.75.75 0 01.75.75v6.45l2.5 2.5a.75.75 0 01-1.06 1.06l-3-3A.75.75 0 019 9.25V3.25A.75.75 0 0110 2.5z" />
              </svg>
              HangOut
            </a>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/trending" className="text-gray-700 hover:text-black">
              Events
            </a>
            <a href="/events" className="text-gray-700 hover:text-black">
              Activities
            </a>
            <a href="/dining" className="text-gray-700 hover:text-black">
              Dining
            </a>
            <a href="/activities" className="text-gray-700 hover:text-black">
              Attractions
            </a>
            <a href="/attractions" className="text-gray-700 hover:text-black">
              Trending
            </a>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="bg-black text-white px-4 py-2 rounded-md">
              Join us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import React from 'react';
// import logo from "../Assets/Images/logo.jpg";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow-md">
//       <div className="flex items-center">
//         <img src={logo} alt="HangOut Logo" className="h-10 w-20" />
//         {/* <span className="text-xl font-bold ml-2">HangOut</span> */}
//       </div>
//       <ul className="flex space-x-8">
//         <li>Home</li>
//         <li>Book Now</li>
//         <li>Packages</li>
//         <li>Popular Places</li>
//       </ul>
//       <button className="bg-gray-200 py-2 px-4 rounded-full">Join Us</button>
//     </nav>
//   );
// };

// export default Navbar;
