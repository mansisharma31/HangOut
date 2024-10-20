import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { places } from "../Components/data"; // Ensure this data includes both cafes and activities

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