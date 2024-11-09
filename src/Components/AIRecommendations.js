// import React, { useState } from 'react';

// const AIRecommendations = () => {
//     const [location, setLocation] = useState('');
//     const [category, setCategory] = useState('');
//     const [ageGroups, setAgeGroups] = useState([]);
//     const [budget, setBudget] = useState('');
//     const [duration, setDuration] = useState('');
//     const [results, setResults] = useState([]);

//     // Handle form submit
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const data = { location, category, age_groups: ageGroups, budget, duration };

//         // Send data to backend
//         try {
//             const response = await fetch("/recommendations", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(data)
//             });
//             const responseData = await response.json();
//             setResults(responseData.itineraries || []);
//         } catch (error) {
//             console.error("Error fetching recommendations:", error);
//         }
//     };

//     const handleAgeGroupChange = (event) => {
//         const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
//         setAgeGroups(selectedOptions);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {/* Form inputs for location, category, age groups, budget, and duration */}
//                 {/* Submit button */}
//                 <button type="submit">Get Recommendations</button>
//             </form>

//             {/* Display recommendations */}
//             <div id="results">
//                 {results.length > 0 && results.map((itinerary, index) => (
//                     <div key={index}>
//                         <h3>Itinerary {index + 1}</h3>
//                         <ul>
//                             {itinerary.places.map((place, i) => (
//                                 <li key={i}>
//                                     {place.name} ({place.category}) - {place.duration} hours - ${place.price}
//                                 </li>
//                             ))}
//                         </ul>
//                         <p>Total Duration: {itinerary.total_duration} hours</p>
//                         <p>Total Price: ${itinerary.total_price}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AIRecommendations;




// import React, { useState } from 'react';

// const AIRecommendations = () => {
//     const [location, setLocation] = useState('');
//     const [category, setCategory] = useState('');
//     const [ageGroups, setAgeGroups] = useState([]);
//     const [budget, setBudget] = useState('');
//     const [duration, setDuration] = useState('');
//     const [results, setResults] = useState([]);

//     // Handle form submit
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Prepare data for API call
//         const data = {
//             location,
//             category,
//             age_groups: ageGroups,
//             budget,
//             duration
//         };

//         // Send data to backend using fetch
//         try {
//             const response = await fetch("/recommendations", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(data)
//             });
//             const responseData = await response.json();

//             // Update results state with the response data
//             setResults(responseData.itineraries);
//         } catch (error) {
//             console.error("Error fetching recommendations:", error);
//         }
//     };

//     // Handle multi-select for age groups
//     const handleAgeGroupChange = (event) => {
//         const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
//         setAgeGroups(selectedOptions);
//     };

//     return (
//         <div>
//             <form id="recommendationForm" onSubmit={handleSubmit}>
//                 <label htmlFor="location">Location:</label>
//                 <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     required
//                 />
//                 <br />

//                 <label htmlFor="category">Category:</label>
//                 <select
//                     id="category"
//                     name="category"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                 >
//                     <option value="">Any</option>
//                     <option value="dining">Dining</option>
//                     <option value="adventure">Adventure</option>
//                     <option value="shopping">Shopping</option>
//                 </select>
//                 <br />

//                 <label htmlFor="age_groups">Age Groups (Select multiple):</label>
//                 <select
//                     id="age_groups"
//                     name="age_groups"
//                     multiple
//                     value={ageGroups}
//                     onChange={handleAgeGroupChange}
//                 >
//                     <option value="0-18">0-18</option>
//                     <option value="19-30">19-30</option>
//                     <option value="31-40">31-40</option>
//                     <option value="41-65">41-65</option>
//                     <option value="65+">65 and above</option>
//                 </select>
//                 <br />

//                 <label htmlFor="budget">Budget:</label>
//                 <input
//                     type="number"
//                     id="budget"
//                     name="budget"
//                     value={budget}
//                     onChange={(e) => setBudget(e.target.value)}
//                     required
//                 />
//                 <br />

//                 <label htmlFor="duration">Duration (in hours):</label>
//                 <input
//                     type="number"
//                     id="duration"
//                     name="duration"
//                     value={duration}
//                     onChange={(e) => setDuration(e.target.value)}
//                     required
//                 />
//                 <br />

//                 <button type="submit">Get Recommendations</button>
//             </form>

//             <div id="results">
//                 {results.length > 0 && (
//                     results.map((itinerary, index) => (
//                         <div key={index}>
//                             <h3>Itinerary {index + 1}</h3>
//                             <ul>
//                                 {itinerary.places.map((place, i) => (
//                                     <li key={i}>
//                                         {place.name} ({place.category}) - {place.duration} hours - ${place.price}
//                                     </li>
//                                 ))}
//                             </ul>
//                             <p>Total Duration: {itinerary.total_duration} hours</p>
//                             <p>Total Price: ${itinerary.total_price}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AIRecommendations;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AIRecommendations = () => {
//   const [location, setLocation] = useState("");
//   const [budget, setBudget] = useState("");
//   const [duration, setDuration] = useState("");
//   const [ageGroups, setAgeGroups] = useState([]);  // Age groups state
//   const [category, setCategory] = useState("");  // Category state
//   const [loading, setLoading] = useState(false);
//   const [recommendations, setRecommendations] = useState([]);
//   const navigate = useNavigate();

