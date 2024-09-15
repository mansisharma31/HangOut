import React from 'react';

const Packages = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Package Offers</h2>
      <div className="flex">
        {/* Sidebar */}
        {/* <div className="w-1/4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-4">Hot Deals</h3>
            <ul>
              <li className="py-2">Asia</li>
              <li className="py-2">Europe</li>
              <li className="py-2">Middle East</li>
            </ul>
          </div>
        </div> */}

        {/* Packages Cards */}
        <div className="w-3/4 flex justify-around flex-wrap">
          {/* Card 1 */}
          <div className="w-[250px] bg-white rounded-lg shadow-lg p-4 m-4">
            <img src="newyork.jpg" alt="New York" className="w-full rounded-lg h-[150px] object-cover" />
            <div className="mt-4">
              <h3 className="font-bold text-xl">New York City</h3>
              <p className="text-gray-500">U.S City</p>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md">Book Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[250px] bg-white rounded-lg shadow-lg p-4 m-4">
            <img src="bangladesh.jpg" alt="Bangladesh" className="w-full rounded-lg h-[150px] object-cover" />
            <div className="mt-4">
              <h3 className="font-bold text-xl">Bangladesh</h3>
              <p className="text-gray-500">Cox Bazar</p>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md">Book Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[250px] bg-white rounded-lg shadow-lg p-4 m-4">
            <img src="dubai.jpg" alt="Dubai" className="w-full rounded-lg h-[150px] object-cover" />
            <div className="mt-4">
              <h3 className="font-bold text-xl">Dubai</h3>
              <p className="text-gray-500">UAE</p>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md">Book Now</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-[250px] bg-white rounded-lg shadow-lg p-4 m-4">
            <img src="mountains.jpg" alt="Mountains" className="w-full rounded-lg h-[150px] object-cover" />
            <div className="mt-4">
              <h3 className="font-bold text-xl">Mountains</h3>
              <p className="text-gray-500">Nepal</p>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
