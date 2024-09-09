import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Carousel = () => {
  return (
    <div className="my-carousel">
      <h2 className="text-3xl font-bold mb-5">Creating memories, anytime together</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}  // Number of slides visible at the same time
        loop={true}       // Makes the carousel loop continuously
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="/path/to/image1.jpg" alt="Image 1" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/path/to/image2.jpg" alt="Image 2" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/path/to/image3.jpg" alt="Image 3" className="w-full h-auto" />
        </SwiperSlide>
        {/* Add more SwiperSlide components for additional images */}
      </Swiper>
    </div>
  );
};

export default Carousel;



// import React, { useState } from "react";
// import taj from "../Assets/Images/taj1.jpeg";

// const images = [
//   {taj},
//   {taj},
//   {taj},
// ];

// const ImageCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-5 text-center">
//         Creating memories, anytime together
//       </h2>

//       <div className="overflow-hidden relative">
//         {/* Carousel Container */}
//         <div
//           className="flex transition-transform ease-out duration-500"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {/* Images */}
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${index}`}
//               className="w-full h-64 object-cover"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
//       >
//         Prev
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full"
//       >
//         Next
//       </button>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-5">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 bg-gray-400 rounded-full mx-2 cursor-pointer ${
//               index === currentSlide ? "bg-gray-900" : ""
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