//   const generateRecommendations = async (e) => {
//     e.preventDefault();

//     if (location && budget && duration && ageGroups.length > 0) {
//       setLoading(true);  // Start loading

//       const requestData = {
//         location,
//         budget,
//         duration,
//         age_groups: ageGroups,
//         category,  // Optional
//       };

//       try {
//         const response = await axios.post("http://localhost:3000/api/recommend", requestData);
//         setRecommendations(response.data.recommendations);  // Update recommendations
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching recommendations:", error);
//         setLoading(false);
//       }
//     } else {
//       alert("Please fill in all fields!");
//     }
//   };

//   return (
//     <form onSubmit={generateRecommendations} className="space-y-6 p-8">
//       {!loading && (
//         <h2 className="text-2xl font-bold text-center text-[#4A4947] mb-4">Plan Your Perfect Day</h2>
//       )}
//       {loading ? (
//         <div className="loading-container">
//           <div className="loader">
//             <div className="dot"></div>
//             <div className="dot"></div>
//             <div className="dot"></div>
//           </div>
//           <p className="mt-4 text-lg text-[#4A4947]">Loading your plan...</p>
//         </div>
//       ) : (
//         <div className="flex flex-col space-y-4">
//           <div className="input-container">
//             <label htmlFor="location" className="block text-lg font-semibold text-[#4A4947]">Location</label>
//             <input
//               id="location"
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//               className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
//               placeholder="Enter your location"
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="budget" className="block text-lg font-semibold text-[#4A4947]">Budget (₹)</label>
//             <input
//               id="budget"
//               type="number"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               required
//               className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
//               placeholder="Enter your budget"
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="duration" className="block text-lg font-semibold text-[#4A4947]">Duration (hrs)</label>
//             <input
//               id="duration"
//               type="number"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               required
//               className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
//               placeholder="Enter duration"
//             />
//           </div>
//           {/* Age Group Selection */}
//           <div className="input-container">
//             <label htmlFor="ageGroups" className="block text-lg font-semibold text-[#4A4947]">Age Groups</label>
//             <select
//               multiple
//               id="ageGroups"
//               value={ageGroups}
//               onChange={(e) => setAgeGroups(Array.from(e.target.selectedOptions, option => option.value))}
//               className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
//             >
//               <option value="5-15">5-15</option>
//               <option value="16-40">16-40</option>
//               <option value="41-65">41-65</option>
//               <option value="65 and above">65 and above</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-[#B17457] to-[#4A4947] text-white text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
//           >
//             Generate Plan
//           </button>
//         </div>
//       )}
//       {recommendations.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold">Recommendations</h3>
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index} className="border-b-2 py-2">
//                 {rec} {/* Render each recommended activity/place */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </form>
//   );
// };

