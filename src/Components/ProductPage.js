import React, { useState } from "react";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [reviews, setReviews] = useState([
    { name: "John Doe", text: "Amazing food and great service!", rating: 5 },
    { name: "Jane Smith", text: "A bit expensive, but worth it for the experience.", rating: 4 },
  ]);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 1 });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews((prev) => [...prev, newReview]);
      setNewReview({ name: "", text: "", rating: 1 });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-6xl font-extrabold text-gray-800 animate-fade-in">
            Café Pluck
          </h1>
          <button className="bg-teal-600 text-white px-5 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            Save
          </button>
        </div>
        <p className="text-md text-gray-600 mb-4">
          #42 of 12,903 Restaurants in New Delhi | ₹₹ - ₹₹₹, Cafe, Vegetarian Friendly, Vegan Options
        </p>
        <div className="flex items-center space-x-4 mb-6 text-sm">
          <span className="text-gray-600">404 reviews</span>
          <span className="text-gold-500 font-semibold">⭐ #42 in New Delhi</span>
          <span className="text-teal-600 cursor-pointer hover:underline">💬 Write a Review</span>
          <span className="text-green-600 font-medium">🕒 Open Now 9:00 am - 10:00 pm</span>
        </div>

        {/* Main Image with Enhanced Effects */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8c/31/de/cafe-pluck.jpg?w=1200&h=-1&s=1"
              alt="Cafe Main"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">Experience the Best Café in Delhi</h2>
              <p className="text-sm">A perfect blend of ambiance and flavors</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-110">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8c/31/81/cafe-pluck.jpg?w=1200&h=-1&s=1"
                alt="Small Image 1"
                className="object-cover h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-2 left-2 text-white">
                <p className="text-sm">Stylish Interiors</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-110">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/99/52/b8/cafe-pluck.jpg?w=1200&h=-1&s=1"
                alt="Small Image 2"
                className="object-cover h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-2 left-2 text-white">
                <p className="text-sm">Delicious Treats</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
        {/* Sticky Sidebar for Quick Info */}
        <aside className="hidden lg:block lg:sticky lg:top-20 bg-white p-6 rounded-lg shadow-xl h-fit">
          <h2 className="text-xl font-semibold mb-4 text-teal-600">Quick Info</h2>
          <p className="text-sm text-gray-500 mb-2">PRICE RANGE</p>
          <p className="text-sm text-black">₹450.00 - ₹2,997.00</p>
          <p className="text-sm text-gray-500 mt-4">CUISINES</p>
          <p className="text-sm text-black">Cafe</p>
          <p className="text-sm text-gray-500 mt-4">SPECIAL DIETS</p>
          <p className="text-sm text-black">Vegetarian Friendly, Vegan Options, Gluten Free</p>
          <p className="text-sm text-gray-500 mt-4">📞 +91 98716 66600</p>
          <a href="#" className="text-teal-600 mt-4 block hover:underline">
            🌐 Visit Website
          </a>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {/* Tab Navigation with Improved Styles */}
          <div className="flex justify-center border-b mb-6">
            {["details", "reviews", "location"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 font-semibold relative ${
                  activeTab === tab
                    ? "border-b-4 border-teal-600 text-teal-600 transition-transform duration-300"
                    : "text-gray-500 hover:text-teal-600 transition-colors duration-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "details" && (
              <div className="bg-white p-6 rounded-lg shadow-xl mb-6">
                <h2 className="text-2xl font-bold mb-4 text-teal-600">About Café Pluck</h2>
                <p className="text-gray-700">
                  Café Pluck is a contemporary and stylish grab-and-go delicatessen located at the lower ground level of Pullman New Delhi Aerocity...
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">Highlights</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Vegetarian Friendly, Vegan Options, Gluten Free</li>
                  <li>Stylish and comfortable seating with high-speed Wi-Fi access.</li>
                  <li>Exclusive dishes by Chef Priyam Chatterjee.</li>
                </ul>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-bold mb-4 text-teal-600">Customer Reviews</h2>
                <ul>
                  {reviews.map((review, index) => (
                    <li key={index} className="mb-4 border-b pb-4">
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.text}</p>
                      <span className="text-yellow-500">Rating: {review.rating} ⭐</span>
                    </li>
                  ))}
                </ul>
                {/* Add Review */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-teal-600">Add a Review</h3>
                  <form onSubmit={handleReviewSubmit} className="mt-4">
                    <div className="flex flex-col mb-4">
                      <label className="text-sm mb-2" htmlFor="name">Your Name</label>
                      <input
                        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        type="text"
                        name="name"
                        value={newReview.name}
                        onChange={handleReviewChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label className="text-sm mb-2" htmlFor="text">Your Review</label>
                      <textarea
                        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        name="text"
                        value={newReview.text}
                        onChange={handleReviewChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label className="text-sm mb-2" htmlFor="rating">Rating</label>
                      <select
                        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        name="rating"
                        value={newReview.rating}
                        onChange={handleReviewChange}
                        required
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700 transition-transform transform hover:-translate-y-1"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            )}
            {activeTab === "location" && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-teal-600">Location</h2>
                <p className="text-gray-700">Located at: Pullman New Delhi Aerocity</p>
                <p className="text-gray-700">Indira Gandhi International Airport, New Delhi, India</p>
                {/* Google Maps Embed */}
                <div className="mt-4">
                  <iframe
                    className="w-full h-64 rounded-lg shadow-lg"
                    src="https://maps.google.com/maps?q=Pullman%20New%20Delhi%20Aerocity&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;