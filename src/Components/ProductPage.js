import React from "react";

const ProductPage = () => {
  return (
    <div className="bg-gray-50 p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Café Pluck</h1>
        <button className="bg-gray-100 p-2 rounded-lg text-sm">Save</button>
      </div>
      <p className="text-sm text-gray-500 mb-4">#42 of 12,903 Restaurants in New Delhi | ₹₹ - ₹₹₹, Cafe, Vegetarian Friendly, Vegan Options</p>
      <div className="flex items-center space-x-4 mb-4">
        <span>404 reviews</span>
        <span>⭐ #42 in New Delhi</span>
        <span>💬 Write a Review</span>
        <span>🕒 Open Now 9:00 am - 10:00 pm</span>
      </div>

      {/* Main Image Section */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Left side - Main Image */}
        <div className="col-span-2">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8c/31/de/cafe-pluck.jpg?w=1200&h=-1&s=1" alt="Cafe Main" className="rounded-lg w-full h-full object-cover" />
        </div>

        {/* Right side - Smaller Images */}
        <div className="flex flex-col space-y-2">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8c/31/81/cafe-pluck.jpg?w=1200&h=-1&s=1" alt="Small Image 1" className="rounded-lg object-cover h-1/2" />
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/99/52/b8/cafe-pluck.jpg?w=1200&h=-1&s=1" alt="Small Image 2" className="rounded-lg object-cover h-1/2" />
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">See all (262)</button>
      </footer>
      <br></br>

      {/* New Section for Ratings, Details, and Location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ratings and Reviews */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Ratings and Reviews</h2>
          <div className="flex items-center mb-2">
            <span className="text-3xl font-bold">5.0</span>
            <span className="text-green-500 ml-2">★★★★★</span>
            <span className="ml-2 text-gray-500">(404 reviews)</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">#42 of 12,903 Restaurants in New Delhi</p>
          <p className="text-sm text-gray-500">🌟 Travellers' Choice 2023</p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Ratings</h3>
            <ul className="text-sm text-gray-600 space-y-2 mt-2">
              <li>🍽 Food <span className="text-green-500">★★★★★</span></li>
              <li>💁 Service <span className="text-green-500">★★★★★</span></li>
              <li>💸 Value <span className="text-green-500">★★★★☆</span></li>
              <li>🎉 Atmosphere <span className="text-green-500">★★★★★</span></li>
            </ul>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p className="text-sm text-gray-500 mb-2">PRICE RANGE</p>
          <p className="text-sm text-black">₹450.00 - ₹2,997.00</p>
          <p className="text-sm text-gray-500 mt-4">CUISINES</p>
          <p className="text-sm text-black">Cafe</p>
          <p className="text-sm text-gray-500 mt-4">SPECIAL DIETS</p>
          <p className="text-sm text-black">Vegetarian Friendly, Vegan Options, Gluten Free</p>
          <a href="#" className="text-blue-500 mt-4 block">View all details</a>
        </div>

        {/* Location and Contact */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Location and Contact</h2>
          <div className="mb-2">
            <img src="https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=313x136&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=en_IN&center=28.554182,77.123672&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|28.554182,77.123672&signature=FDNBsZNcy1EaNm-MqiBybk2hwYA=" alt="Map" className="w-full h-32 rounded-lg object-cover" />
          </div>
          <p className="text-sm text-gray-500 mb-2">📍 Asset No. 2 Aerocity Hospitality District, New Delhi 110037</p>
          <div className="flex items-center space-x-2">
            <a href="#" className="text-blue-500">🌐 Website</a>
            <a href="#" className="text-blue-500">📧 Email</a>
          </div>
          <p className="text-sm text-gray-500 mt-4">📞 +91 98716 66600</p>
          <a href="#" className="text-blue-500 mt-4 block">Improve this listing</a>
        </div>
      </div>

      {/* Vegan Survey Section */}
      <div className="bg-gray-100 p-6 mt-10 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Can a vegan person get a good meal at this restaurant?</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="radio" name="veganSurvey" value="Yes" className="mr-2" />
            Yes
          </label>
          <label className="flex items-center">
            <input type="radio" name="veganSurvey" value="No" className="mr-2" />
            No
          </label>
          <label className="flex items-center">
            <input type="radio" name="veganSurvey" value="Unsure" className="mr-2" />
            Unsure
          </label>
        </div>
      </div>

      {/* Detailed Information Section */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-700 mb-2">About</h3>
            <p className="text-sm text-gray-600">Café Pluck is a contemporary and stylish grab and go delicatessen located at the lower ground level of Pullman New Delhi Aerocity, offering an extensive range of tea, coffee and other beverages along with freshly baked treats and gourmet retail goods. It's the perfect new spot to grab a cup of freshly brewed coffee even at midnight. Café Pluck is a favorite meeting place in the city because of its elegant urban setting, free Internet access, and convenient location next to the Airport. Café Pluck also has its own in-house coffee roaster. Another highlight of the café is the Maître de Café or the Barista who can teach the art of coffee making to guests.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Price Range</h3>
              <p className="text-sm text-gray-600">₹450.00 - ₹2,997.00</p>

              <h3 className="font-bold text-gray-700 mt-4 mb-2">Cuisines</h3>
              <p className="text-sm text-gray-600">Cafe</p>

              <h3 className="font-bold text-gray-700 mt-4 mb-2">Special Diets</h3>
              <p className="text-sm text-gray-600">Vegetarian Friendly, Vegan Options, Gluten Free Options</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">Meals</h3>
              <p className="text-sm text-gray-600">Breakfast, Lunch, Dinner, Drinks</p>

              <h3 className="font-bold text-gray-700 mt-4 mb-2">Features</h3>
              <p className="text-sm text-gray-600">Takeout, Reservations, Highchairs Available, Serves Alcohol, Accepts Visa, Digital Payments, Table Service</p>
            </div>
          </div>
          </div>
          </div>
      
    </div>
  );
};


export default ProductPage;