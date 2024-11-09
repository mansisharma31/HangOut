import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlanDayForm() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [ageGroups, setAgeGroups] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleAgeGroupChange = (e) => {
    const value = e.target.value;
    setAgeGroups((prevAgeGroups) =>
      prevAgeGroups.includes(value)
        ? prevAgeGroups.filter((group) => group !== value)
        : [...prevAgeGroups, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fetch recommendations from API
    const response = await fetch('/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location, budget, duration, ageGroups, category }),
    });

    const data = await response.json();

    // Store recommendations in localStorage or state
    localStorage.setItem('recommendations', JSON.stringify(data.itineraries));

    setLoading(false);

    // Redirect to the recommendations page
    navigate("/recommendations");  // Assuming you have a route like this
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <div>
          <label>Age Groups</label>
          <label>
            <input
              type="checkbox"
              value="18-25"
              onChange={handleAgeGroupChange}
            />
            18-25
          </label>
          <label>
            <input
              type="checkbox"
              value="26-40"
              onChange={handleAgeGroupChange}
            />
            26-40
          </label>
          <label>
            <input
              type="checkbox"
              value="41-65"
              onChange={handleAgeGroupChange}
            />
            41-65
          </label>
          <label>
            <input
              type="checkbox"
              value="65 and above"
              onChange={handleAgeGroupChange}
            />
            65 and above
          </label>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="dining">Dining</option>
          <option value="adventure">Adventure</option>
          <option value="attraction">Attraction</option>
          <option value="shopping">Shopping</option>
        </select>

        <button type="submit">Generate Itinerary</button>
      </form>

      {loading && <p>Loading...</p>}
    </div>
  );
}

export default PlanDayForm;
