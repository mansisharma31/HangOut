import sk1 from "../Assets/Images/skandagiri1.png"
import sk2 from "../Assets/Images/Skandagiri2.jpg"
import sk3 from "../Assets/Images/Skandagiri3.jpg"
import mum1 from "../Assets/Images/mumbaitour1.jpg"
import mum2 from "../Assets/Images/mumbaitour2.jpg"
import mum3 from "../Assets/Images/mumbaitour3.jpg"
import diw1 from "../Assets/Images/diwalibash1.avif"
import diw2 from "../Assets/Images/diwali2.jpg"
import diw3 from "../Assets/Images/diwali3.jpg"
import img1 from "../Assets/Images/about_imagicaa_1.jpg"
import img2 from "../Assets/Images/imagica2.jpg"
import img3 from "../Assets/Images/imagica3.png"
import k1 from "../Assets/Images/karanauj1.jpg"
import k2 from "../Assets/Images/karanaujla2.png"
import k3 from "../Assets/Images/karanauj3.webp"
import sun1 from "../Assets/Images/sunburn1.jpg"
import sun2 from "../Assets/Images/sunburm2.webp"
import sun3 from "../Assets/Images/sunburn3.avif"
import del1 from "../Assets/Images/delhicity1.jpg"
import del2 from "../Assets/Images/delhicity2.jpg"
import del3 from "../Assets/Images/delhicity3.jpg"
import run1 from "../Assets/Images/runway.jpg"
import run2 from "../Assets/Images/runaway 2.jpg"
import run3 from "../Assets/Images/runway 3.jpg"
import eod1 from "../Assets/Images/eod 1.jpg"
import eod2 from "../Assets/Images/eod 2.jpg"
import eod3 from "../Assets/Images/eod 3.jpg"
import won1 from "../Assets/Images/wonderla 1.jpg"
import won2 from "../Assets/Images/wonderla 2.jpg"
import won3 from "../Assets/Images/wonderla 3.jpg"
import or1 from "../Assets/Images/orient 1.jpg"
import or2 from "../Assets/Images/orient 2.jpg"
import or3 from "../Assets/Images/orient 3.jpg"
import guf1 from "../Assets/Images/gufha 1.webp"
import guf2 from "../Assets/Images/gufha 2.avif"
import guf3 from "../Assets/Images/gufha 3.avif"
import dyu1 from "../Assets/Images/dyu art 1.jpg"
import dyu2 from "../Assets/Images/dyu art 2.jpg"
import dyu3 from "../Assets/Images/dyu art 3.jpg"
import cat1 from "../Assets/Images/cat cafe 1.jpg"
import cat2 from "../Assets/Images/cat cafe 2.jpg"
import cat3 from "../Assets/Images/cat cafe 3.jpg"
import bj1 from "../Assets/Images/bhaijaanz1.jpg"
import bj2 from "../Assets/Images/bhaijaanz 2.webp"
import bj3 from "../Assets/Images/bhaijannz3.jpg"
export const cafesDataArray = [
  {
    "id": 1,
    "title": "Café Runway1",
    "description": "A unique aviation-themed café located in Metro Walk, offering a delightful menu of global cuisine, refreshing beverages, and an exciting dining experience inside an airplane.",
    "rank": "#15 of 2,400 Restaurants in Delhi",
    "price": "₹500 - ₹2,000",
    "cuisine": "Multi-Cuisine, Vegetarian Friendly, Vegan Options",
    "specialDiets": ["Vegetarian Friendly", "Vegan Options", "Gluten Free Options"],
    "rating": 4.5,
    "reviews": 200,
    "image": `${run1}`,
    "images": [
      `${run2}`,`${run3}`      
    ],
    "contact": "+91 91234 56789",
    "website": "https://caferunway1.com",
    "locations": ["Metro Walk, Rohini, Delhi, India"],
    "timings": "Open Now 11:00 am - 11:00 pm",
    "highlights": [
      "Aviation-themed dining",
      "Outdoor seating",
      "Pet-friendly",
      "Kids play area"
    ],
    "mapLink": "https://maps.google.com/maps?q=Metro%20Walk%20Rohini%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"  
  },

  {
    "id": 2,
    "title": "Café Orient Express",
    "description": "A luxurious train-themed café that takes you on a journey through fine dining with a variety of European and Continental dishes.",
    "rank": "#5 of 12,000 Restaurants in Delhi",
    "price": "₹1,000 - ₹2,500",
    "cuisine": "European, Continental",
    "specialDiets": ["Vegetarian Friendly", "Gluten Free Options"],
    "rating": 4.8,
    "reviews": 250,
    "image": `${or1}`,
    "images": [
      `${or2}`,
      `${or3}`
    ],
    "contact": "+91 98765 43211",
    "website": "https://www.tajhotels.com/en-in/hotels/taj-palace-new-delhi/restaurants/orient-express",
    "locations": ["Connaught Place, New Delhi, India"],
    "timings": "Open Now 11:00 am - 10:00 pm",
    "highlights": ["Fine dining", "Themed restaurant", "Luxurious ambiance"],
    "mapLink": "https://maps.google.com/maps?q=Connaught%20Place%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  
  {
    "id": 3,
    "title": "Bhaijaanz Restaurant",
    "description": "A Salman Khan-themed restaurant with Bollywood vibes, serving Indian and Mughlai dishes inspired by the superstar.",
    "rank": "#27 of 5,345 Restaurants in Mumbai",
    "price": "₹500 - ₹2,000",
    "cuisine": "Indian, Mughlai",
    "specialDiets": ["Vegetarian Friendly", "Halal"],
    "rating": 4.4,
    "reviews": 180,
    "image": `${bj2}`,
    "images": [
      `${bj1}`,
      `${bj3}`
    ],
    "contact": "+91 98765 43212",
    "website": "https://bhaijaanz.com",
    "locations": ["Bandra, Mumbai, India"],
    "timings": "Open Now 12:00 pm - 11:00 pm",
    "highlights": ["Bollywood theme", "Celebrity-inspired décor", "Indian cuisine"],
    "mapLink": "https://maps.google.com/maps?q=Bandra%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "id": 4,
    "title": "Cat Café Studio",
    "description": "A cozy space where you can enjoy delicious food while spending time with adoptable cats in a homely, relaxing environment.",
    "rank": "#6 of 5,345 Restaurants in Mumbai",
    "price": "₹200 - ₹1,000",
    "cuisine": "Cafe, Vegetarian Friendly, Vegan Options",
    "specialDiets": ["Vegetarian Friendly", "Vegan Options"],
    "rating": 4.7,
    "reviews": 300,
    "image": `${cat1}`,
    "images": [
      `${cat2}`,`${cat3}`
      ],
    "contact": "+91 98765 43213",
    "website": "https://catcafestudio.com",
    "locations": ["Versova, Mumbai, India"],
    "timings": "Open Now 10:00 am - 10:00 pm",
    "highlights": ["Pet adoption", "Cat-friendly", "Vegan options"],
    "mapLink": "https://maps.google.com/maps?q=Versova%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "id": 5,
    "title": "Gufha Restaurant",
    "description": "A jungle-themed restaurant that offers a unique dining experience with a variety of Indian and Mughlai dishes served in a cave-like ambiance.",
    "rank": "#9 of 8,000 Restaurants in Bangalore",
    "price": "₹700 - ₹2,200",
    "cuisine": "Indian, Mughlai",
    "specialDiets": ["Halal", "Vegetarian Friendly"],
    "rating": 4.5,
    "reviews": 210,
    "image": `${guf1}`,
    "images": [
      `${guf2}`,`${guf3}`
    ],
    "contact": "+91 98765 43214",
    "website": "https://gufharestaurant.com",
    "locations": ["Jayanagar, Bangalore, India"],
    "timings": "Open Now 12:00 pm - 11:00 pm",
    "highlights": ["Themed restaurant", "Unique ambiance", "Cave dining"],
    "mapLink": "https://maps.google.com/maps?q=Jayanagar%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    "id": 6,
    "title": "Dyu Art Café",
    "description": "A beautiful café housed in a traditional Bangalore bungalow, offering a relaxing space for art lovers to enjoy coffee and light snacks amidst an artistic atmosphere.",
    "rank": "#15 of 8,000 Restaurants in Bangalore",
    "price": "₹150 - ₹800",
    "cuisine": "Cafe, Continental, Vegetarian Friendly",
    "specialDiets": ["Vegetarian Friendly", "Vegan Options"],
    "rating": 4.7,
    "reviews": 320,
    "image": `${dyu3}`,
    "images": [
      `${dyu1}`,
      `${dyu2}`
    ],
    "contact": "+91 98765 43215",
    "website": "https://dyuartcafe.com",
    "locations": ["Koramangala, Bangalore, India"],
    "timings": "Open Now 9:00 am - 10:00 pm",
    "highlights": ["Art gallery", "Calm atmosphere", "Traditional bungalow"],
    "mapLink": "https://maps.google.com/maps?q=Koramangala%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }  
];

export const eventsArray = [
  {
    "id": 101,
    "title": "Karan Aujla - It Was All A Dream",
    "description": "An exciting event featuring Karan Aujla, details on the location to be announced soon.",
    "rank": "NA",
    "price": "₹3999 - ₹14999",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": "NA",
    "reviews": 0,
    "image": `${k1}`,
    "images": [`${k2}`,`${k3}`],
    "contact": "To be announced soon",
    "website": "N/A",
    "locations": ["To be announced soon"],
    "timings": "N/A",
    "highlights": [],
    "mapLink": "N/A"
  },
  {
    "id": 102,
    "title": "Sunburn Arena Ft. Alan Walker- Mumbai ",
    "description": "Experience thrills and fun at Imagica Theme & Water Park located in Devnhave, Mumbai.",
    "rank": "NA",
    "price": "₹664 - ₹2477",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": 4.6,
    "reviews": 125,
    "image": `${sun1}`,
    "images": [`${sun2}`,`${sun3}`],
    "contact": "N/A",
    "website": "N/A",
    "locations": ["Devnhave, Mumbai"],
    "timings": "N/A",
    "highlights": [],
    "mapLink": "N/A"
  },
  {
    "id": 103,
    "title": "Diwali Bash ft. Parmish Verma and Sunanda Sharma",
    "description": "Join us for a spectacular Diwali Bash featuring Parmish Verma and Sunanda Sharma at World Street by Omaxe.",
    "rank": "NA",
    "price": "₹799 - ₹3499",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": "NA",
    "reviews": 0,
    "image": `${diw1}`,
    "images": [`${diw2}`, `${diw3}`],
    "contact": "N/A",
    "website": "N/A",
    "locations": ["World Street by Omaxe"],
    "timings": "N/A",
    "highlights": [],
    "mapLink": "N/A"
  }
]

export const tripsArray =[
  {
    "id": 201,
    "title": "Delhi Darshan Trip",
    "description": "A full-day tour of Delhi covering famous landmarks such as India Gate, Red Fort, Qutub Minar, and more.",
    "rank": "1",
    "price": "₹999 - ₹2999",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": "4.7",
    "reviews": 158,
    "image": `${del3}`,
    "images": [`${del2}`,`${del1}`],
    "contact": "+91 9876543210",
    "website": "https://delhidarshan.com",
    "locations": ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"],
    "timings": "9:00 AM - 6:00 PM",
    "highlights": ["Air-conditioned transport", "Expert guide", "Entry tickets included"],
    "mapLink": "https://maps.google.com/?q=Delhi+Darshan"
  },
  {
    "id": 202,
    "title": "Mumbai City Tour",
    "description": "Explore the vibrant city of Mumbai with visits to Gateway of India, Marine Drive, and other iconic spots.",
    "rank": "2",
    "price": "₹1499 - ₹4999",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": "4.8",
    "reviews": 245,
    "image": `${mum2}`,
    "images": [`${mum3}`, `${mum1}`],
    "contact": "+91 9123456789",
    "website": "https://mumbaicitytour.com",
    "locations": ["Gateway of India", "Marine Drive", "Chhatrapati Shivaji Terminus", "Haji Ali Dargah"],
    "timings": "10:00 AM - 7:00 PM",
    "highlights": ["Personalized itinerary", "Comfortable transportation", "Cultural insights"],
    "mapLink": "https://maps.google.com/?q=Mumbai+City+Tour"
  },
  {
    "id": 203,
    "title": "Skandagiri Trek",
    "description": "Takethe Skandagiri Sunrise Trek in Bangalore and marvel at the enchanting sunrise from the summit, as the sun’s first rays break through the mist, illuminating the hills below. Setout on an 8-kilometre trail through dense forests and rocky terrain, revealing diverse flora and fauna, including unique plants and various wildlife. Visit the Papagni Temple at the trek's start and enjoy views of the ruins of Tipu Sultan's fortress from the summit, highlighting the rich historical significance of Skandagiri. Choosethe premium package and enjoy hassle-free pickup service from various locations in Bangalore, with the premium option including a delicious breakfast..",
    "rank": "3",
    "price": "₹1000 - ₹2000",
    "rating": "4.6",
    "reviews": 96,
    "image": `${sk2}`,
    "images": [`${sk1}`, `${sk3}`],
    "contact": "+91 8156274000",
    "website": "https://www.thrillophilia.com/tours/night-trekking-in-skandagiri-bangalore",
    "locations": ['Jadalathimmanahalli, Karnataka 562103, India'],
    "timings": "11:30 PM",
    "highlights": ["Night trek", "Camping option", "Experienced trek guide"],
    "mapLink": "https://www.google.com/maps?cid=7704917194824313299"
  } 
]

export const adventuresArray = [
  {
    "id": 301,
    "title": "EOD Adventure Park",
    "description": "An exciting adventure park in Delhi offering activities like zip-lining, rock climbing, boating, and much more.",
    "rank": "2",
    "price": "₹500 - ₹2000",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": "4.6",
    "reviews": 132,
    "image": `${eod1}`,
    "images": [`${eod2}`, `${eod3}`],
    "contact": "+91 9123456780",
    "website": "https://eodadventurepark.com",
    "locations": ["EOD Adventure Park, Delhi"],
    "timings": "10:00 AM - 7:00 PM",
    "highlights": ["Zip-lining", "Rock climbing", "Boating", "Team-building activities"],
    "mapLink": "https://maps.google.com/?q=EOD+Adventure+Park+Delhi"
  },
  {
    "id": 302,
    "title": "Imagica Theme and Water Park",
    "description": "A premier destination in Mumbai offering thrilling rides, water slides, and entertainment for all age groups.",
    "rank": "1",
    "price": "₹999 - ₹3999",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": "4.8",
    "reviews": 468,
    "image": `${img1}`,
    "images": [`${img2}`,`${img3}`],
    "contact": "+91 9988776655",
    "website": "https://www.imagicaaworld.com",
    "locations": ["Imagica Theme Park, Mumbai"],
    "timings": "11:00 AM - 9:00 PM",
    "highlights": ["Thrilling rides", "Water park", "Live entertainment", "Family-friendly"],
    "mapLink": "https://maps.google.com/?q=Imagica+Theme+Park+Mumbai"
  },
  {
    "id": 303,
    "title": "Wonderla Amusement Park",
    "description": "A top amusement park in Bangalore featuring a variety of rides, a water park, and attractions for thrill-seekers.",
    "rank": "1",
    "price": "₹750 - ₹2500",
    "cuisine": "N/A",
    "specialDiets": [],
    "rating": "4.9",
    "reviews": 512,
    "image": `${won1}`,
    "images": [`${won2}`, `${won3}`],
    "contact": "+91 9090909090",
    "website": "https://www.wonderla.com/bangalore",
    "locations": ["Wonderla Amusement Park, Bangalore"],
    "timings": "11:00 AM - 8:00 PM",
    "highlights": ["Water rides", "High-thrill rides", "Wave pool", "Rain disco"],
    "mapLink": "https://maps.google.com/?q=Wonderla+Bangalore"
  }  
]

// export const cafesDataArray = [
//   {
//     id: 1001,
//     state: "Delhi",
//     cafes: [
//       {
//         id: 10011,
//         title: "Café Runway1",
//         description:
//           "A unique aviation-themed café located in Metro Walk, offering a delightful menu of global cuisine, refreshing beverages, and an exciting dining experience inside an airplane.",
//         rank: "#15 of 2,400 Restaurants in Delhi",
//         price: "₹500 - ₹2,000",
//         cuisine: "Multi-Cuisine, Vegetarian Friendly, Vegan Options",
//         specialDiets: [
//           "Vegetarian Friendly",
//           "Vegan Options",
//           "Gluten Free Options",
//         ],
//         rating: 4.5,
//         reviews: 200,
//         image:
//           "https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwxfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         images: [
//           "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwyfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//           "https://images.unsplash.com/photo-1543342385-d28383d7c77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         ],
//         contact: "+91 91234 56789",
//         website: "https://caferunway1.com",
//         locations: ["Metro Walk, Rohini, Delhi, India"],
//         timings: "Open Now 11:00 am - 11:00 pm",
//         highlights: [
//           "Aviation-themed dining",
//           "Outdoor seating",
//           "Pet-friendly",
//           "Kids play area",
//         ],
//         mapLink:
//           "https://maps.google.com/maps?q=Metro%20Walk%20Rohini%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed",
//       },
//       {
//         id: 10012,
//         title: "Café Orient Express",
//         description:
//           "A luxurious train-themed café that takes you on a journey through fine dining with a variety of European and Continental dishes.",
//         rank: "#5 of 12,000 Restaurants in Delhi",
//         price: "₹1,000 - ₹2,500",
//         cuisine: "European, Continental",
//         specialDiets: ["Vegetarian Friendly", "Gluten Free Options"],
//         rating: 4.8,
//         reviews: 250,
//         image:
//           "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwxfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         images: [
//           "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//           "https://images.unsplash.com/photo-1574664060400-dfdb1b4d7ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         ],
//         contact: "+91 98765 43211",
//         website: "https://orientexpresscafe.com",
//         locations: ["Connaught Place, New Delhi, India"],
//         timings: "Open Now 11:00 am - 10:00 pm",
//         highlights: ["Fine dining", "Themed restaurant", "Luxurious ambiance"],
//         mapLink:
//           "https://maps.google.com/maps?q=Connaught%20Place%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed",
//       },
//     ],
//   },

//   {
//     id: 1002,
//     state: "Mumbai",
//     cafes: [
//       {
//         id: 10021,
//         title: "Bhaijaanz Restaurant",
//         description:
//           "A Salman Khan-themed restaurant with Bollywood vibes, serving Indian and Mughlai dishes inspired by the superstar.",
//         rank: "#27 of 5,345 Restaurants in Mumbai",
//         price: "₹500 - ₹2,000",
//         cuisine: "Indian, Mughlai",
//         specialDiets: ["Vegetarian Friendly", "Halal"],
//         rating: 4.4,
//         reviews: 180,
//         image:
//           "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         images: [
//           "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//           "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         ],
//         contact: "+91 98765 43212",
//         website: "https://bhaijaanz.com",
//         locations: ["Bandra, Mumbai, India"],
//         timings: "Open Now 12:00 pm - 11:00 pm",
//         highlights: [
//           "Bollywood theme",
//           "Celebrity-inspired décor",
//           "Indian cuisine",
//         ],
//         mapLink:
//           "https://maps.google.com/maps?q=Bandra%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed",
//       },
//       {
//         id: 10022,
//         title: "Cat Café Studio",
//         description:
//           "A cozy space where you can enjoy delicious food while spending time with adoptable cats in a homely, relaxing environment.",
//         rank: "#6 of 5,345 Restaurants in Mumbai",
//         price: "₹200 - ₹1,000",
//         cuisine: "Cafe, Vegetarian Friendly, Vegan Options",
//         specialDiets: ["Vegetarian Friendly", "Vegan Options"],
//         rating: 4.7,
//         reviews: 300,
//         image:
//           "https://images.unsplash.com/photo-1597079385658-7a2c278de95e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         images: [
//           "https://images.unsplash.com/photo-1597079385658-7a2c278de95e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//           "https://images.unsplash.com/photo-1574664060400-dfdb1b4d7ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         ],
//         contact: "+91 98765 43213",
//         website: "https://catcafestudio.com",
//         locations: ["Versova, Mumbai, India"],
//         timings: "Open Now 10:00 am - 10:00 pm",
//         highlights: ["Pet adoption", "Cat-friendly", "Vegan options"],
//         mapLink:
//           "https://maps.google.com/maps?q=Versova%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed",
//       },
//     ],
//   },

//   {
//     id: 1003, // Unique ID for the state
//     state: "Bangalore",
//     cafes: [
//       {
//         id: 10031,
//         title: "Gufha Restaurant",
//         description:
//           "A jungle-themed restaurant that offers a unique dining experience with a variety of Indian and Mughlai dishes served in a cave-like ambiance.",
//         rank: "#9 of 8,000 Restaurants in Bangalore",
//         price: "₹700 - ₹2,200",
//         cuisine: "Indian, Mughlai",
//         specialDiets: ["Halal", "Vegetarian Friendly"],
//         rating: 4.5,
//         reviews: 210,
//         image:
//           "https://images.unsplash.com/photo-1504468387801-2933a9d48cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwxfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         images: [
//           "https://images.unsplash.com/photo-1504468387801-2933a9d48cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//           "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         ],
//         contact: "+91 98765 43214",
//         website: "https://gufharestaurant.com",
//         locations: ["Jayanagar, Bangalore, India"],
//         timings: "Open Now 12:00 pm - 11:00 pm",
//         highlights: ["Themed restaurant", "Unique ambiance", "Cave dining"],
//         mapLink:
//           "https://maps.google.com/maps?q=Jayanagar%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed",
//       },
//       {
//         id: 10032,
//         title: "Dyu Art Café",
//         description:
//           "A beautiful café housed in a traditional Bangalore bungalow, offering a relaxing space for art lovers to enjoy coffee and light snacks amidst an artistic atmosphere.",
//         rank: "#15 of 8,000 Restaurants in Bangalore",
//         price: "₹150 - ₹800",
//         cuisine: "Cafe, Continental, Vegetarian Friendly",
//         specialDiets: ["Vegetarian Friendly", "Vegan Options"],
//         rating: 4.7,
//         reviews: 320,
//         image:
//           "https://images.unsplash.com/photo-1590080876934-f5e71284b474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         images: [
//           "https://images.unsplash.com/photo-1590080876934-f5e71284b474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//           "https://images.unsplash.com/photo-1541542680-73f3a58ec776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ2NTB8MHwxfGFsbHwzfHx8fHx8fHwxNjcwOTczNTY4&ixlib=rb-4.0.3&q=80&w=1080",
//         ],
//         contact: "+91 98765 43215",
//         website: "https://dyuartcafe.com",
//         locations: ["Koramangala, Bangalore, India"],
//         timings: "Open Now 9:00 am - 10:00 pm",
//         highlights: ["Art gallery", "Calm atmosphere", "Traditional bungalow"],
//         mapLink:
//           "https://maps.google.com/maps?q=Koramangala%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed",
//       },
//     ],
//   },
// ];