// export default AIRecommendations;





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const AIRecommendations = () => {
//   const [location, setLocation] = useState("");
//   const [budget, setBudget] = useState("");
//   const [duration, setDuration] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [recommendations, setRecommendations] = useState([]); // State to store recommendations

//   const navigate = useNavigate();

//   const generateRecommendations = async (e) => {
//     e.preventDefault();

//     if (location && budget && duration) {
//       setLoading(true); // Start loading

//       try {
//         // Prepare request payload
//         const requestData = {
//           location,
//           budget: parseInt(budget),
//           duration: parseInt(duration),
//         };

//         // Send data to the backend
//         const response = await axios.post('http://localhost:5000/api/recommend', requestData);

//         // Set recommendations from response data
//         setRecommendations(response.data.recommendations);
//         setLoading(false); // Stop loading

//         // Optionally navigate to a new page to display recommendations, if needed
//         navigate("/recommendations", {
//           state: { location, budget, duration, recommendations: response.data.recommendations },
//         });
        
//       } catch (error) {
//         console.error("Error fetching recommendations:", error);
//         setLoading(false); // Stop loading on error
//       }
//     } else {
//       alert("Please fill in all fields!");
//     }
//   };

//   return (
//     <form onSubmit={generateRecommendations} className="space-y-6 p-8">
//       {!loading && (
//         <h2 className="text-2xl font-bold text-center text-[#4A4947] mb-4">
//           Plan Your Perfect Day
//         </h2>
//       )}
//       {loading ? (
//         <div className="loading-container">
//           <div className="loader">
//             <div className="dot"></div>
//             <div className="dot"></div>
//             <div className="dot"></div>
//           </div>
//           <p className="mt-4 text-lg text-[#4A4947]">Loading your plan...</p>
//         </div>
//       ) : (
//         <div className="flex flex-col space-y-4">
//           <div className="input-container">
//             <label htmlFor="location" className="block text-lg font-semibold text-[#4A4947]">Location</label>
//             <input
//               id="location"
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//               className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
//               placeholder="Enter your location"
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="budget" className="block text-lg font-semibold text-[#4A4947]">Budget (₹)</label>
//             <input
//               id="budget"
//               type="number"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               required
//               className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
//               placeholder="Enter your budget"
//             />
//           </div>
//           <div className="input-container">
//             <label htmlFor="duration" className="block text-lg font-semibold text-[#4A4947]">Duration (hrs)</label>
//             <input
//               id="duration"
//               type="number"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               required
//               className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
//               placeholder="Enter duration"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-[#B17457] to-[#4A4947] text-white text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
//           >
//             Generate Plan
//           </button>
//         </div>
//       )}
      
//       {/* Displaying recommendations */}
//       {recommendations.length > 0 && (
//         <div className="recommendation-cards">
//           <h2 className="text-xl font-bold text-[#4A4947] mt-6">Your Recommendations</h2>
//           {recommendations.map((rec, index) => (
//             <div className="recommendation-card" key={index}>
//               <h3 className="text-lg font-semibold">{rec.title}</h3>
//               <p>Price: ₹{rec.price}</p>
//               <p>Duration: {rec.duration} hrs</p>
//               {/* Add any additional info you'd like to display */}
//             </div>
//           ))}
//         </div>
//       )}
//     </form>
//   );
// };

// export default AIRecommendations;


import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { places } from "../Components/data"; // Ensure this data includes both cafes and activities
import axios from 'axios';

const AIRecommendations = () => {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading
  const navigate = useNavigate(); // Initialize the navigate function

  const findBestCombination = (cafes, activities, budget, duration) => {
    let bestCombination = [];
    let maxUtilization = { cost: 0, time: 0 };

    const backtrack = (selectedPlaces, remainingBudget, remainingTime, index) => {
      if (remainingBudget < 0 || remainingTime < 0) return;

      const currentCost = selectedPlaces.reduce((sum, place) => sum + place.price, 0);
      const currentTime = selectedPlaces.reduce((sum, place) => sum + place.duration, 0);

      if (currentCost <= budget && currentTime <= duration) {
        if (currentCost > maxUtilization.cost || currentTime > maxUtilization.time) {
          bestCombination = [...selectedPlaces];
          maxUtilization = { cost: currentCost, time: currentTime };
        }
      }

      for (let i = index; i < cafes.length + activities.length; i++) {
        const nextPlace = i < cafes.length ? cafes[i] : activities[i - cafes.length];
        backtrack([...selectedPlaces, nextPlace], remainingBudget - nextPlace.price, remainingTime - nextPlace.duration, i + 1);
      }
    };

    backtrack([], budget, duration, 0);
    return bestCombination;
  };

  const generateRecommendations = (e) => {
    e.preventDefault();

    if (location && budget && duration) {
      setLoading(true); // Start loading

      // Simulate a loading delay of 5 seconds
      setTimeout(() => {
        const maxBudget = parseInt(budget);
        const maxDuration = parseInt(duration);

        const filteredPlaces = places.filter((place) => place.location.toLowerCase() === location.toLowerCase());
        const cafes = filteredPlaces.filter((place) => place.type === "cafe");
        const activities = filteredPlaces.filter((place) => place.type === "activity");
        const bestCombination = findBestCombination(cafes, activities, maxBudget, maxDuration);

        // Redirect to /recommendations with the selected recommendations
      
         
        navigate("/recommendations", {
          state: { location, budget, duration, recommendations: bestCombination },
        });
      }, 3000); // 5000 milliseconds = 5 seconds
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <form onSubmit={generateRecommendations} className="space-y-6 p-8">
      {!loading && (
        <h2 className="text-2xl font-bold text-center text-[#4A4947] mb-4">
          Plan Your Perfect Day
        </h2>
      )}
      {loading ? (
        <div className="loading-container">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <p className="mt-4 text-lg text-[#4A4947]">Loading your plan...</p>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          <div className="input-container">
            <label htmlFor="location" className="block text-lg font-semibold text-[#4A4947]">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
              placeholder="Enter your location"
            />
          </div>
          <div className="input-container">
            <label htmlFor="budget" className="block text-lg font-semibold text-[#4A4947]">Budget (₹)</label>
            <input
              id="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
              placeholder="Enter your budget"
            />
          </div>
          <div className="input-container">
            <label htmlFor="duration" className="block text-lg font-semibold text-[#4A4947]">Duration (hrs)</label>
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              className="border-b-2 border-[#B17457] w-full h-12 focus:outline-none focus:border-[#4A4947]"
              placeholder="Enter duration"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#B17457] to-[#4A4947] text-white text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
          >
            Generate Plan
          </button>
        </div>
      )}
    </form>
  );
};

export default AIRecommendations;