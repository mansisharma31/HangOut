import React, { useEffect, useState } from "react";

function Recommendation() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const savedRecommendations = JSON.parse(localStorage.getItem('recommendations'));
    if (savedRecommendations) {
      setRecommendations(savedRecommendations);
    }
  }, []);

  return (
    <div>
      {recommendations.map((itinerary, index) => (
        <div key={index}>
          <h3>Itinerary {index + 1}</h3>
          <ul>
            {itinerary.places.map((place, i) => (
              <li key={i}>{place.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Recommendation;
