import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';                // Core Swiper CSS
import 'swiper/css/navigation';     // Navigation CSS
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
//import 'swiper/swiper-bundle.min.css';
import Card from '../Components/Card';
import cafe2 from "../Assets/Images/cafe2.jpg";

const CardCarousel = () => {
  const tours = [
    {
      image: cafe2,
      days: 5,
      nights: 4,
      title: 'Glimpse Of Switzerland | FREE FIFA Museum Tickets',
      locations: ['Zurich'],
      price: 99800,
      oldPrice: 132900,
      savings: 33100,
      rating: 4.9,
      reviews: 326
    },
    {
      image: cafe2,
      days: 7,
      nights: 6,
      title: 'Amsterdam, Paris & Lucerne Tour With FREE Paris Pass',
      locations: ['Amsterdam', 'Paris', 'Lucerne', 'Zurich'],
      price: 135000,
      oldPrice: 150000,
      savings: 15000,
      rating: 4.8,
      reviews: 290
    },
    {
      image: cafe2,
      days: 8,
      nights: 7,
      title: 'Switzerland Amsterdam Paris | Excursion To DISNEYLAND Paris',
      locations: ['Amsterdam', 'Paris', 'Lucerne', 'Zurich'],
      price: 173000,
      oldPrice: 224900,
      savings: 51900,
      rating: 4.5,
      reviews: 32
    },
    {
        image: cafe2,
        days: 8,
        nights: 7,
        title: 'Switzerland Amsterdam Paris | Excursion To DISNEYLAND Paris',
        locations: ['Amsterdam', 'Paris', 'Lucerne', 'Zurich'],
        price: 173000,
        oldPrice: 224900,
        savings: 51900,
        rating: 4.5,
        reviews: 32
      },
    {
        image: cafe2,
        days: 8,
        nights: 7,
        title: 'Switzerland Amsterdam Paris | Excursion To DISNEYLAND Paris',
        locations: ['Amsterdam', 'Paris', 'Lucerne', 'Zurich'],
        price: 173000,
        oldPrice: 224900,
        savings: 51900,
        rating: 4.5,
        reviews: 32
      },
  ];

  return (
    <div>
    <div className="mt-8 ml-20 mr-20 p-2 bg-white border-white shadow-md rounded-lg overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Delhi</h1>
      <Swiper spaceBetween={20}        // Adjust space between slides
        slidesPerView={3}        // Set the number of visible slides
        navigation={true}               // Enable navigation buttons4
        loop={true}
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]}
        >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <Card {...tour} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="mt-20 ml-20 mr-20 p-2 bg-white border-white shadow-md rounded-lg overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Delhi</h1>
      <Swiper spaceBetween={20}        // Adjust space between slides
        slidesPerView={3}        // Set the number of visible slides
        navigation={true}               // Enable navigation buttons4
        loop={true}
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]}
        >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <Card {...tour} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="mt-20 ml-20 mr-20 p-2 bg-white border-white shadow-md rounded-lg overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Delhi</h1>
      <Swiper spaceBetween={20}        // Adjust space between slides
        slidesPerView={3}        // Set the number of visible slides
        navigation={true}               // Enable navigation buttons4
        loop={true}
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]}
        >
        {tours.map((tour, index) => (
          <SwiperSlide key={index}>
            <Card {...tour} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}; 

export default CardCarousel;
