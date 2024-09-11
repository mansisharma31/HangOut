import React from 'react';
import Slider from "react-slick";
import "./HeroSection.css"
import bg from "../Assets/Images/hot-balloon.webp";
import search from "../Assets/Images/Frame.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // You can enable arrows if you want
    dotsClass: "slick-dots custom-dots",  // Custom class for dots
    prevArrow: (
      <button className="slick-prev custom-arrow left-5 text-black">◀</button>
    ),
    nextArrow: (
      <button className="slick-next custom-arrow right-5 text-black">▶</button>
    ),
  };
  return (
    <section className="relative">
      <Slider {...settings}>
        <div>
          <img
            src={bg}
            alt="Hot Air Balloon"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src={bg}
            alt="Second Slide"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src={bg}
            alt="Third Slide"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </Slider>
      {/* <img
        src={bg}
        alt="Hot Air Balloon"
        className="w-full h-[500px] object-cover"
      /> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold">Discover Your Dream Destinations</h1>
        <p className="mt-2 text-lg">Dream Destination Options</p>
        <div className="mt-8">
          {/* <button className="bg-white text-black px-4 py-2 rounded-full">
            Play
          </button> */}
        </div>
        {/* <div className="absolute bottom-[-40px] w-[60%] mx-auto p-4 bg-white rounded-lg shadow-lg flex justify-around bg-opacity-80">
          <div>
            <label className="block text-black font-bold ">Enter Location</label>
            <input type="text" placeholder="Where are you going?" className="border p-2 rounded-md border-gray-500" />
          </div>
          <div>
            <label className="block text-black font-bold">Enter Date</label>
            <input type="date" className="border p-2 rounded-md border-gray-500" />
          </div>
          <div>
            <label className="block text-black font-bold ">Enter Guests</label>
            <input type="text" placeholder="Add" className="border p-2 rounded-md border-gray-500" />
          </div>
          <button className="bg-gray-500 text-white px-4 rounded-md flex items-center opacity-">
                <img
                    src={search}
                    alt="search icon"
                    className="w-1/4 h-auto mr-2"
                />
                Search
                </button>

          {/* <div className="flex ">
            <img
            src={search}
            alt="search icon"
            />
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md">Search</button>
          </div> 
          
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
