import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import bg from "../Assets/Images/balloon.png";
//import bg from "../Assets/Images/cafebg.jpg";

const Carousel = () => {



  const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/b1/89/43/bombay-museum-chhatrapati.jpg?w=1400&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/03/3f/fd/caption.jpg?w=1400&h=500&s=1&cx=2294&cy=1952&chk=v1_c3b28b866491ff3722ce',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=1400&h=500&s=1'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative  overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((bg, idx) => (
          <img
            key={idx}
            src={bg}
            alt={`Slide ${idx + 1}`}
            // className="2xl:w-[100vw] w-full h-2/6 object-cover"
            className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover"
          />
        ))}
      </div>

      {/* Genie Button */}
      {/* <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full"
        onClick={goToAIRecommendations}
      >
        Genie
      </button> */}

      {/* Previous Button */}
      <button
        className="absolute top-2/4 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-2/4 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full" '${currentIndex === idx ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
// import React from "react";
// // import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import taj1 from "../Assets/Images/taj1.jpeg";
// import hot from "../Assets/Images/hot-balloon.webp";

// const Carousel = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     arrows: true
// //   };

//   return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img className="d-block w-100" src={taj1} alt="First slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src={hot} alt="Second slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src={taj1} alt="Third slide"/>
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
//     // <div className="w-full">
//     //   <Slider {...settings}>
//     //     <div className="carousel-item">
//     //       <img
//     //         className="w-full h-64 object-cover"
//     //         src="https://via.placeholder.com/800x400?text=First+Slide"
//     //         alt="First slide"
//     //       />
//     //     </div>
//     //     <div className="carousel-item">
//     //       <img
//     //         className="w-full h-64 object-cover"
//     //         src="https://via.placeholder.com/800x400?text=Second+Slide"
//     //         alt="Second slide"
//     //       />
//     //     </div>
//     //     <div className="carousel-item">
//     //       <img
//     //         className="w-full h-64 object-cover"
//     //         src="https://via.placeholder.com/800x400?text=Third+Slide"
//     //         alt="Third slide"
//     //       />
//     //     </div>
//     //   </Slider>
//     // </div>
//   );
// };

// export default Carousel;
